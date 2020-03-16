import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'antd';
// import 'antd/dist/antd.css';

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>水沸腾了.</p>;
  }
  return <p>温度不够.</p>;
}

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { temperature: '' };
  }

  handleChange(e) {
    this.setState({ temperature: e.target.value });
  }

  render() {
    const temperature = this.state.temperature;
    return (
      <fieldset>
        <legend>输入摄氏度数值:</legend>
        <Button>1111</Button>
        <input
          value={temperature}
          onChange={this.handleChange} />
        <BoilingVerdict
          celsius={parseFloat(temperature)} />
      </fieldset>
    );
  }
}




