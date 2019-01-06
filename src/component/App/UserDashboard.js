//High order component and main component of the project which calls routes

import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';


//import all the react components we cant to reffer to routes
import Show from '../Posts/Show';
import Create from '../Posts/Create';
import Edit from '../Posts/Edit';
import PostPage from '../Posts/PostPage';
import VenueDetailPage from "../../detail/page/VenueDetailPage";
import SearchPage from "../../search/page/SearchPage";
import Navigation from '../Navigation';
import AboutUs from '../AboutUs';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgotPage from '../PasswordForgot';
import HomePage from '../Home';
import AccountPage from '../Account';
import NoMatch from '../../constants/NoMatch'
import { withAuthentication }  from '../Session';
import LoginWithFacebookPage from '../LoginWithFacebookForm';
import * as routes from '../../constants/routes';


import './UserDashboard.scss';
import withAuthorization from '../Session/withAuthorization';

import Merging from '../MergePosts/Merging';

import { Container } from 'semantic-ui-react';
import DemoCarousel from '../Carousel/DemoCarousel';



//Component Method wrapped with Navigation Component using routes 
const UserDashboard = () =>

  <Router>
    
    <div >
      
    < Navigation />
         

      
        <hr />
          
        
          <Route exact={true} path={routes.SEARCHPAGE} component={SearchPage}/>
          <Route exact path="/query=:query?&location=:location?" component={SearchPage}/>
          <Route exact path="/detail&id=:id" component={VenueDetailPage}/>


          {/* <Route  path={routes.USERDASHBOARD} component={UserDashboard} /> */}
          
          
          <Route  exact path={routes.ABOUTUS} component={AboutUs} />
          <Route  path={routes.SIGN_UP} component={SignUpPage} />
          <Route  path={routes.SIGN_IN} component={SignInPage} />
          <Route  path={routes.PASSWORD_FORGET} component={PasswordForgotPage} />
          <Route  path={routes.FACEBOOKLOGIN} component={LoginWithFacebookPage} />
          
          <Route path={routes.HOME} component={HomePage} /> 
          <Route path={routes.ACCOUNT} component={AccountPage} />
          <Route path={routes.POSTS} component={Merging} />
          <Route path={routes.RECOMEND} component={DemoCarousel} />
          {/* <Route path={routes.BOT} component={} /> */}
          

          
          

        
          
         
      
          
        
        <Route component={() => <NoMatch />} />
        
     
        


    </div>
  </Router >
  
//Functional component withAuthentication which authenticates users in firebase
export default withAuthentication(UserDashboard);
