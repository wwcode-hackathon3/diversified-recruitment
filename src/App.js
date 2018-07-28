import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

const AddJobDescription = () => (
  <div>
    <h1>Add job description</h1>
  </div>
);

const PickCandidates = () => (
  <div>
    <h1>Pick candidates</h1>
  </div>
);

const ReviewCandidates = () => (
  <div>
    <h1>Review candidates</h1>
  </div>
);

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
                      <Link to="/add-job-description" className="nav-link">
                        Add job description <span className="sr-only">(current)</span>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/pick-candidates" className="nav-link">
                        Pick candidates
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/review-candidates" className="nav-link">
                        Review candidates
                      </Link>
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
