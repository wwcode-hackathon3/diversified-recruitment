import React from "react";

const username = 'Boss';

export default class Home extends React.Component {
  render() {
    return <div>
      <h1 className="h2">Welcome, {username}</h1>
      <p>View your active job listings:</p>
      <div className="list-group">
        <a href="#" className="list-group-item list-group-item-action flex-column align-items-start active">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">Senior Java Developer</h5>
            <span className="badge badge-primary badge-pill">14</span>
          </div>
          <small>Last applicant applied 5 hours ago</small>
        </a>
        <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">Junior ReactJS Developer</h5>
            <span className="badge badge-primary badge-pill">5</span>
          </div>
          <small className="text-muted">Last applicant applied 3 days ago</small>
        </a>
      </div>
    </div>
  }
}