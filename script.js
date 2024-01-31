import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAX-2K2t-_FNrPZytUAV7vpaqWxB5v_3rw",
  authDomain: "login-796fa.firebaseapp.com",
  projectId: "login-796fa",
  storageBucket: "login-796fa.appspot.com",
  messagingSenderId: "1090389157181",
  appId: "1:1090389157181:web:c8fe720417a9f556d41154",
  measurementId: "G-2E5LXPHR89"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

const submitButton = document.getElementById("submit");
const signupButton = document.getElementById("sign-up");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const main = document.getElementById("main");
const createacct = document.getElementById("create-acct");

const signupEmailIn = document.getElementById("email-signup");
const confirmSignupEmailIn = document.getElementById("confirm-email-signup");
const signupPasswordIn = document.getElementById("password-signup");
const confirmSignUpPasswordIn = document.getElementById("confirm-password-signup");
const createacctbtn = document.getElementById("create-acct-btn");

const returnBtn = document.getElementById("return-btn");

var email, password, signupEmail, signupPassword, confirmSignupEmail, confirmSignUpPassword;

createacctbtn.addEventListener("click", function() {
  var isVerified = true;

  signupEmail = signupEmailIn.value;
  confirmSignupEmail = confirmSignupEmailIn.value;
  if(signupEmail !== confirmSignupEmail) {
    window.alert("Email fields do not match. Try again.");
    isVerified = false;
  }

  signupPassword = signupPasswordIn.value;
  confirmSignUpPassword = confirmSignUpPasswordIn.value;
  if(signupPassword !== confirmSignUpPassword) {
    window.alert("Password fields do not match. Try again.");
    isVerified = false;
  }
  
  if(!signupEmail || !confirmSignupEmail || !signupPassword || !confirmSignUpPassword) {
    window.alert("Please fill out all required fields.");
    isVerified = false;
  }
  
  if(isVerified) {
    createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
        window.alert("Success! Account created.");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(`Error code: ${errorCode}, Error message: ${errorMessage}`);
        window.alert(`Error occurred: ${errorMessage}`);
      });
  }
});

submitButton.addEventListener("click", function() {
  email = emailInput.value;
  console.log(email);
  password = passwordInput.value;
  console.log(password);

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("Success! Welcome back!");

      // Create a data URL with custom HTML content
      const customHTML = `
        <!DOCTYPE html>
        <html>
          <head>
            <title>Custom Page</title>
          </head>
          <body>
            <h1>Welcome, ${email}!</h1>
            <p>This is a custom page for the logged-in user.</p>
          </body>
        </html>
      `;

      const dataURL = `data:text/html;charset=utf-8,${encodeURIComponent(customHTML)}`;

      // Replace the current window's location with the data URL
      window.location.replace(dataURL);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(`Error code: ${errorCode}, Error message: ${errorMessage}`);
      window.alert(`Error occurred: ${errorMessage}`);
    });
});

signupButton.addEventListener("click", function() {
  main.style.display = "none";
  createacct.style.display = "block";
});

returnBtn.addEventListener("click", function() {
  main.style.display = "block";
  createacct.style.display = "none";
});
