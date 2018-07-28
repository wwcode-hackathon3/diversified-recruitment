import React from "react";

const username = 'Boss';

export default class Home extends React.Component {
  render() {
    return <div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Welcome, {username}</h1>
      </div>

      <p>View your active job listings:</p>
      <div className="list-group">
        <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">Senior Java Developer</h5>
            <div>
              <span className="badge badge-primary badge-pill">14</span>
            </div>
          </div>
          <small>Last applicant applied 5 hours ago</small>
        </a>
        <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">Junior ReactJS Developer</h5>
            <div>
              <span className="badge badge-primary badge-pill">50</span>
            </div>
          </div>
          <small className="text-muted">Last applicant applied 3 days ago</small>
        </a>
      </div>
    </div>
  }
}