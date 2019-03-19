import React, { Component } from 'react';
import { Modal, Button,Avatar } from 'antd';


class Motionbookmodal extends React.Component {
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
          style={{ top: 0 }}
          width="100%"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel} style={{borderRadius:"25px",backgroundColor:"#ff3b3b	",color:"white",width:150}}>
               <i class="far fa-sad-cry" style={{paddingRight:10,color:"white"}}></i>I Hated This !
            </Button>,
            <Button key="submit" style={{borderRadius:"25px",backgroundColor:"#00a91c",color:"white",width:150}} onClick={this.handleOk}>
               <i class="fas fa-grin-hearts" style={{paddingRight:10,color:"white"}}></i>I Loved This !
            </Button>,
            <Avatar style={{position:"relative",float:"left"}} src="https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg" />,
            <Avatar style={{position:"relative",float:"left"}} src="https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg" />,
            <Avatar style={{position:"relative",float:"left"}} src="https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg" />,
            <Avatar style={{position:"relative",float:"left"}} src="https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg" />,
            <b><p style={{paddingTop:5,paddingLeft:14,position:"relative",float:"left"}}>+500 Reacted !</p></b>
         ]}
        >
          <p style={{height:550,overflow:"hidden",backgroundColor:"black"}}></p>
        </Modal>
      </div>
    );
  }
}

export default Motionbookmodal;
