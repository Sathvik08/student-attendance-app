 import * as firebase from "firebase";
 
const firebaseConfig = {
   apiKey: "AIzaSyBPWB76c8Lm9Iqh8ngeYtqIezMZYEyf9gw",
    authDomain: "student-3932d.firebaseapp.com",
    databaseURL: "https://student-3932d-default-rtdb.firebaseio.com",
    projectId: "student-3932d",
    storageBucket: "student-3932d.appspot.com",
    messagingSenderId: "1039563059822",
    appId: "1:1039563059822:web:a634d20fda1cbdf4902c7f"
};

// Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default  firebase.database()
 
 

  