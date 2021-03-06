import React, { Component } from 'react';
import { Tabs,Input,Modal,Avatar, Popconfirm, Icon,Button,message } from 'antd';
import { Select } from 'antd';
import './Doubts.css';

const Option = Select.Option;

function confirm(e) {
  console.log(e);
  message.success('Click on Yes');
}

function cancel(e) {
  console.log(e);
  message.error('Click on No');
}

function handleChange(value) {
  console.log(`selected ${value}`);
}

function handleBlur() {
  console.log('blur');
}

function handleFocus() {
  console.log('focus');
}


const { TextArea } = Input;


class Answerfile extends Component {
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
              <Button onClick={this.showModal} style={{height:"2px",width:"2px",paddingLeft:"0px"}}>
                  <div >
                      <img src="https://cdn.dribbble.com/users/2138960/screenshots/4346699/1.png" alt="Avatar" style={{width:"80px",height:"80px",borderRadius: "50%"}}/>
                      <b><p style={{paddingTop:10,paddingLeft:5}}>Answer File</p></b>
                  </div>
              </Button>
              <Modal
                style={{top:50}}
                title="the question goes here"
                width="90%"
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                footer={[
                  <Popconfirm title="Are you sure？" onConfirm={confirm} onCancel={cancel} okText="Yes" cancelText="No" icon={<Icon type="question-circle-o" style={{ color: 'red' }} />}>
                     <Button style={{borderRadius:25,backgroundColor:"#c30101",marginTop:10,marginBottom:10,color:"white"}}>Report Answer</Button>
                  </Popconfirm>,
                  <Button key="submit" type="primary" onClick={this.handleOk} style={{borderRadius:25,backgroundColor:"#0c9200",marginRight:20,color:"white"}}>
                     Say Cheers !
                  </Button>,
                  <Avatar style={{position:"relative",float:"left",marginTop:10}} src="https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg" />,
                  <Avatar style={{position:"relative",float:"left",marginTop:10}} src="https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg" />,
                  <Avatar style={{position:"relative",float:"left",marginTop:10}} src="https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg" />,
                  <Avatar style={{position:"relative",float:"left",marginTop:10}} src="https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg" />,
                  <b><p style={{paddingTop:5,paddingLeft:14,position:"relative",float:"left",marginTop:10}}>+500 Marked A Doubt</p></b>
               ]}
              >
                  <div style={{width:"100%", height:400}}>
                      <div style={{position:"relative",float:"right",width:200,height:400}}>
                          <div style={{ display:"flex"}}>
                             <div style={{ margin:"auto" }}>

                               <div >
                                   <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/d360e756534229.59b23e4d35886.png" alt="Avatar" style={{width:"80px",height:"80px",borderRadius: "50%"}}/>
                                   <b><p style={{paddingTop:10,paddingLeft:2}}>Community</p></b>
                               </div>
                               <div >
                                   <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/54eb1256534229.59b2492202982.png" alt="Avatar" style={{width:"80px",height:"80px",borderRadius: "50%"}}/>
                                   <b><p style={{paddingTop:10,paddingLeft:14}}>Teacher</p></b>
                               </div>
                             </div>
                          </div>
                      </div>
                      <div style={{ display:"flex"}}>
                         <div style={{ margin:"auto" }}>
                             <div style={{position:"relative",float:"left"}}>
                               <div style={{width:1100,fontSize:20}}>
                                 <p>hey!</p>
                               </div>
                             </div>
                         </div>
                      </div>

                  </div>


              </Modal>
            </div>

    );
  }
}

export default Answerfile;
