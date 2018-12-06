import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import AppAuth from './AppAuth';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


ReactDOM.render(
  <Router>
    <AppAuth />
  </Router>,
  document.getElementById('root'))