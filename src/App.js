import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, NavLink} from "react-router-dom";
import './App.css';
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
            <div className="row">
              <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                <div className="sidebar-sticky">
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <NavLink to="/add-job-description" className="nav-link" activeClassName="active">
                        Add job description <span className="sr-only">(current)</span>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/pick-candidates" className="nav-link" activeClassName="active">
                        Pick candidates
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/review-candidates" className="nav-link" activeClassName="active">
                        Review candidates
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </nav>

              <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                <div
                  className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                  {/*<Route exact path="/" component={Home} />*/}
                  <Route path="/add-job-description" component={AddJobDescription} />
                  <Route path="/pick-candidates" component={PickCandidates} />
                  <Route path="/review-candidates" component={ReviewCandidates} />
                </div>
              </main>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
