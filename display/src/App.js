import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Home from './Home';
import LoginScreen from './LoginScreen';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Switch>
        <Route nomatch component={Home}/>
        <Route path="/login" component={LoginScreen}/>
      </Switch>
      </div>
    );
  }
}

export default App;
