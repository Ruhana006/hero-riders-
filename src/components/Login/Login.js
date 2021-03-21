import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebaseConfig";
import Header from '../Header/Header';
import './Login.css';
import { useState } from 'react';

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
    })
    var fbProvider = new firebase.auth.FacebookAuthProvider();
    const handleFacebookSignIn = () => {
        firebase
            .auth()
            .signInWithPopup(fbProvider)
            .then((result) => {
                var credential = result.credential;
                var user = result.user;
                var accessToken = credential.accessToken;
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
    const handleSubmit = (e) => {
        if (newAccount && user.email && user.password) {
            //   console.log("submit");
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
                });
        }
        e.preventDefault();
    }
    if (!newAccount && user.email && user.password) {
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
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
            });
    }

    return (
        <div>
            <Header />
            <div style={{ textAlign: 'center' }}>
                {/* <h5>Email : {user.email}</h5>
                <h5>Nmae :{user.name}</h5> */}
                <form onSubmit={handleSubmit}>
                    {newAccount ? <h3>Create new account</h3> : <h3>Log in</h3>}
                    {newAccount && <input className="form-input" name="name" type="text" onBlur={handleBlur} placeholder="Enter your name" />}
                    <br />
                    <input className="form-input" name="email" onBlur={handleBlur} type="email" required placeholder="Enter your email" />
                    <br />
                    <input className="form-input" name="password" onBlur={handleBlur} type="password" required placeholder="Enter your password" />
                    <br />
                    {newAccount? <input className="signIn-btn" type="submit" value="Sign up" /> :<input className="signIn-btn" type="submit" value="Sign in" /> }
                </form>
                <input type="checkbox" onChange={() => setNewAccount(!newAccount)} name="newAccount" />
                <label htmlFor="newAccount">Don't have account</label>
                <p style={{ color: 'red' }}>{user.error}</p>







                <button className="fb-signin" onClick={handleFacebookSignIn}>Sign in with FaceBook</button>
            </div>
        </div>
    );
};

export default Login;