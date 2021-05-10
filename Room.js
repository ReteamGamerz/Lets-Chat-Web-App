// Your web app's Firebase configuration
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

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log("Room Name :"+ Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirdttoRoomName(this.id)'>#"+Room_names+" </div><hr>";
       document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();
  

function Back() {
      window.location = "index.html"
}

function AddRow() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });

      localStorage.setItem("room_name",room_name);

      window.location = "kwitter_room.html";
}

function redirdttoRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "chat.html"
}