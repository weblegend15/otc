import firebase from 'firebase/app';
import 'firebase/storage';
import { firestore } from '../../../configureStore';
import { FIRST_MESSAGE_TEXT } from '../../../config';
import request from '../../../utils/apiRequest';

const firebaseAuth = token => {
  firebase
    .auth()
    .signInWithCustomToken(token)
    .catch(error => {
      return error;
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
            if (msg.type === 'OFFER') {
              const offer = request(
                `/groups/${groupId}/offers/${msg.extra.id}`,
                'GET',
                null,
                true,
              );

              return offer.then(newOffer => {
                return { id: msg.id, ...msg, offer: newOffer };
              });
            }
            return storageRef
              .child(msg.extra.file.uuid)
              .getDownloadURL()
              .then(url => {
                return { id: msg.id, ...msg, url };
              });
          });
        }

        return Promise.all(promises).then(newMessage => {
          action(newMessage);
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
          if (message.type === 'OFFER') {
            const offer = request(
              `/groups/${selectedGroupId}/offers/${message.extra.id}`,
              'GET',
              null,
              true,
            );

            return offer.then(newOffer => {
              return { id: message.id, ...message, offer: newOffer };
            });
          }
          return storageRef
            .child(message.extra.file.uuid)
            .getDownloadURL()
            .then(url => {
              return { id: message.id, ...message, url };
            });
        });
      }

      return Promise.all(promises).then(allMsgs => {
        if (allMsgs.length !== limit) {
          allMsgs.push(FIRST_MESSAGE_TEXT);
        }
        const chats = allMsgs.reverse();
        action(chats);
        if (scrollEvent !== null) {
          scrollEvent(allMsgs[allMsgs.length - 1].id);
        }
      });
    });
};

export { firebaseAuth, getMessagesService, getNewMessage };
