import React, { Component } from 'react';
import { Tabs,Input,Modal,Avatar, Popconfirm, Icon,Button,message,Rate,Select } from 'antd';
import './Doubts.css';
import Flipbook from './Flipbook';
import Answerfile from './Answerfile'
import Imagegallry from'./Imagegallry'
import Reportanswer from './Reportanswer'

const {Content} = Layout;

class Watchanswer extends Component {
  render() {
    return (
       <div>

            <Layout className="layout">
              <Content style={{ padding: '0 0px' }}>
                <div style={{ borderRadius:25, height: "auto",width:"100%",overflow: "hidden" }}>
                    yes
                </div>
              </Content>
            </Layout>

        </div>

    );
  }
}

export default Watchanswer;
