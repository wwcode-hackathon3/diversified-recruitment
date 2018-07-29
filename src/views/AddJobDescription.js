import React from "react";
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'; // ES6

export default class AddJobDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' }; // You can also pass a Quill Delta here
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(value) {
    this.setState({ text: value })
  }
  
  render() {
    return <div className="job-description">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="/">Home</a></li>
          <li className="breadcrumb-item active" aria-current="page">Add Job Description</li>
        </ol>
      </nav>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Add job description</h1>
      </div>
      <form className="text-align-left">
      <div className="form-group">
        <label htmlFor="exampleFormControlInput1">Job Title: </label>
        <input type="email" className="form-control" placeholder="E.g. Frontend Web Developer" />
      </div>
        <ReactQuill 
          theme="snow"
          value={this.state.text}
          onChange={this.handleChange} 
        />
        <div className="container-fluid button-group">
          <button type="button" className="btn btn-info margin-right">Save</button>
          <button type="button" className="btn btn-success">Publish</button>
        </div>
      </form>
    </div>
  }
}