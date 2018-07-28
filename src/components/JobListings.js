import React from "react";
import {Link, withRouter} from 'react-router-dom'


class JobListings extends React.Component {
  goToPickCandidate(candidateId) {
    this.props.history.push("/pick-candidates/" + candidateId)
  }

  constructor(props) {
    super(props);

    this.listings = this.props.listings.map((listing) =>
      <div onClick={() => this.goToPickCandidate(listing["id"])} key={listing["id"]} className="list-group-item list-group-item-action flex-column align-items-start">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">{listing["job-title"]}</h5>
          <div>
            <span className="badge badge-primary badge-pill">{listing["candidates"].length}</span>
          </div>
        </div>
        {/*Random hours ago as placeholder*/}
        <small className="text-muted">Last candidate applied {Math.floor((Math.random() * 10) + 1)} hours ago</small>
        <Link className="btn btn-info right-align" to="/review-candidates" role="button" onClick={(event) => event.stopPropagation()}>Review Selected Candidates</Link>
      </div>
    );
  }

  render() {
    return <div className="list-group">
      {this.listings}
    </div>
  }
}

export default withRouter(JobListings);