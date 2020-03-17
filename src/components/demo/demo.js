import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Input } from 'antd';
import './demo.less';
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
    const code1 =""
    return (
      <div className= "demo1">
        <fieldset>
          <p className="a">ssssss</p>
          <legend>输入摄氏度数值:</legend>
          <Input
            style={{ width: 100, textAlign: 'center' }}
            value={temperature}
            onChange={this.handleChange} />
          <BoilingVerdict
            celsius={parseFloat(temperature)} />
        </fieldset>
      </div>
      
    );
  }
}




