import React, { Component } from 'react';
import { Tabs,Radio,Input,Modal,Avatar, Popconfirm, Icon,Button,message } from 'antd';
import { Select } from 'antd';
import './Doubts.css';

const RadioGroup = Radio.Group;
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


class Reportanswer extends Component {
  state = {
    value: 1,
    visible: false
  }

  onChange = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  }

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
    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    };
    return (
            <div>
              <Button style={{borderRadius:25,backgroundColor:"#c30101",color:"white"}} onClick={this.showModal}>Report Answer</Button>
              <Modal
                style={{top:50}}
                title={
                               <div className="dailylistitem1" style={{height:30}}>
                                     <div style={{postion:"relative",float:"left"}}>
                                       <i style={{paddingTop:0,color:"#FCE205",fontSize:22}} className="fas fa-exclamation-triangle"></i>
                                     </div>
                                     <div className="top2" style={{paddingTop:0}}>
                                        <p>Report Answer</p>
                                     </div>
                                </div>
                      }
                width="80%"
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                footer={[
                  <Button key="submit" type="primary" onClick={this.handleOk} style={{borderRadius:25,backgroundColor:"#c30101",marginTop:10,marginBottom:10,color:"white"}}>Report Answer</Button>
               ]}
              >
                  <div style={{width:"100%", height:400}}>

                             <div style={{position:"relative",float:"left",width:"50%",backgroundColor:"white"}}>
                               <div style={{display:"flex"}}><div style={{margin:"auto"}}>
                                  <img src="https://cdn.dribbble.com/users/2046015/screenshots/6015680/08_404.gif" alt="Avatar" style={{width:"550px",height:"400px"}}/>
                               </div></div>
                             </div>

                             <div style={{position:"relative",float:"left",width:"50%",backgroundColor:"white"}}>
                               <div style={{fontSize:20}}>
                                  <p style={{fontSize:20}}>Something is Wrong....Tell us what...</p>
                                  <div style={{display:"flex"}}><div style={{margin:"auto"}}>
                                      <RadioGroup onChange={this.onChange} value={this.state.value}>
                                        <div style={{width:"100%",height:"auto",marginBottom:20,marginTop:30}}>
                                           <Radio style={radioStyle} value={1}><b><p style={{fontSize:20,position:"relative",float:"right",marginBottom:0,marginRight:25,color:"#969696"}}>The Written answer is Wrong!</p></b></Radio>
                                        </div>
                                        <div style={{width:"100%",height:"auto",marginBottom:20,marginTop:10}}>
                                           <Radio style={radioStyle} value={2}><b><p style={{fontSize:20,position:"relative",float:"right",marginBottom:0,marginRight:40,color:"#969696"}}>The Image is unappropriate!</p></b></Radio>
                                        </div>
                                        <div style={{width:"100%",height:"auto",marginBottom:20,marginTop:10}}>
                                           <Radio style={radioStyle} value={3}><b><p style={{fontSize:20,position:"relative",float:"right",marginBottom:0,marginRight:52,color:"#969696"}}>Answer in Image is Wrong!</p></b></Radio>
                                        </div>
                                        <div style={{width:"100%",height:"auto",marginBottom:20,marginTop:10}}>
                                           <Radio style={radioStyle} value={4}><b><p style={{fontSize:20,position:"relative",float:"right",marginBottom:0,color:"#969696"}}>Unappropriate language is used!</p></b></Radio>
                                        </div>
                                        <div style={{width:"100%",height:"auto",marginBottom:20,marginTop:10}}>
                                           <Radio style={radioStyle} value={5}><b><p style={{fontSize:20,position:"relative",float:"right",marginBottom:0,marginRight:155,color:"#969696"}}>Something else! </p></b></Radio>
                                        </div>
                                      </RadioGroup>
                                 </div></div>
                               </div>
                             </div>

                  </div>


              </Modal>
            </div>

    );
  }
}

export default Reportanswer;
