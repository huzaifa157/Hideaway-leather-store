const firebaseConfig = {
  apiKey: "AIzaSyAJWpmzwkmmOTZPYWSLOKnbDk-zxC05BW8",
  authDomain: "bqfp-86e51.firebaseapp.com",
  databaseURL: "https://bqfp-86e51-default-rtdb.firebaseio.com",
  projectId: "bqfp-86e51",
  storageBucket: "bqfp-86e51.appspot.com",
  messagingSenderId: "635206542764",
  appId: "1:635206542764:web:2d4b2328e2e1d5ec8e0609"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// // reference of database
// var loginFormDB = firebase.database().ref("loginForm");

// document.getElementById("loginForm").addEventListener("submit", submitForm);

// function submitForm(e){
//   e.preventDefault();

//   var name = getElementVal("name");
//   var email = getElementVal("email");
//   var password = getElementVal("password");

//   saveInfo(name, email, password);
//   alert("Sign Up successful")
//   document.getElementById("loginForm").reset();
// }

// const saveInfo = (name, email, password) => {
//   var newloginform = loginFormDB.push();

//   newloginform.set({
//     name : name,
//     email : email,
//     password : password,
//   })
// };


// reference of contact database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e){
  e.preventDefault();

  var name = getElementVal("name");
  var email = getElementVal("email");
  var subject = getElementVal("subject");
  var message = getElementVal("message");

  newMessage(name, email, subject, message);
  alert("Message Submitted")
  document.getElementById("contactForm").reset();
}

const newMessage = (name, email, subject, message) => {
  var newMessage = contactFormDB.push();

  newMessage.set({
    name : name,
    email : email,
    subject : subject,
    message : message,
  })
};


//###############################################################
const getElementVal = (id) => {
  return document.getElementById(id).value;
};