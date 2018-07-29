import React from "react";
import WordCloud from 'react-d3-cloud';
import JSONData from '../candidates.json';



const fontSizeMapper = word => Math.log2(word.value) * 5;


class PickCandidates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {candidates: []};
    // This binding is necessary to make `this` work in the callback
    this.dislike = this.dislike.bind(this);
    this.like = this.like.bind(this);
    this.moveToNext = this.moveToNext.bind(this);
    const cachedHits = localStorage.getItem("not_processed");
    if (cachedHits) {
      this.state.candidates = JSON.parse(cachedHits);
      // this.setState({ hits: JSON.parse(cachedHits) });
    } else {
      this.state.candidates = JSONData.slice(0, 20);
      localStorage.setItem("not_processed",  JSON.stringify(this.state.candidates));
      localStorage.setItem("accept",  "[]");
    }
  }

  moveToNext() {
    // console.log(this.state.index);
    this.state.candidates.shift();
    this.setState({candidates: this.state.candidates});
    localStorage.setItem("not_processed",  JSON.stringify(this.state.candidates))

  }
  dislike() {
    this.moveToNext();
  }
  like () {
    var current_accept = JSON.parse(localStorage.getItem("accept"));
    console.log(current_accept);
    current_accept.push(this.state.candidates[0]);
    localStorage.setItem("accept", JSON.stringify(current_accept));
    this.moveToNext();
  }


  render() {
    console.log(localStorage.getItem("n"));
    let word_cloud;
    let like_button;
    let dislike_button;
    let name;
    if (this.state.candidates.length>0) {
      let word_cloud_data = this.state.candidates[0].skills;
      name = <p>{this.state.candidates[0].name}</p>;
      word_cloud = <WordCloud 
                      data={word_cloud_data} 
                      fontSizeMapper={fontSizeMapper} 
                      height={390}
                      font={"sans-serif"}
                    />;
      like_button = <button onClick={this.like} className="btn btn-success">I like you</button>;
      dislike_button = <button onClick={this.dislike} className="btn btn-danger"> I no lik u </button>
    } else {
      name = <br />;
      word_cloud = <p>The End</p>;
      like_button = <br />;
      dislike_button = <br />;
 }

    return <div className="pick-candidates">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="/">Home</a></li>
          <li className="breadcrumb-item active" aria-current="page">Senior Java Developer</li>
        </ol>
      </nav>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Pick candidates</h1>
      </div>
      {name}
      <div className="svg-container">
        {word_cloud}
      </div>
      <div className="text-center">
        {like_button}
        {dislike_button}
      </div>
     </div>
    }
}

export default PickCandidates;