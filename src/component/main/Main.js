// import React, {Component} from "react";
// import {BrowserRouter as Router,NavLink, Route,withRouter} from "react-router-dom";

// import SearchPage from "../../search/page/SearchPage";
// import VenueDetailPage from "../../detail/page/VenueDetailPage";
// import * as routes from '../../constants/routes';
// import UserDashboard from '../App/UserDashboard';
// import Navigation from '../Navigation';
// import AboutUs from '../AboutUs';
// import SignUpPage from '../SignUp';
// import SignInPage from '../SignIn';
// import PasswordForgotPage from '../PasswordForgot';
// import HomePage from '../Home';
// import AccountPage from '../Account';
// import NoMatch from '../../constants/NoMatch'
// import withAuthentication from '../Session/withAuthentication';
// import LoginWithFacebookPage from '../LoginWithFacebookForm';



// import "./main.scss";


// class Main extends Component {
//   render() {
//     return (
//       <Router>
        
       
        
//         <div>
        
//         <Navigation />
//           <Route exact={true} path={routes.SEARCHPAGE} component={SearchPage}/>
//           <Route exact path="/query=:query?&location=:location?" component={SearchPage}/>
//           <Route exact path="/detail&id=:id" component={VenueDetailPage}/>
          
//           <Route exact path={routes.USERDASHBOARD} component={UserDashboard}/>
//           <Route exact path={routes.ABOUTUS} component={() => <AboutUs />} />
//           <Route exact path={routes.SIGN_UP} component={() => <SignUpPage />} />
//           <Route exact path={routes.SIGN_IN} component={() => <SignInPage />} />
//           <Route exact path={routes.PASSWORD_FORGET} component={() => <PasswordForgotPage />} />
//           <Route exact path={routes.FACEBOOKLOGIN} component={() => <LoginWithFacebookPage />} />
//           <Route exact path={routes.HOME} component={() => <HomePage />} />
//           <Route exact path={routes.ACCOUNT} component={() => <AccountPage />} />
        
//         <Route component={() => <NoMatch />} />
         
          
//           {/* <NavLink to={routes.USERDASHBOARD} style={{color: 'white', textDecoration: 'none', position: "absolute", left: "1200px",
//   width: "1000px",
//   height: "120px",
//   top:"20px",
//   fontWeight: "bold",
//     color: "red"
//   }} activeStyle={{
//     fontWeight: "static",
//     position:"static",
//     color: "red"
//   }}>DASHBOARD</NavLink> */}
//         </div>
        
//       </Router>
//     );
//   }
// }

// export default Main;