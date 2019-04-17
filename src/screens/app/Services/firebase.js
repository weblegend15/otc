import firebase from 'firebase/app';
import 'firebase/storage';
import { firestore } from '../../../configureStore';
import { FIRST_MESSAGE_TEXT, NOTIFICATION_COUNT } from '../../../config';
import request from '../../../utils/apiRequest';

const firebaseAuth = token => {
  firebase
    .auth()
    .signInWithCustomToken(token)
    .catch(error => {
      return error;
    });
};

const getNotifications = (id, action) => {
  return firestore
    .collection('users')
    .doc(id)
    .collection('notifications')
    .orderBy('timestamp', 'desc')
    .limit(NOTIFICATION_COUNT)
    .onSnapshot(notifications => {
      const notifies = [];
      if (!notifications.empty) {
        notifications.forEach(notification => {
          notifies.push({
            id: notification.id,
            ...notification.data(),
          });
        });
        action(notifies);
      }
    });
};

const getCurrentOffer = (id, groupId, action) => {
  return firestore
    .collection('chats')
    .doc(id)
    .collection('alerts')
    .orderBy('created_at', 'desc')
    .limit(1)
    .onSnapshot(offers => {
      const newOffer = [];
      if (!offers.empty) {
        offers.forEach(offer => {
          newOffer.push({ id: offer.id, ...offer.data() });
        });
        request(
          `/groups/${groupId}/offers/${newOffer[0].extra.id}`,
          'GET',
          null,
          true,
        ).then(recentOffer => {
          action({ id: newOffer[0].id, ...newOffer[0], offer: recentOffer });
        });
      }
    });
};

const getNewMessage = (id, groupId, action) => {
  const storageRef = firebase.storage().ref();

  return firestore
    .collection('chats')
    .doc(id)
    .collection('messages')
    .orderBy('created_at', 'desc')
    .limit(1)
    .onSnapshot(messages => {
      let promises = [];
      const msgs = [];
      if (!messages.empty) {
        messages.forEach(message => {
          msgs.push({ id: message.id, ...message.data() });
        });

        if (!msgs.empty) {
          promises = msgs.map(msg => {
            if (!msg.extra) {
              return msg;
            }
            if (msg.type !== 'OFFER') {
              return storageRef
                .child(msg.extra.file.uuid)
                .getDownloadURL()
                .then(url => {
                  return { id: msg.id, ...msg, url };
                });
            }
          });
        }

        return Promise.all(promises).then(newMessage => {
          if (!newMessage[0]) {
            newMessage.push(FIRST_MESSAGE_TEXT);
          }
          action(newMessage.filter(Boolean));
        });
      }
    });
};

const getMessagesService = (
  createdAt,
  id,
  selectedGroupId,
  limit,
  action,
  scrollEvent = null,
) => {
  const storageRef = firebase.storage().ref();

  return firestore
    .collection('chats')
    .doc(id)
    .collection('messages')
    .where('created_at', '<', createdAt)
    .orderBy('created_at', 'desc')
    .limit(limit)
    .get()
    .then(msgs => {
      let promises = [];
      const messages = [];

      msgs.forEach(msg => {
        messages.push({ id: msg.id, ...msg.data() });
      });

      if (!messages.empty) {
        promises = messages.map(message => {
          if (!message.extra) {
            return message;
          }
          if (message.type !== 'OFFER') {
            return storageRef
              .child(message.extra.file.uuid)
              .getDownloadURL()
              .then(url => {
                return { id: message.id, ...message, url };
              });
          }
        });
      }

      return Promise.all(promises).then(allMsgs => {
        if (allMsgs.length !== limit) {
          allMsgs.push(FIRST_MESSAGE_TEXT);
        }
        const chats = allMsgs.reverse().filter(Boolean);
        action(chats);
        if (scrollEvent !== null && chats.length > 1) {
          scrollEvent(chats[chats.length - 1].id);
        }
      });
    });
};

export {
  firebaseAuth,
  getNotifications,
  getMessagesService,
  getNewMessage,
  getCurrentOffer,
};
