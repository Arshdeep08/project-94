
var firebaseConfig = {
      apiKey: "AIzaSyDy5bpQ7v0I-Ry8pZkovhG9QwA8mU8DOYo",
      authDomain: "kwitter-8b0c5.firebaseapp.com",
      databaseURL: "https://kwitter-8b0c5-default-rtdb.firebaseio.com",
      projectId: "kwitter-8b0c5",
      storageBucket: "kwitter-8b0c5.appspot.com",
      messagingSenderId: "508558184130",
      appId: "1:508558184130:web:a8fc63b154e6392097755b"
    };
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
