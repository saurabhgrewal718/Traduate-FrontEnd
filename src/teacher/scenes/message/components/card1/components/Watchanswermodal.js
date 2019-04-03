import React, { Component } from 'react';
import { Tabs,Input,Modal,Avatar, Popconfirm, Icon,Button,message,Rate,Select } from 'antd';
import './Doubts.css';
import Flipbook from './Flipbook';
import Answerfile from './Answerfile'
import Imagegallry from'./Imagegallry'
import Reportanswer from './Reportanswer'

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
const desc = ['Terrible', 'Bad', 'Normal', 'Good', 'Wonderful'];


class Watchanswermodal extends Component {
  state = { value:1,visible: false }

  handleChange = (value) => {
    this.setState({ value });
    console.log(value);
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
    const { value } = this.state;
    return (
            <div>
              <Button onClick={this.showModal}>Watch Answer</Button>
              <Modal
                style={{top:50}}
                title={         <div className="dailylistitem1" style={{height:"30px"}}>
                                     <div className="top1">
                                       <Avatar src="https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg" />
                                     </div>
                                     <div className="top2">
                                        <p>Question :</p>
                                     </div>
                                     <div className="top2">
                                       <p style={{paddingTop:0,fontSize:18}} > Ask Your Question Here Ask Your Question Here Ask Your Question Here Ask Your</p>
                                     </div>
                                     <Button style={{borderRadius:25,backgroundColor:"#c30101",position:"relative",float:"Right",paddingLeft:0,paddingRight:0,marginRight:"40px",color:"white"}}><Reportanswer/></Button>
                                </div>
                        }
                width="90%"
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                footer={[
                  <span>
                    <Rate tooltips={desc} onChange={this.handleChange} value={value} />
                    {value ? <span style={{marginRight:20,color:"green",fontWeight:"bold"}}>{desc[value - 1]}</span> : ''}
                  </span>,
                  <Button key="submit" type="primary" onClick={this.handleOk} style={{borderRadius:25,backgroundColor:"#0c9200",marginRight:20,color:"white"}}>
                     Say Cheers !
                  </Button>,
                  <div style={{position:"relative",float:"left",paddingLeft:20}}>
                      <Avatar style={{position:"relative",float:"left"}} src="https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg" />,
                      <Avatar style={{position:"relative",float:"left"}} src="https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg" />,
                      <Avatar style={{position:"relative",float:"left"}} src="https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg" />,
                      <Avatar style={{position:"relative",float:"left"}} src="https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg" />,
                      <b><p style={{paddingTop:5,paddingLeft:14,position:"relative",float:"left"}}>+500 Marked A Doubt</p></b>
                  </div>
               ]}
              >
                  <div style={{width:"100%", height:450}}>
                      <div style={{position:"relative",float:"right",width:200,height:400}}>
                          <div style={{ display:"flex"}}>
                             <div style={{ margin:"auto" }}>
                               <div style={{marginBottom:"80px"}}>
                                  <Imagegallry/>
                               </div>
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
                                 <Flipbook/>
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


export default Watchanswermodal
