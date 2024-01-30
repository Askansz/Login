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
const createacct = document.getElementById("create-acct")

const signupEmailIn = document.getElementById("email-signup");
const confirmSignupEmailIn = document.getElementById("confirm-email-signup");
const signupPasswordIn = document.getElementById("password-signup");
const confirmSignUpPasswordIn = document.getElementById("confirm-password-signup");
const createacctbtn = document.getElementById("create-acct-btn");

const returnBtn = document.getElementById("return-btn");

var email, password, signupEmail, signupPassword, confirmSignupEmail, confirmSignUpPassword;

// ...

createacctbtn.addEventListener("click", function () {
  var isVerified = true;

  signupEmail = signupEmailIn.value;
  confirmSignupEmail = confirmSignupEmailIn.value;
  if (signupEmail != confirmSignupEmail) {
    window.alert("Email fields do not match. Try again.");
    isVerified = false;
  }

  signupPassword = signupPasswordIn.value;
  confirmSignUpPassword = confirmSignUpPasswordIn.value;

  // Check if the password meets the minimum character requirement
  const minPasswordLength = 8; // Adjust as needed
  if (signupPassword.length < minPasswordLength) {
    window.alert(`Password must be at least ${minPasswordLength} characters long.`);
    isVerified = false;
  }

  if (signupPassword != confirmSignUpPassword) {
    window.alert("Password fields do not match. Try again.");
    isVerified = false;
  }

  if (signupEmail == null || confirmSignupEmail == null || signupPassword == null || confirmSignUpPassword == null) {
    window.alert("Please fill out all required fields.");
    isVerified = false;
  }

  if (isVerified) {
    createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
      .then((userCredential) => {
        const user = userCredential.user;
        window.alert("Success! Account created.");

        // Clear the input fields after successful account creation
        signupEmailIn.value = "";
        confirmSignupEmailIn.value = "";
        signupPasswordIn.value = "";
        confirmSignUpPasswordIn.value = "";
      })
      .catch((error) => {
        window.alert("Error occurred. Try again.");
      });
  }
});

// ...


submitButton.addEventListener("click", function() {
  email = emailInput.value;
  password = passwordInput.value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("Success! Welcome back!");
      window.alert("Success! Welcome back!");
    
      // Clear the input fields after successful login
      emailInput.value = "";
      passwordInput.value = "";        

      // Open a new window with a different domain
      const newWindow = window.open("https://www.example.com", "_blank");

      // You can't close the current window directly unless it was opened by a script.
      // The following line might not work depending on browser security settings.
      // window.close(); 

      // Optionally, redirect the current window to another page
      // window.location.href = "https://www.example.com";

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("Error occurred. Try again.");
      window.alert("Error occurred. Try again.");
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

// <h2>Hello World</h2>
