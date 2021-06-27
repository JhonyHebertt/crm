import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyDwYFP_LttEh6hCjitTamI5ZVpe62HEbBA",
  authDomain: "crm-curso.firebaseapp.com",
  projectId: "crm-curso",
  storageBucket: "crm-curso.appspot.com",
  messagingSenderId: "723755516569",
  appId: "1:723755516569:web:8912e9dc5493f129b5ae08"
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
