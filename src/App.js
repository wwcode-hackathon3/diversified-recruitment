import React, { Component } from 'react';
import {BrowserRouter as Router, Route, NavLink, Redirect} from "react-router-dom";
import './App.css';
import Home from './views/Home'
import AddJobDescription from './views/AddJobDescription'
import PickCandidates from './views/PickCandidates'
import ReviewCandidates from './views/ReviewCandidates'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
            <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Recruitment Portal</a>
            <ul className="navbar-nav px-3">
              <li className="nav-item text-nowrap">
                <a className="nav-link" href="#">Sign out</a>
              </li>
            </ul>
          </nav>
          <div className="container-fluid">
             <main role="main" className="ml-sm-auto px-4">
              <Route exact path="/" render={() => (
                // loggedIn ? (
                  <Redirect to="/home"/>
                // ) : (
                //   <Redirect to="/login"/>
                // )
              )}/>
              <Route path="/home" component={Home} />
              <Route path="/add-job-description" component={AddJobDescription} />
              <Route path="/pick-candidates" component={PickCandidates} />
              <Route path="/review-candidates" component={ReviewCandidates} />
            </main>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
