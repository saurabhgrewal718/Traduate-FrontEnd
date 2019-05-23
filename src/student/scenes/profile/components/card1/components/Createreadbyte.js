import React, { Component } from 'react';
import { Modal, Button,Avatar } from 'antd';
import Videoplayer from './Videoplayer'


class Createreadbyte extends React.Component {
  state = { visible: false }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  render() {
    return (
      <div>
        <Button style={{borderRadius:25,borderColor:"black",zIndex:1}} onClick={this.showModal}>
          <i className="fa fa-clone" ></i>
        </Button>
        <Modal
          title={<div style={{display:"flex"}}><div style={{margin:"auto"}}><b style={{}}>This is the motionbook</b></div></div>}
          style={{ top: 30}}
          width="95%"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel} style={{fontSize:20,fontFamily:"Questrial",borderRadius:"20px",width:"auto",padding:5,paddingLeft:15,paddingRight:15,height:"auto",backgroundColor:"#db2d43",color:"#fcf5ee"}}><b >Go Back</b></Button>,
            <Button key="submit" onClick={this.handleOk} style={{fontSize:20,fontFamily:"Questrial",borderRadius:"20px",width:"auto",padding:5,paddingLeft:15,paddingRight:15,height:"auto",backgroundColor:"#db2d43",color:"#fcf5ee"}}><b >Go Back</b></Button>,
            
         ]}
        >
           <Videoplayer/>
        </Modal>
      </div>
    );
  }
}

export default Createreadbyte;
