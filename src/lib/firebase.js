import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCoANIhj3OdbFSskAhJp-Acxb-l_D63Zz4',
  authDomain: 'instagram-yt-a299b.firebaseapp.com',
  projectId: 'instagram-yt-a299b',
  storageBucket: 'instagram-yt-a299b.appspot.com',
  messagingSenderId: '612173228399',
  appId: '1:612173228399:web:0c6121ae218dbada7d209a',
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
