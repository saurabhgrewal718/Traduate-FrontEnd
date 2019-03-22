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
                  <div style={{ background: 'white', padding: 24, height: 400,width:"100%",overflow: "hidden" }}>
                      <div class="scrollbar" id="style-1">
                         <div class="force-overflow">
                           <div style={{display:"flex"}}>
                              <div style={{margin:"auto",paddingLeft:"20px",paddingRight:"20px"}}>
                                 The answer goes here !The answer goes here !The answer goes here !The answer goes here !The answer goes here !The answer goes here !The answer goes here !
                                 The answer goes here !The answer goes here !The answer goes here !The answer goes here !The answer goes here !The answer goes here !The answer goes here !
                                 The answer goes here ! The nswer goes here !The answer goes here !The answer goes here !The answer goes here !The answer goes here !The answer goes here !
                              </div>
                            </div>
                         </div>
                      </div>
                  </div>
                </Content>
              </Layout>

            </div>

    );
  }
}

export default Flipbook;
