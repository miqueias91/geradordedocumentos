// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyBpg_xbTI83vuOjHJNF0WLrTmXukglCQ84",
  authDomain: "gerador-de-documentos-86c72.firebaseapp.com",
  databaseURL: "https://gerador-de-documentos-86c72.firebaseio.com",
  projectId: "gerador-de-documentos-86c72",
  storageBucket: "gerador-de-documentos-86c72.appspot.com",
  messagingSenderId: "34113913862",
  appId: "1:34113913862:web:6674353c2bc9f152ceaf87",
  measurementId: "G-HSR76LH18G"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

firebase.auth().signInAnonymously().catch(function(error) {
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log(errorMessage)
});