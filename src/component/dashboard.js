import React, { Component } from 'react';
import styles from '../css/dashboard.css';
import { NavLink } from 'react-router-dom';
class Dashboard extends Component {
  render(){
    return(
      <div class="dashboard">
          <h1>Hi <span></span></h1>
          <NavLink to="/post"><button class="postb">Post</button></NavLink>
      </div>
    );
  }
}
export default Dashboard;
