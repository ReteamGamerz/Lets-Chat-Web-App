function adduser()
{
    username = document.getElementById("username").value;
    localStorage.setItem("Username", username)
    window.location = "kwitter_room.html";
}

//Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAJplqYhs-9h9z_WPmmR4q4thjuhB5plKI",
  authDomain: "kwitter-cd357.firebaseapp.com",
  databaseURL: "https://kwitter-cd357-default-rtdb.firebaseio.com",
  projectId: "kwitter-cd357",
  storageBucket: "kwitter-cd357.appspot.com",
  messagingSenderId: "930675688634",
  appId: "1:930675688634:web:d5858d99eeb42898192e83"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);



  function AddUser() {
    user_name = document.getElementById("user_name").value;
    
    firebase.database().ref("/").child(user_name).update({ purpose : "adding name"
  });
  }