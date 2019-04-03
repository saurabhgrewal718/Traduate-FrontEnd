import React, { Component } from 'react';
import { Drawer, Button } from 'antd';
import { Tabs,Avatar,Popconfirm } from 'antd'
import Reports from './Reports'

const TabPane = Tabs.TabPane;

class Reportcontainer extends React.Component {
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div>
        <Button onClick={this.showDrawer} style={{borderRadius:25,borderColor:"black"}}><i className="fa fa-bar-chart" aria-hidden="true"></i></Button>
        <Drawer
          title={<div style={{display:"flex"}}><div style={{margin:"auto"}}><b>Your performence Matrix :)</b></div></div>}
          placement="bottom"
          closable={false}
          height="500px"
          onClose={this.onClose}
          visible={this.state.visible}
        >

          <div >
              <Tabs
                defaultActiveKey="1"
                tabPosition="left"
                style={{ height: "auto" }}
              >
                <TabPane tab={<span><i className="far fa-chart-bar"></i> Reports</span>} key="1"><Reports/></TabPane>
{/*                <TabPane tab={<span><i className="fas fa-flask"></i> Chemistry</span>} key="2">Content of tab 2</TabPane>
                <TabPane tab={<span><i className="fas fa-sort-numeric-up"></i> Maths</span>} key="3">Content of tab 3</TabPane>
                <TabPane tab={<span><i className="fas fa-closed-captioning"></i> English</span>} key="4">Content of tab 4</TabPane>
                <TabPane tab={<span><i className="fas fa-closed-captioning" style={{marginTop:25}}></i> English</span>} key="5">Content of tab 4</TabPane>
                <TabPane tab={<span><i className="fas fa-closed-captioning"></i> Users</span>} key="6">Content of tab 4</TabPane> */}
              </Tabs>
          </div>



        </Drawer>
      </div>
    );
  }
}

export default Reportcontainer;
