import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import Brewly from './components/Brewly';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';




ReactDOM.render(
<Router>
  <Brewly />
</Router>,
document.getElementById('root'))