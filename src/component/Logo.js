import React, { Component } from 'react';
import styles from '../css/logo.css';
class Logo extends Component {
  render(){
    return(
      <div class="logo">
        <img src={require('../image/logo.png')}/>
      </div>
    );
  }
}
export default Logo;
