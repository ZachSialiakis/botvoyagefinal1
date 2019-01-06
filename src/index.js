import React from "react";
import { render } from 'react-dom'
import "../src/index.scss";
import ReactDOM from "react-dom";
import Main from "./component/main/Main";
import { BrowserRouter } from 'react-router-dom';
import UserDashboard from "./component/App/UserDashboard";







render((
  <BrowserRouter>
    <UserDashboard />
  </BrowserRouter>
), document.getElementById('root'));
  


