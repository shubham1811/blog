import React, { Component } from 'react';
import styles from '../css/nav.css';
class Nav extends Component {
  render(){
    return(
      <div class="nav">
          <p>&copy; 2018 Buddymantra</p>
          <ul>
  		        <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
  		        <li><a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
  		        <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
  	      </ul>
      </div>
    );
  }
}
export default Nav;
