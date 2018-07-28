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
      <h1>Pick candidates</h1>
      <WordCloud
        data={data}
        fontSizeMapper={fontSizeMapper}
        // rotate={rotate}
      />,
    </div>
  }
}