import React, { Component } from 'react';


import {
  Link,
  withRouter,
} from 'react-router-dom';

import './index.scss';
import firebase from 'firebase';





import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import axios from './axios-users';
import * as routes from '../../constants/routes';





const LoginWithFacebookPage = ({ history }) =>
  <div style={{marginTop: '100px', textAlign: 'center', }}>
    
    <br /><br />
    <LoginWithFacebookForm history={history} />
  </div>




class LoginWithFacebookForm extends Component {
  state={ isSignedIn: false}
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      //firebase.auth.AnonymousAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false

    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
      const users = {
        ingredients: this.state.ingrediedients,
       
  }
      axios.post('/users.json', users)
      .then(response => console.log(response))
      .catch(error => console.log(error));
      
    })

    
    
  }

  render() {
    return (
      <div className="LoginWithFacebookForm">
       {this.state.isSignedIn ? (
         <span>
           {this.state.componentDidMount}
        <div>Signed In!</div> 
        
        
        <button onClick={()=>firebase.auth().signOut()}>Sign out!</button>
        <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
        <img 
        alt="profile picture" 
        src={firebase.auth().currentUser.photoURL}
        />
        </span>
      )  : (
        <StyledFirebaseAuth
          uiConfig={this.uiConfig}
          firebaseAuth={firebase.auth()}
        
        />
    )}
          
      </div>
    )
  }
}
const LoginWithFacebookLink = () =>
  <p>
    Don't have an account?
    {' '}
    <Link to={routes.FACEBOOKLOGIN}>FACEBOOK LOGIN</Link>
  </p>


export default withRouter(LoginWithFacebookPage);
export {
  
  LoginWithFacebookForm,
  LoginWithFacebookLink,
  
};
