@import url('https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}

body {
  background-image: url('https://i.ibb.co/9hxnWzC/converted-1.jpg');
  background-size: cover;
  background-repeat: no-repeat;
}

h1,
h2 {
  margin-bottom: 8%;
  text-align: center;
  font-family: 'Fredoka One', sans-serif;
  color: #0583D2;
  letter-spacing: 0.1em;
}

p {
  margin-top: 5%;
  margin-bottom: 5%;
  width: 100%;
  text-align: center;
  border-bottom: 1px solid #000;
  line-height: 0.1em;
}

p span {
  background: #fff;
  padding: 0 10px;
}

input {
  margin-bottom: 3%;
  border-radius: 5px; /* Rounded corners for input */
}

input:last-of-type {
  margin-bottom: 0;
}

input,
button {
  padding: 3%;
  width: 100%;
  border-radius: 5px; /* Rounded corners for buttons */
}

.login-container {
  background-color: white;
  padding: 7%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 40vw;
  margin-left: 30vw;
  height: 70vh;
  margin-top: 15vh;
  border-radius: 15px;
}

#submit,
#create-acct-btn {
  background-color: #0583D2;
  color: white;
  border: none;
  margin-top: 5%;
  border-radius: 5px; /* Rounded corners for these specific buttons */
}

button:hover {
  cursor: pointer;
  opacity: 0.8;
  transition: 0.3s;
}

#sign-up {
  border: none;
}

#create-acct {
  display: none;
}

#return-btn {
  background: none;
  color: grey;
  text-decoration: underline;
  border: none;
  margin-top: 3%;
}
