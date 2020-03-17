import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { PageHeader, Row, Col,  } from 'antd';
import {
  HomeOutlined
} from '@ant-design/icons';
import Demo from '../components/demo/demo';
import './detail.css'

function back(){
  this.$router.push('/home');
}
export default class Uio extends React.Component {
  render() {
    return (
      <div>
        <Row className="back">
            <Link to="/">
              <HomeOutlined className="iconH"/>
            </Link>
        </Row>
        <Demo />
      </div>
    )
  }
}