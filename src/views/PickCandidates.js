import React from "react";
import WordCloud from 'react-d3-cloud';
import candidates from '../candidates.json';


const fontSizeMapper = word => Math.log2(word.value) * 5;



class AddJobDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {index: 0};
    // This binding is necessary to make `this` work in the callback
    this.dislike = this.dislike.bind(this);
    this.like = this.like.bind(this);
    this.moveToNext = this.moveToNext.bind(this);
  }

  moveToNext() {
    console.log(this.state.index);
    this.setState({index: this.state.index+1});
  }
  dislike() {
    this.moveToNext();
  }
  like () {
    this.moveToNext();
  }


  render() {
    let word_cloud;
    let like_button;
    let dislike_button;
    let name;
    if (this.state.index < candidates.length) {
      let word_cloud_data = candidates[this.state.index].skills;
      name = <p>{candidates[this.state.index].name}</p>;
      word_cloud = <WordCloud 
                      data={word_cloud_data} 
                      fontSizeMapper={fontSizeMapper} 
                      height={390}
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
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/">Home</a></li>
          <li class="breadcrumb-item active" aria-current="page">Senior Java Developer</li>
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

export default AddJobDescription;