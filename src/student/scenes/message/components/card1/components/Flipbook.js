import React, { Component } from 'react';
import './Flipbook.css';
import { Layout, Menu } from 'antd';

const { Content } = Layout;

class Flipbook extends Component {

  render() {
    console.log(this.props);
    return (
            <div>

              <Layout className="layout">
                <Content style={{ padding: '0 0px' }}>
                  <div style={{ background: 'white', padding: 24, height: 450,width:"100%",overflow: "hidden" }}>
                      <div className="scrollbar" id="style-1" style={{height:450}}>
                         <div className="force-overflow">
                           <div style={{display:"flex"}}>
                              <div style={{margin:"auto",paddingLeft:"20px",paddingRight:"20px"}}>
                                 <p style={{fontSize:30}}>{this.props.answer}</p>
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
