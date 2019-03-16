import React, { Component } from 'react';
import { Layout } from 'antd';
import { Tabs, Button } from 'antd';
import Topics from './components/Topics';
import Activity from './components/Activity';

const TabPane = Tabs.TabPane;
const {Content} = Layout;

class Card1 extends Component {
  render() {
    return (
        <div>
            <Layout className="layout">
              <Content style={{ padding: '0 20px' }}>
                <Tabs>
                  <TabPane tab="Topics Covered" key="1"><Topics/></TabPane>
                  <TabPane tab="Activity" key="2"><Activity/></TabPane>
                </Tabs>
              </Content>
            </Layout>
        </div>

    );
  }
}

export default Card1;
