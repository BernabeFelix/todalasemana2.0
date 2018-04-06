/* For js reference of firebase auth: https://firebase.google.com/docs/reference/js/firebase.auth.Auth */

import Firebase from 'firebase';
import firebaseConfig from '../../../firebase.json';

export default (!Firebase.apps.length
  ? Firebase.initializeApp(firebaseConfig)
  : Firebase.app());
