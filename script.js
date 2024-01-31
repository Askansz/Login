import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

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
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

submitButton.addEventListener("click", function(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  const email = emailInput.value;
  const password = passwordInput.value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("Success! Welcome back!");

      // Open a new tab with a custom welcome message
      window.open(`welcome.html?email=${email}`, '_blank');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(`Error code: ${errorCode}, Error message: ${errorMessage}`);
      window.alert(`Error occurred: ${errorMessage}`);
    });
});
