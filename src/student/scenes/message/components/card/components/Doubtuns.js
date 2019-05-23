import React, { Component } from 'react';
import { Drawer, Avatar,Button,Progress } from 'antd';
import Oneunans from './Oneunans'
import { Tabs} from 'antd';
import Doubtsun from './Doubtsun'

const TabPane = Tabs.TabPane;

class Doubtuns extends React.Component {
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
        <Button onClick={this.showDrawer} style={{borderRadius:25,marginTop:"-15px",borderColor:"black",zIndex:1}}><i style={{color:"#FF0000"}} className="fas fa-question"></i></Button>
        <Drawer
          title={<div style={{display:"flex"}}><div style={{margin:"auto"}}><b>Unanswered Doubts!</b></div></div>}
          placement="bottom"
          height="530px"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <Doubtsun/>

        </Drawer>
      </div>
    );
  }
}

export default Doubtuns;
