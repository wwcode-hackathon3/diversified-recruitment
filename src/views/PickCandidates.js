import React from "react";
import WordCloud from 'react-d3-cloud';
import JsonData from '../output.json';

const human_1 = [
  { text: 'Apple', value: 1000 },
  { text: 'Banana', value: 200 },
  { text: 'Tomato', value: 800 },
  { text: 'Cat', value: 1000000 },
  { text: 'Very Interesting', value: 10 },
];


const human_2 = [
  { text: 'Hey', value: 1000 },
  { text: 'lol', value: 200 },
  { text: 'first impression', value: 800 },
  { text: 'very cool', value: 1000000 },
  { text: 'duck', value: 10 },
];

const resumes = [human_1, human_2];


const fontSizeMapper = word => Math.log2(word.value) * 5;



class AddJobDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {index: 0};
    // This binding is necessary to make `this` work in the callback
    this.dislike = this.dislike.bind(this);
    this.like = this.like.bind(this);
    this.moveToNext = this.moveToNext.bind(this);
    this.processJson = function() {
        //
        // console.log(JsonData.highlight[0]);
        // console.log(JsonData.highlight);
        for (let i = 0; i <10; i++) {
          let candidate = JsonData.highlight[i];
          for (let j = 0; j < candidate.length; j++) {
            let attribute = candidate[j];
            if (attribute.category === "Skills") {
              // console.log(attribute);
            }
          }
      }
    }
    this.processJson();
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
    if (this.state.index < resumes.length) {
      word_cloud = <WordCloud data={resumes[this.state.index]} fontSizeMapper={fontSizeMapper} />;
      like_button = <button onClick={this.like} className="btn btn-success">I like you</button>;
      dislike_button = <button onClick={this.dislike} className="btn btn-danger"> I no lik u </button>
    } else {
      word_cloud = <p>The End</p>;
      like_button = <br />;
      dislike_button = <br />;
 }

    return <div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Pick candidates</h1>
      </div>
      {word_cloud}
      <div className="text-center">
        {like_button}
        {dislike_button}
      </div>
     </div>
    }
}

export default AddJobDescription;