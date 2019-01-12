import * as firebase from 'firebase';






const config = {
  apiKey: "AIzaSyAjQ4cwHsjs9P97KoF6HJiaxFeA3itu_WY",
  authDomain: "fir-auth-react-283b6.firebaseapp.com",
  databaseURL: "https://fir-auth-react-283b6.firebaseio.com",
  projectId: "fir-auth-react-283b6",
  storageBucket: "fir-auth-react-283b6.appspot.com",
  messagingSenderId: "509478731346"
};



if (!firebase.apps.length) {
  firebase.initializeApp(config);
}





const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth
};

