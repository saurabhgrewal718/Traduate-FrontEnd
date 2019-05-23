import React, { Component } from 'react';
import { Layout } from 'antd';
import { Tabs, Button } from 'antd';
import Topics from './components/Topics';
import Activity from './components/Activity';
import Trending from './components/Trending';

const TabPane = Tabs.TabPane;
const {Content} = Layout;
const operations = <h1>19/03/2019</h1>;

class Card1 extends Component {
  render() {
    return (
        <div>
            <Layout >
              <Content style={{ padding: '0 20px' }}>
                <Tabs >
                  <TabPane tab="Topics" key="1"><Activity/></TabPane>
                  <TabPane tab="Hub" key="2"><Trending/></TabPane>
                </Tabs>
              </Content>
            </Layout>
        </div>

    );
  }
}

export default Card1;
