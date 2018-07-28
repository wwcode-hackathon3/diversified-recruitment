import React from "react";
import {Link} from "react-router-dom";
import JobListings from "../components/JobListings"
import JobListingData from "../data/job-listings"

const username = 'Boss';

const listings = JobListingData["job-listings"];

export default class Home extends React.Component {
  render() {
    return <div className="home">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Welcome, {username}</h1>
      </div>

      <p>
        View your active job listings:
        <Link to="/add-job-description" className="btn btn-primary btn-sm float-right">
          Add job description
        </Link>
      </p>
      <JobListings listings={listings} />
    </div>
  }
}