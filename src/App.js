import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Logo from './component/Logo.js'
import Nav from './component/Nav.js';
import Log from './component/Log.js';
import Dashboard from './component/dashboard.js';
import Post from './component/post.js';
import Error from './component/Error.js'
import Thanks from './component/thanks.js'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Logo/>
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/" component={Log} exact />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/post" component={Post} />
              <Route path="/thank" component={Thanks} />
              <Route component={Error} />
            </Switch>
          </div>
        </BrowserRouter>
        <Nav/>
      </div>
    );
  }
}

export default App;
