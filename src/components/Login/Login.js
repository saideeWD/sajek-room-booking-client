import React, { useContext } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import firebaseConfig from "./firebase-config";
import { UserContaxt } from "../../App";
import GoogleIcon from "@mui/icons-material/Google";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [loggedInUser, setLoggedInUser] = useContext(UserContaxt);
  const from = location.state?.from?.pathname || "/";

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const handleGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        const { displayName, email } = result.user;
        const signInUser = { name: displayName, email };
        setLoggedInUser(signInUser);
        storeAuthToken()
        navigate(from, { replace: true });
      })
      .catch((error) => {
        var errorMessage = error.message;
        console.log(errorMessage);
        // ...
      });
  };
  const storeAuthToken = () => {
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
    .then(function(idToken) {
     sessionStorage.setItem('token', idToken);
      // Send token to your backend via HTTPS
      // ...
    }).catch(function(error) {
      // Handle error
    });
  };
  
  return (
    <div>
      
      this is login
      <button
        onClick={handleGoogleSignIn}
        style={{
          width: "100px",
          color: "white",
          backgroundColor: "blue",
          marginTop: "50px",
        }}
      >
        <GoogleIcon></GoogleIcon>
      </button>
    </div>
  );
};

export default Login;
