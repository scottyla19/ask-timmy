import firebase from "firebase";
var config = {
  /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
  apiKey: "AIzaSyAOtuKWUDryjXLbmi9e2bnhFuBJB7GzvOo",
  authDomain: "ask-timmy.firebaseapp.com",
  databaseURL: "https://ask-timmy.firebaseio.com/",
  messagingSenderId: "123123123123"
};
var fire = firebase.initializeApp(config);
export default fire;
