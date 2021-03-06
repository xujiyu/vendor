import './App.css';
import Markets from './Markets'
import Home from './Home'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import firebase from 'firebase'
import React, { useEffect, useState } from 'react'
import GetProducts from './GetProducts'
import Banner from './Banner'
import ShopPage from './ShopPage'

// Configure Firebase.
var firebaseConfig = {
  apiKey: "AIzaSyD2zPtmJ927QKcbPvdVa2ohGhaQ0y9vMQY",
  authDomain: "cs5356hw3.firebaseapp.com",
  projectId: "cs5356hw3",
  storageBucket: "cs5356hw3.appspot.com",
  messagingSenderId: "649131193269",
  appId: "1:649131193269:web:2e744c7f13a5a2fefd1ffc"
};

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

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}else {
  firebase.app(); // if already initialized, use that one
}

function App() {
  const [isVendor, setIsVendor] = useState(false);
  // useEffect()

  const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.

  // Listen to the Firebase Auth state and set the local state.
  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
      setIsSignedIn(!!user);
    });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

  function inventoryPage(){
    if (isVendor) {
      return <ShopPage />;
    }
    else {
      return (
        <div>
          <Markets />
          <GetProducts />
        </div>
        
      );
    }
  }

  if (!isSignedIn) {
    return (
      <div className="App">
        <section className={isVendor ? "hero is-link" : "hero is-danger"} onClick={() => {setIsVendor(!isVendor);console.log(!!isVendor);}}>
          <div className="hero-body">
            <div className="container">
              <h1 className="title is-1">Vendor</h1>
              <h2 className="subtitle">{isVendor ? 'Inventory Page' : 'Shop anywhere'}</h2>
            </div>
          </div>
        
        </section>

        <Home />
        
        <div>
          <h2 className="title">Check out our presentation for details</h2>
        </div>
        <div>
          <p>Please sign-in:</p>
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
        </div>
          
    </div>
    );
  }
  // if user is signed in
  return (
    <div className="App">
      
      <section className={isVendor ? "hero is-link" : "hero is-danger"} onClick={() => {setIsVendor(!isVendor);console.log(!!isVendor);}}>
          <div className="hero-body">
            <div className="container">
              <h1 className="title is-1">Vendor</h1>
              <h2 className="subtitle">{isVendor ? <span>Inventory Page</span> : <span>Shop anywhere</span>}</h2>
            </div>
          </div>
        
        </section>
      {inventoryPage()}
      {/* <Markets />
      <GetProducts /> */}

      <p>Welcome {firebase.auth().currentUser.displayName}! You are now signed-in with email: {firebase.auth().currentUser.email}</p>
      <a onClick={() => firebase.auth().signOut()}>Sign-out</a>
    </div>

  );
}

export default App;
