import React, {Component} from 'react';
import { Switch, Route, Router} from 'react-router-dom';



import Show from '../Posts/Show';
import Create from '../Posts/Create';
import Edit from '../Posts/Edit';
import PostPage from '../Posts/PostPage';
import * as routes from '../../constants/routes';
import Todos from '../Todos/Todos';
// import { Center } from 'react-containers';


const Merging = () => (
  <div className="container">
    
    <Todos />
  </div>
)

export default Merging;