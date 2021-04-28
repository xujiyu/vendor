import './App.css';
import Markets from './Markets'
import Home from './Home'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import firebase from 'firebase'
import React, { useEffect, useState } from 'react'

// Configure Firebase.
var firebaseConfig = {
  apiKey: "AIzaSyD2zPtmJ927QKcbPvdVa2ohGhaQ0y9vMQY",
  authDomain: "cs5356hw3.firebaseapp.com",
  projectId: "cs5356hw3",
  storageBucket: "cs5356hw3.appspot.com",
  messagingSenderId: "649131193269",
  appId: "1:649131193269:web:2e744c7f13a5a2fefd1ffc"
};

if (!firebase.apps.length) {
   firebase.initializeApp(firebaseConfig);
}else {
   firebase.app(); // if already initialized, use that one
}

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // We will display Google as auth providers.
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: () => false,
  },
};

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.

  // Listen to the Firebase Auth state and set the local state.
  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
      setIsSignedIn(!!user);
    });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

  if (!isSignedIn) {
    return (
      <div className="App">
        <section className="hero is-danger">
          <div className="hero-body">
            <div className="container">
              <h1 className="title is-1">Vendor</h1>
              <h2 className="subtitle">Shop anywhere</h2>
            </div>
          </div>
        
        </section>
        {/* <Markets /> */}
        <Home />
        
        <div>
        <h2 className="title">Check out our slides for details</h2>
        </div>
        <div>
          <p>Please sign-in:</p>
          <StyledFirebaseAuth uiCallback={ui => ui.disableAutoSignIn()} uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
        </div>
          
    </div>
    );
  }
  return (
    <div className="App">
      <section className="hero is-danger">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-1">Vendor</h1>
            <h2 className="subtitle">Shop anywhere</h2>
          </div>
        </div>
      
      </section>
      <Markets />
      <p>Welcome {firebase.auth().currentUser.displayName}! You are now signed-in with email: {firebase.auth().currentUser.email}</p>
      <a onClick={() => firebase.auth().signOut()}>Sign-out</a>
    </div>

  );

  // return (
    
  //   <div className="App">
  //     <section className="hero is-danger">
  //       <div className="hero-body">
  //         <div className="container">
  //           <h1 className="title is-1">Vendor</h1>
  //           <h2 className="subtitle">Shop anywhere</h2>
  //         </div>
  //       </div>
      
  //     </section>
  //     {/* <Markets /> */}
  //     <div className="slideShow">
  //       <Home />
  //     </div>
  //     <div>
  //     <h2 className="title">Check out our slides for details</h2>
  //     </div>
        
  //   </div>
  // );
}

export default App;
