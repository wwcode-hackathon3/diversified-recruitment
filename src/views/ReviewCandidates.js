import React from "react";
import Switch from "react-switch";

const username = 'Boss';


export default class AddJobDescription extends React.Component {

    constructor() {
        super();
        this.state = { checked: false };
        this.handleChange = this.handleChange.bind(this);
        this.tomato
    }

    handleChange(checked) {
        this.setState({ checked });
    }

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