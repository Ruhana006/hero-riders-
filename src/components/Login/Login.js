import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebaseConfig";
import Header from '../Header/Header';
import './Login.css';
import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import { fab, faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

firebase.initializeApp(firebaseConfig);
if (!firebase.app.length) {
    firebase.initializeApp({});
} else {
    firebase.app();
}

const Login = () => {
    const [newAccount, setNewAccount] = useState(false);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: "",
        email: '',
        password: "",
        error: ''
    });
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };


    const handleFacebookSignIn = () => {
        var fbProvider = new firebase.auth.FacebookAuthProvider();
        firebase.auth()
            .signInWithPopup(fbProvider)
            .then((result) => {
                const { displayName, email } = result.user;
                const signedInUser = { name: displayName, email }
                setLoggedInUser(signedInUser);
                history.replace(from);
                console.log(user);
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
                console.log(errorMessage, email);
            });
    }
    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            const { displayName, email } = result.user;
            const signedInUser = { name: displayName, email }
            setLoggedInUser(signedInUser);
            history.replace(from);
        }).catch(function (error) {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
    }
    const handleBlur = (e) => {
        let isFieldValid = true;
        console.log(e.target.name, e.target.value);
        if (e.target.name === 'email') {
            const isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
            console.log(isFieldValid);
        }
        if (e.target.name === "password") {
            const isFieldValid = e.target.value.length > 6;
            console.log(isFieldValid);
        }
        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo)
        }
    }
    const handleSubmit = (event) => {
        if (newAccount && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    setUser(newUserInfo)
                    console.log(res);
                })
                .catch((error) => {
                    var newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    setUser(newUserInfo)
                })
        }

        if (!newAccount && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    setUser(newUserInfo);
                    setLoggedInUser(newUserInfo);
                    history.replace(from);
                })
                .catch((error) => {
                    var newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    setUser(newUserInfo)
                })
        }
        event.preventDefault();
    }

    return (
        <div>
            <Header />
            <div className="background" style={{ textAlign: 'center' }}>
                <form onSubmit={handleSubmit}>
                    {newAccount ? <h3>Create new account</h3> : <h3>Log in</h3>}
                    {newAccount && <input className="form-input" name="name" type="text" onBlur={handleBlur} placeholder="Enter your name" />}
                    <br />
                    <input className="form-input" name="email" onBlur={handleBlur} type="email" required placeholder="Enter your email" />
                    <br />
                    <input className="form-input" name="password" onBlur={handleBlur} type="password" required placeholder="Enter your password" />
                    <br />
                    {newAccount ? <button className="signIn-btn">Sign Up </button> : <button className="signIn-btn">Sign In</button>}
                </form>
                <input type="checkbox" onChange={() => setNewAccount(!newAccount)} name="newAccount" />
                <label htmlFor="newAccount">Don't have account</label>
                <p style={{ color: 'red' }}>{user.error}</p>
                <button className="fb-signin" onClick={handleFacebookSignIn}><FontAwesomeIcon icon={faFacebook} />  Sign in with FaceBook</button>
                <br />
                <button className="google-signin" onClick={handleGoogleSignIn}> <FontAwesomeIcon icon={faGoogle} />  Sign in with Google</button>
            </div>
        </div>
    );
};

export default Login;