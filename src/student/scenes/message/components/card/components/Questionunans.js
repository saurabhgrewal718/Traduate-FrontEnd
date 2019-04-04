import React, { Component } from 'react';
import { Drawer, Avatar,Button,Progress } from 'antd';
import Oneunans from './Oneunans'
import { Tabs} from 'antd';
import Doubtsun from './Doubtsun'
import Communityun from './Communityun'

const TabPane = Tabs.TabPane;

class Questionunans extends React.Component {
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
          title={<div style={{display:"flex"}}><div style={{margin:"auto"}}><b>Questions Unanswered !</b></div></div>}
          placement="bottom"
          height="530px"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >

               <Tabs
                 defaultActiveKey="1"
                 tabPosition="right"
                 style={{ height: "auto" }}
               >
                 <TabPane tab={<span><i className="fas fa-atom"></i> Doubts</span>} key="1"><Doubtsun/></TabPane>
                 <TabPane tab={<span><i className="fas fa-flask"></i> Community</span>} key="2"><Communityun/></TabPane>
               </Tabs>


        </Drawer>
      </div>
    );
  }
}

export default Questionunans;
