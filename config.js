import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAiLG7XWy-6sAwexXPTPYUWx_KSov7MYJ4",
    authDomain: "teamvotingapp-66a0f.firebaseapp.com",
    databaseURL: "https://teamvotingapp-66a0f-default-rtdb.firebaseio.com",
    projectId: "teamvotingapp-66a0f",
    storageBucket: "teamvotingapp-66a0f.appspot.com",
    messagingSenderId: "966933909188",
    appId: "1:966933909188:web:5d9c1190a4bca296044391",
    measurementId: "G-595HS7V5NH"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();