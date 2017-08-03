import firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyAIkCOrgii0tr-vY_hp3gHJ0ZQiwNRXohU',
  authDomain: 'vote-ea8bd.firebaseapp.com',
  databaseURL: 'https://vote-ea8bd.firebaseio.com',
  projectId: 'vote-ea8bd',
  storageBucket: 'vote-ea8bd.appspot.com',
  messagingSenderId: '613135983817',
};

const app = firebase.initializeApp(config);
const db = app.database();
export default db;
