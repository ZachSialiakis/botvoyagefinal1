import React from 'react';

import MuiAppbar from './AppBar'
import MuiAppbarNonAuth from './AppbarNonAuth'


import AuthUserContext from '../Session/AuthUserContext';


import './index.scss';

const Navigation = (Component) =>

  <AuthUserContext.Consumer>
    {authUser => authUser
      ? <MuiAppbar/>
      : <MuiAppbarNonAuth/>
    }
  </AuthUserContext.Consumer>





export default Navigation;
