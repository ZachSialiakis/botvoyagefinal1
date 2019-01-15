//High order component and main component of the project which calls routes

import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';


//import all the react components we cant to reffer to routes

import VenueDetailPage from "../../detail/page/VenueDetailPage";
import SearchPage from "../../search/page/SearchPage";
import Navigation from '../Navigation';
import AboutUs from '../AboutUs';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgotPage from '../PasswordForgot';

import AccountPage from '../Account';
import NoMatch from '../../constants/NoMatch'
import { withAuthentication } from '../Session';
import LoginWithFacebookPage from '../LoginWithFacebookForm';
import * as routes from '../../constants/routes';


import './UserDashboard.scss';
import withAuthorization from '../Session/withAuthorization';



import { Container } from 'semantic-ui-react';
import DemoCarousel from '../Carousel/DemoCarousel';
import Bot from '../Bot/Bot';
import HomePage from '../Home/HomePage';



//Component Method wrapped with Navigation Component using routes 
const UserDashboard = () =>

  <Router>

    <div >
    

      < Navigation />




      <div>
        <Switch>


          <Route exact={true} path={routes.SEARCHPAGE} component={SearchPage} />
          <Route exact path="/query=:query?&location=:location?" component={SearchPage} />
          <Route exact path="/detail&id=:id" component={VenueDetailPage} />





          <Route exact path={routes.ABOUTUS} component={AboutUs} />
          <Route exact path={routes.SIGN_UP} component={SignUpPage} />
          <Route exact path={routes.SIGN_IN} component={SignInPage} />
          <Route exact path={routes.PASSWORD_FORGET} component={PasswordForgotPage} />
          <Route exact path={routes.FACEBOOKLOGIN} component={LoginWithFacebookPage} />

          <Route exact path={routes.HOME} component={HomePage} />
          <Route exact path={routes.ACCOUNT} component={AccountPage} />

          <Route exact path={routes.RECOMEND} component={DemoCarousel} />
          <Route exact path={routes.BOT} component={Bot} />




          <Route component={() => <NoMatch />} />

        </Switch>


      </div>

    </div>
  </Router >


export default withAuthentication(UserDashboard);