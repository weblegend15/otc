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
  return firestore
    .collection('chats')
    .doc(id)
    .collection('messages')
    .where('created_at', '<', createdAt)
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
          msgs.push(FIRST_MESSAGE_TEXT);
        }
        msgs = msgs.reverse();
        action(msgs);
        if (scrollEvent !== null) {
          scrollEvent(msgs[msgs.length - 1].id);
        }
      } else {
        msgs.push(FIRST_MESSAGE_TEXT);
        action(msgs);
      }
    });
};

const getFileDownloadUrl = msg => {
  const storageRef = firebase.storage().ref();
  const startRef = storageRef.child(msg.extra.file.uuid);
  startRef
    .getDownloadURL()
    .then(url => {
      return url;
    })
    .catch(err => {
      return err;
    });
};

export { firebaseAuth, getMessagesService, getFileDownloadUrl, getNewMessage };
