import firebase from 'firebase/app';
import 'firebase/storage';
import { firestore } from '../../../configureStore';
import { FIRST_MESSAGE_TEXT } from '../../../config';

const firebaseAuth = token => {
  firebase
    .auth()
    .signInWithCustomToken(token)
    .catch(error => {
      return error;
    });
};

const getNewMessage = (id, action) => {
  return firestore
    .collection('chats')
    .doc(id)
    .collection('messages')
    .orderBy('created_at', 'desc')
    .limit(1)
    .onSnapshot(messages => {
      const msgs = [];
      if (!messages.empty) {
        messages.forEach(message => {
          msgs.push({ id: message.id, ...message.data() });
        });
        action(msgs);
      }
    });
};

const getMessagesService = (
  createdAt,
  id,
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
          return storageRef
            .child(message.extra.file.uuid)
            .getDownloadURL()
            .then(url => {
              return { id: message.id, ...message, url };
            });
        });
      }

      return Promise.all(promises).then(allMsgs => {
        if (allMsgs.size !== limit) {
          allMsgs.push(FIRST_MESSAGE_TEXT);
        }
        const chats = allMsgs.reverse();
        if (scrollEvent !== null) {
          scrollEvent(allMsgs[allMsgs.length - 1].id);
        }
        action(chats);
      });
    });
};

export { firebaseAuth, getMessagesService, getNewMessage };
