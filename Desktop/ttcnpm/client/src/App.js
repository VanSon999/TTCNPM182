import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Storyboard from './Pages/Storyboardpage';
import Dashboard from './Pages/Dashboard/Dashboard';


class App extends Component {
  render() {
    return (
        <Router>
          <Switch>
            <Route exact path="/home" component={Homepage}/>
            <Route exact path="/storyboard" component={Storyboard} />
            <Route exact path="/dashboard" component={Dashboard}/>
            <Redirect to="/home" />
          </Switch>
        </Router>
    );
  }
}

export default App;