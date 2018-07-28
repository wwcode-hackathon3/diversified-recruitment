import React from "react";
import {Link} from "react-router-dom";

const username = 'Boss';

export default class Home extends React.Component {
  render() {
    return <div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Welcome, {username}</h1>
      </div>

      <p>
        View your active job listings:
        <Link to="/add-job-description" className="btn btn-primary btn-sm float-right">
          Add job description
        </Link>
      </p>
      <div className="list-group">
        <a href="/pick-candidates" className="list-group-item list-group-item-action flex-column align-items-start">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">Senior Java Developer</h5>
            <div>
              <span className="badge badge-primary badge-pill">14</span>
            </div>
          </div>
          <small className="text-muted">Last candidate applied 5 hours ago</small>
        </a>
        <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">Junior ReactJS Developer</h5>
            <div>
              <span className="badge badge-primary badge-pill">50</span>
            </div>
          </div>
          <small className="text-muted">Last candidate applied 3 days ago</small>
        </a>
      </div>
    </div>
  }
}