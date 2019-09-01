import React from 'react';
import ReactDOM from 'react-dom';
import Contactus from './contactus';
import Signup from './signup';
import Login from './login';
import './index.css';

ReactDOM.render(
  <Contactus /> ,
  <Signup />,
  <Login />,
  document.getElementById('root')
);
