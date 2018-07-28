import React from "react";

export default class AddJobDescription extends React.Component {
  render() {
    return <div>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/">Home</a></li>
          <li class="breadcrumb-item active" aria-current="page">Review Candidates</li>
        </ol>
      </nav>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Review candidates</h1>
      </div>
    </div>
  }
}