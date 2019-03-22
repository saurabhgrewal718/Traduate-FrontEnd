import React, { Component } from 'react';
import { Layout } from 'antd';
import Doubtquestion from './Doubtquestion';

const {Content} = Layout;

class Doubts extends Component {
  render() {
    return (
      <div>
      <Layout className="layout">
        <Content style={{ padding: '0 0px' }}>
          <div style={{ borderRadius:25, height: "auto",width:"100%",overflow: "hidden" }}>
              <Doubtquestion/>
          </div>
        </Content>
      </Layout>


      </div>
    );
  }
}

export default Doubts;
