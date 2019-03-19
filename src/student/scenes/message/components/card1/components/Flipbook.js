import React, { Component } from 'react';
import './Flipbook.css';
import { Layout, Menu } from 'antd';

const { Content } = Layout;

class Flipbook extends Component {

  render() {
    return (
            <div>

              <Layout className="layout">
                <Content style={{ padding: '0 0px' }}>
                  <div style={{ background: 'white', padding: 24, minHeight: 400 }}>
                    The answer goes here !
                  </div>
                </Content>
              </Layout>

            </div>

    );
  }
}

export default Flipbook;
