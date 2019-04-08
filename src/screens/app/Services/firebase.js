import firebase from 'firebase/app';
import { firestore } from '../../../configureStore';

const firebaseAuth = token => {
  firebase
    .auth()
    .signInWithCustomToken(token)
    .catch(error => {
      return error;
    });
};

const getMessageServices = (createdAt, limit, id, getMoreMessages) => {
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
        msgs = msgs.reverse();
        getMoreMessages(msgs);
      }
    });
};

export { firebaseAuth, getMessageServices };
