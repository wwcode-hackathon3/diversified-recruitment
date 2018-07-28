import React from "react";
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'; // ES6

export default class AddJobDescription extends React.Component {
  constructor(props) {
    super(props)
    this.state = { text: '' } // You can also pass a Quill Delta here
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(value) {
    this.setState({ text: value })
  }
  
  render() {
    return <div class="job-description">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Add job description</h1>
      </div>
      <form class="text-align-left">
      <div class="form-group">
        <label for="exampleFormControlInput1">Job Title: </label>
        <input type="email" class="form-control" placeholder="E.g. Frontend Web Developer" />
      </div>
        <ReactQuill 
          theme="snow"
          value={this.state.text}
          onChange={this.handleChange} 
        />
        <div class="container-fluid button-group">
          <button type="button" class="btn btn-info margin-right">Save</button>
          <button type="button" class="btn btn-success">Publish</button>
        </div>
      </form>
    </div>
  }
}