import React from "react";
import WordCloud from 'react-d3-cloud';

const data = [
  { text: 'Hey', value: 1000 },
  { text: 'lol', value: 200 },
  { text: 'first impression', value: 800 },
  { text: 'very cool', value: 1000000 },
  { text: 'duck', value: 10 },
];

const fontSizeMapper = word => Math.log2(word.value) * 5;


export default class AddJobDescription extends React.Component {
  render() {
    return <div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Pick candidates</h1>
      </div>
      <WordCloud
        data={data}
        fontSizeMapper={fontSizeMapper}
        // rotate={rotate}
      />
    </div>
  }
}