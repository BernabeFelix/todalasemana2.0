import Firebase from 'firebase';
import firebaseConfig from './firebase.json';

export default (!Firebase.apps.length
  ? Firebase.initializeApp(firebaseConfig)
  : Firebase.app());
