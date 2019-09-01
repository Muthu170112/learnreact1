import React, { Component } from 'react';
import './signup.css';

class Signup extends Component {
  render() {
    return (
      <div>
         <h1><i>Signup</i></h1>

        <form>
           
          <div>
            <label>
              <input type="text" placeholder="Enter the user name" />
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

          <div>
            <label>
              <input type="text" placeholder="Enter the phone number"></input>
            </label>
          </div>

          <div>
            <label>
              <button type="submit" className="submit" disabled>Submit</button>
            </label>
          </div>

        </form>
      </div>

    );
  }
}
export default Signup;
