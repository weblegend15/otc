import firebase from 'firebase/app';
import { firestore } from '../../../configureStore';
import { FIREST_MESSAGE_TEXT } from '../../../config';

const firebaseAuth = token => {
  firebase
    .auth()
    .signInWithCustomToken(token)
    .catch(error => {
      return error;
    });
};

const getMessageServices = (createdAt, limit, id, action) => {
  return firestore
    .collection('chats')
    .doc(id)
    .collection('messages')
    .where('created_at', '<', createdAt)
    .orderBy('created_at', 'desc')
    .limit(limit)
    .onSnapshot(messages => {
      let msgs = [];
      if (!messages.empty) {
        messages.forEach(message => {
          msgs.push({ id: message.id, ...message.data() });
        });
        if (messages.size !== limit) {
          msgs.push(FIREST_MESSAGE_TEXT);
        }
        msgs = msgs.reverse();
        action(msgs);
      } else {
        msgs.push(FIREST_MESSAGE_TEXT);
        action(msgs);
      }
    });
};

const getInitialMessages = (id, limit, action, scrollEvent = null) => {
  return firestore
    .collection('chats')
    .doc(id)
    .collection('messages')
    .orderBy('created_at', 'desc')
    .limit(limit)
    .get()
    .then(messages => {
      let msgs = [];
      if (!messages.empty) {
        messages.forEach(message => {
          msgs.push({ id: message.id, ...message.data() });
        });
        if (messages.size !== limit) {
          msgs.push(FIREST_MESSAGE_TEXT);
        }
        msgs = msgs.reverse();
        action(msgs);
        if (scrollEvent !== null) {
          scrollEvent(msgs[msgs.length - 1].id);
        }
      } else {
        msgs.push(FIREST_MESSAGE_TEXT);
        action(msgs);
      }
    });
};

export { firebaseAuth, getMessageServices, getInitialMessages };
