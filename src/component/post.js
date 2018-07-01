import React, { Component } from 'react';
import styles from '../css/post.css';
import { NavLink } from 'react-router-dom';
class Post extends Component {
  render(){
    return(
      <div class="post">
              <p>BLOG</p>
              <textarea placeholder="keep typing............................"></textarea><br/><br/>
              <div class="icons">
                <i class="fas fa-paint-brush"></i>
              	<i class="fas fa-align-right"></i>
                <i class="fas fa-align-left"></i>
                <i class="fas fa-text-height"></i>
                <i class="fas fa-text-width"></i>
                <i class="fas fa-font"></i>
                <i class="fas fa-bold"></i>
                <i class="fas fa-underline"></i>
              </div>
                  <NavLink to="/thank"><button class ="postbtn">Post</button></NavLink>
      </div>
    );
  }
}
export default Post;
