import React, { Component } from 'react';
import './login.css';

class Login extends Component {
  render() {
    return (
      <div>
         <h1><i>Login</i></h1>

        <form>
           
          <div>
            <label>
              <input type="text" placeholder="Enter the user name or emailid" />
            </label>
          </div>
          
          <div>
            <label>
              <input type="password" placeholder="Enter the user password"></input>
            </label>
          </div>
          
          <div>
            <label>
              <input type="email" placeholder="Enter the user mailid"></input>
            </label>
          </div>

        </form>
      </div>

    );
  }
}
export default Login;
