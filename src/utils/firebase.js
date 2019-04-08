import firebase from 'firebase/app';

const firebaseAuth = token => {
  firebase
    .auth()
    .signInWithCustomToken(token)
    .catch(error => {
      return error;
    });
};

export default firebaseAuth;
