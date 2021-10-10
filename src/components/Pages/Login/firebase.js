import React from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import firebaseConfig from '../../../firebase.config';
 

  
export const firebaseInitializeLogIn = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    } else {
        firebase.app(); // if already initialized, use that one
    }

}


// Firebase Google signIn method call.

export const handleGooglesignIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(googleProvider)
        .then((res) => {
            console.log(res.user)
            const { displayName, email,photoURL  } = res.user;
            const SignedIn = {
                isSignedIn: true,
                name: displayName,
                email: email,
                photo:photoURL,
                success: true
            }
            return SignedIn;
        })
        

}

 export const storeAuthToken = () => {
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        sessionStorage.setItem('token', idToken);
      }).catch(function (error) {
        // Handle error
      });
    }

 
 

// Firebase Google signOut method call.

export const handleGooglesignOut = () => {
    return firebase.auth().signOut()
        .then((res) => {
            const signOutUser = {
                isSignedIn: false,
                name: '',
                email: ''
            }
            return signOutUser;
        })

}

// Firebase create new user method call.

export const createSignInAndPasswordHandler = (name,email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((res) => {
            const { displayName, email } = res.user;
            const SignedIn = {
                isSignedIn: true,
                name: displayName,
                email: email,
                success: true
            }
            const userInfo = res.user;
            userInfo.success = true;
            userInfo.error = '';
            userNameUpdate(name)
            return SignedIn;
            
        })
        .catch((error) => {
            const userInfo = {};
            userInfo.error = error.message;
            return userInfo;
        });
}

// Firebase  existing user method call.

export const signInAndPasswordHandler = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
        .then((res) => {
            const { displayName, email } = res.user;
            const SignedIn = {
                isSignedIn: true,
                name: displayName,
                email: email,
                success: true
            }
            const userInfo = res.user;
            userInfo.success = true;
            userInfo.error = '';
            return SignedIn;
        })
        .catch((error) => {
            const userInfo = {};
            userInfo.error = error.message;
            userInfo.success = false;
            return userInfo;

        });
}

// This is update currentUser name.

  const userNameUpdate = (name) => {
    const user = firebase.auth().currentUser;
    user.updateProfile({
        displayName: name,
        
    }).then(function () {
         
    }).catch(function (error) {
       
    });
}
