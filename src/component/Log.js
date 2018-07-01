import React, { Component } from 'react';
import styles from '../css/log.css';
import { NavLink } from 'react-router-dom';
class Log extends Component {

  render(){
    return(
      <div class="login">
        <div class="loginbox">
            <form>
              <img src={require('../image/right.png')} class="user"/><br/><br/>
              <i class="fa fa-user fa-2x cust"></i>
              <input class="userf" type="text" placeholder="Username"  name="usrnm"/>
              <br/>
              <br/>
              <i class="fa fa-lock fa-2x cust"></i>
              <input type="password" placeholder="Password" name="passw"/>
              <br/>
              <br/>
              <NavLink to="/dashboard"><button>Login</button></NavLink>
              </form>
              <br/>
              <br/>
              <a class="forp" href="#">Forgot your password?</a>
              <br/>
              <br/>
              <a class="sigh" href="#">Sign in help.</a>
        </div>
      </div>

    );
  }
}
export default Log;
