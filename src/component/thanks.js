import React, {Component} from 'react';
import styles from '../css/thanks.css';
import { NavLink } from 'react-router-dom';
class Thanks extends Component {
  render(){
    return(
      <div class="thanks">
          <p>Thanks for posting blog</p>
            <NavLink to="/post"><button>Write Again</button></NavLink>
      </div>
    );
  }
}

export default Thanks
