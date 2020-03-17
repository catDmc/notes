import React from 'react';
import { List, Avatar } from 'antd';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { PageHeader } from 'antd';
import 'antd/dist/antd.css';
import './detail.less';

const data = [
  {
    title: '温度计算器',
    detail:'一个用于计算水在给定温度下是否会沸腾的温度计算器'
  },
  {
    title: 'Ant Design Title 2',
    detail: '...'
  },
  {
    title: 'Ant Design Title 3',
    detail: '...'
  },
  {
    title: 'Ant Design Title 4',
    detail: '...'
  },
];
function App() {
  return (
    <div>
      <header className="header-container"></header>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              title={<Link to="/detail">{item.title}</Link>}
              description={item.detail}
            />
          </List.Item>
        )}
      />
    </div>
  );
}

export default App;