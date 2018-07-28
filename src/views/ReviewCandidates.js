import React from "react";
import Switch from "react-switch";
import {Link} from "react-router-dom";

export default class ReviewCandidates extends React.Component {

    constructor(props) {
        super(props);
        this.state = { checked: false };
        this.handleChange = this.handleChange.bind(this);
      const cachedHits = localStorage.getItem("accept");
      if (cachedHits) {
        this.state.accepted_candidates = JSON.parse(cachedHits);
        console.log(this.state.accepted_candidates);
        // this.setState({ hits: JSON.parse(cachedHits) });
      } else {
        this.state.accepted_candidates = [];
      }
    }

    handleChange(checked) {
        this.setState({ checked });
    }

    render() {
        return <div>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Review Candidates</li>
                </ol>
            </nav>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Review candidates</h1>
            </div>
            <p>
              Review and contact the candidates you're interested in:
              <Link to="#" className="btn btn-primary btn-sm float-right">
                Contact all candidates
              </Link>
            </p>
            <div className="list-group">
                <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">Tomato</h5>
                        <div>
                            <span className="badge badge-primary badge-pill">
                                <Switch
                                    onChange={this.handleChange}
                                    checked={this.state.checked}
                                    id="normal-switch"
                                />
                            </span>
                        </div>
                    </div>
                </a>
                <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">VeryIntresting</h5>
                        <div>
                            <span className="badge badge-primary badge-pill">
                                <Switch
                                    onChange={this.handleChange}
                                    checked={this.state.checked}
                                    id="normal-switch_2"
                                />
                            </span>
                        </div>
                    </div>

                </a>
            </div>
        </div>

    }

}