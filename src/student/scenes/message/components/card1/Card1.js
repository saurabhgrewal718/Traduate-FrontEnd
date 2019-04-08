import React, { Component } from 'react';
import { Layout } from 'antd';
import { Tabs, Button } from 'antd';
import Doubts from './components/Doubts';
import Myquestion from './components/Myquestion';
import Teachers from './components/Teachers';
import { Badge } from 'antd';

const TabPane = Tabs.TabPane;
const operations = <b><p style={{paddingLeft:20}}>19 January 2019<i className="fa fa-calendar" aria-hidden="true" style={{color:"black",paddingLeft:10}}></i></p></b>;
const {Content} = Layout;

class Card1 extends Component {
  render() {
    return (
        <div>
            <Layout className="layout">
              <Content style={{ padding: '0 20px' }}>
                <Tabs tabBarExtraContent={operations}>
                  <TabPane tab="Teachers" key="1"><Teachers/></TabPane>
                  <TabPane tab="My Questions" key="2"><Myquestion/></TabPane>
                  <TabPane tab="Doubts" key="3"><Doubts/></TabPane>                  
                </Tabs>
              </Content>
            </Layout>
        </div>

    );
  }
}

export default Card1;
