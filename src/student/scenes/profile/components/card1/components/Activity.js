import React, { Component } from 'react';
import { Layout } from 'antd';
import { Tabs, Button,Avatar,Popconfirm } from 'antd';
import './Topics.css';
import Topics from './Topics';

const TabPane = Tabs.TabPane;
const {Content} = Layout;

class Activity extends Component {
  render() {
    return (
      <div>
        <div>
          <Tabs
            defaultActiveKey="1"
            tabPosition="right"
            style={{ height: "auto" }}
          >
            <TabPane tab={<span><i class="fas fa-atom"></i> Physics</span>} key="1"><Topics/></TabPane>
            <TabPane tab={<span><i class="fas fa-flask"></i> Chemistry</span>} key="2">Content of tab 2</TabPane>
            <TabPane tab={<span><i class="fas fa-sort-numeric-up"></i> Maths</span>} key="3">Content of tab 3</TabPane>
            <TabPane tab={<span><i class="fas fa-closed-captioning"></i> English</span>} key="4">Content of tab 4</TabPane>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default Activity;
