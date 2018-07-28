import React from "react";
import WordCloud from 'react-d3-cloud';


const human_1 = [
  { text: 'Apple', value: 1000 },
  { text: 'Banana', value: 200 },
  { text: 'Tomato', value: 800 },
  { text: 'Cat', value: 1000000 },
  { text: 'Very Intersting', value: 10 },
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
  }

  moveToNext() {
    console.log(this.state.index);
    this.setState({index: ++this.state.index});
  }
  dislike() {
    this.moveToNext();
  }
  like () {
    this.moveToNext();
  }

  render() {
    return <div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Pick candidates</h1>
      </div>
    {this.state.index < resumes.length ?
      <WordCloud
        data={resumes[this.state.index]}
        fontSizeMapper={fontSizeMapper}
        // rotate={rotate}
      /> : <p> The End </p>}
      <button onClick={this.dislike}>
        I dislike you
      </button>
      <button onClick={this.like}>
        I like you
      </button>
    </div>
  }


}

export default AddJobDescription;