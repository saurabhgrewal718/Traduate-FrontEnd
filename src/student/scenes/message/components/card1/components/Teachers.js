import React, { Component } from 'react';
import { Layout,Tabs,Badge } from 'antd';
import Doubtquestion from './Doubtquestion';
import Teacherasked from './Teacherasked';
import Teacherun from './Teacherun';

const TabPane = Tabs.TabPane;

const {Content} = Layout;

class Teachers extends Component {

  render() {
    return (
      <div>
      <Layout className="layout">
        <Content style={{ padding: '0 0px' }}>
          <div style={{ borderRadius:25, height: "auto",width:"100%",overflow: "hidden" }}>

          <Tabs
            defaultActiveKey="1"
            tabPosition="right"
            style={{ height: "auto" }}
          >
            <TabPane tab={<span><i className="fas fa-atom"></i>Answered</span>} key="1"><Teacherasked/></TabPane>
            <TabPane tab={<span>
              <Badge dot>
                  <i className="fas fa-flask"></i>Processing
              </Badge></span>} key="2"><Teacherun/></TabPane>
          </Tabs>

          </div>
        </Content>
      </Layout>


      </div>
    );
  }
}

export default Teachers;
