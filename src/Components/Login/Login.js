import React, { useContext, useState } from 'react';
import Google from '../../images/icon/google.png';
import Facebook from '../../images/icon/fb.png';
import './login.css';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '', 
        password: '',
        confirmPassword: '',
        error: '',
        success: false,
        newUser: false,
    })

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleFbSignIn = () => {

    }

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(result => {
            var token = result.credential.accessToken;
            var user = result.user;
        })
        .catch(error => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage, errorCode); 
        });
    }

    const handleChange = (e) => {
        let isFieldValid = true;

        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === 'password'){
            const isPasswordValid = e.target.value.length > 4;
            const passHasNumber = /\d{1}/.test(e.target.value);
            isFieldValid = isPasswordValid && passHasNumber ;
        }
        if(isFieldValid){
            const newUserInfo = {...user};
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
        
    }

    const handleSubmit = (e) => {
        if(newUser && user.email && user.password){
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then(res => {
                const newUserInfo = {...user};
                newUserInfo.error = '';
                newUserInfo.success = true;
                setUser(newUserInfo);
                updateUserInfo(user.name);
                setLoggedInUser(newUserInfo);
                history.replace(from);
            })
            .catch(error => {
                const newUserInfo = {...user};
                newUserInfo.error = error.message;
                newUserInfo.success = false;
                setUser(newUserInfo);
            });
        }
        if(!newUser && user.email && user.password){
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then(res => {
                const newUserInfo = {...user};
                newUserInfo.error = '';
                newUserInfo.success = true;
                setUser(newUserInfo);
                setLoggedInUser(newUserInfo);
                history.replace(from);
            })
            .catch( error=> {
                const newUserInfo = {...user};
                newUserInfo.error = error.message;
                newUserInfo.success = false;
                setUser(newUserInfo);
            });
        }
        e.preventDefault();
    }

    const updateUserInfo = name => {
        var user = firebase.auth().currentUser;

        user.updateProfile({
            displayName: name,
        })
        .then( () => {
            console.log('username updated successfully')
        })
        .catch(function(error) {
            // An error happened.
        });
    }

    return (
        <div style={{alignItems: 'center', marginTop: '100px'}}>

            <form className="loginForm" onSubmit={handleSubmit}>
                { newUser && <input className="formInput" type="text" name="name" onBlur={handleChange} id="" placeholder="your name" required/>}
                <br/>
                <input className="formInput" type="text" name="email" onBlur={handleChange} id="" placeholder="your email address" required/>
                <br/>
                <input className="formInput" type="password" name="password" onBlur={handleChange} id="" placeholder="your password" required/>
                <br/>
                { newUser && <input className="formInput" type="password" name="confirmPassword" onBlur={handleChange} id="" placeholder="confirm your password" required/>}
                <br/>
                <input class="btn btn-warning" type="submit" value={newUser ? "Sign Up" : "Sign In"}/>

                <p style={{color: "red"}}><small>{user.error}</small></p>
                {user.success && <p style={{color: "green"}}><small>User { newUser ? 'Created' : 'Logged In'} Successfully</small></p> }
                
                <label htmlFor="newUser"><small>{ 'Do not have an account? Sign Up' }</small></label>
                <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id=""/>
            </form>

            <p>---------or----------</p>
            <button className="googleBtn" onClick={handleGoogleSignIn}><img className='iconImg' src={Google} alt=""/><span>Sign In with Google</span></button>
            <br/>
            <button className="fbBtn" onClick={handleFbSignIn}><img className='iconImg' src={Facebook} alt=""/><span>Sign In with Facebook</span></button>
        </div>
    );
};

export default Login; 