import React, { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import "./Login.css";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebase.config";
import { FcGoogle } from "react-icons/fc";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router";

const Login = () => {
  const history = useHistory();
  let location = useLocation();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  let { from } = location.state || { from: { pathname: "/" } };

  const handleGoogleSignIn = () => {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    } else {
      firebase.app(); // if already initialized, use that one
    }
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        //var credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        // var token = credential.accessToken;
        // console.log(token);
        // The signed-in user info.
        var googleUser = result.user;
        setLoggedInUser(googleUser);
        history.replace(from);
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        alert(errorCode, errorMessage, email);
        // The firebase.auth.AuthCredential type that was used.
        //var credential = error.credential;

        // ...
      });
  };

  const handleSubmit = () => {
    alert("It will available soon");
  };
  return (
    <div>
      <Container>
        {" "}
        <div className="py-4 my-4  d-flex justify-content-center align-items-center">
          <Form className="login-form">
            <h3 style={{ color: "#71BA58" }}>Login</h3>
            <br />
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button
              variant="primary"
              className="btnn signIn-btn"
              onClick={handleSubmit}
            >
              Sign In
            </Button>
          </Form>
        </div>
        <div className="text-center">
          or <br />
          <br />
          <Button
            variant="outline-success"
            className="gmail-btn"
            onClick={handleGoogleSignIn}
          >
            <FcGoogle style={{ fontSize: "25px", marginRight: "15px" }} />{" "}
            Continue with Gmail
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Login;
