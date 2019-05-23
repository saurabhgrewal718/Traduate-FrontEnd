import React, { Component } from 'react';
import { Layout } from 'antd';
import { Tabs, Button } from 'antd';
import Science from './components/Science';
import English from './components/English';
import Community from './components/Community';
import Askquestionmodal from './components/Askquestionmodal';

const TabPane = Tabs.TabPane;
const {Content} = Layout;

class Card1 extends Component {

  render() {
    return (
        <div>
            <Layout className="layout">
              <Content style={{ padding: '0 20px' }}>
                <Tabs>
                  <TabPane tab="Science" key="1"><Science/></TabPane>
                  <TabPane tab="Help Community" key="2"><Community/></TabPane>
                </Tabs>
              </Content>
            </Layout>
        </div>

    );
  }
}

export default Card1;
