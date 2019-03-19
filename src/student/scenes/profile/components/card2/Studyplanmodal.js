import React, { Component } from 'react';
import { Tabs,Input,Modal,Avatar, Button } from 'antd';
import { Select } from 'antd';
import { Radio } from 'antd';

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

const Option = Select.Option;

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


class Studyplanmodal extends Component {
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
              <Button onClick={this.showModal} style={{borderRadius:"25px",backgroundColor:"#343d46",color:"white"}}>Study Plan</Button>
              <Modal
                style={{top:50}}
                title={         <div className="dailylistitem">
                                     <div className="top1">
                                       <Avatar src="https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg" />
                                     </div>
                                     <div className="top2">
                                        <p>Question By</p>
                                     </div>
                                     <div className="top2">
                                        <b><p>Ankit Sharma</p></b>
                                     </div>
                                     <div className="top6">
                                        <b><p>450</p></b>
                                     </div>
                                 </div>
                        }
                width="90%"
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                footer={[
                  <Button key="back" onClick={this.handleCancel}>Cancel</Button>,
                  <Button key="submit" type="primary" onClick={this.handleOk}>
                     Ask Question
                  </Button>,
                  <Avatar style={{position:"relative",float:"left"}} src="https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg" />,
                  <Avatar style={{position:"relative",float:"left"}} src="https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg" />,
                  <Avatar style={{position:"relative",float:"left"}} src="https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg" />,
                  <Avatar style={{position:"relative",float:"left"}} src="https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg" />,
                  <b><p style={{paddingTop:5,paddingLeft:14,position:"relative",float:"left"}}>+500 Online</p></b>
               ]}
              >

                  <div style={{width:"100%",height:400}}>
                      <div style={{ display:"flex"}}>
                         <div style={{ margin:"auto" }}>
                             <div>
                               <TextArea style={{width:900,paddingTop:10,paddingBottom:10,fontSize:24}} placeholder="Ask Your Question Here..." autosize={{ minRows: 2, maxRows: 3 }} />
                             </div>
                             <div style={{position:"relative",float:"left",marginTop:30}}>
                               <Select
                                 showSearch
                                 style={{ width: 200 }}
                                 placeholder="Select The Subject"
                                 optionFilterProp="children"
                                 onChange={handleChange}
                                 onFocus={handleFocus}
                                 onBlur={handleBlur}
                                 filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                               >
                                 <Option value="1">Physics</Option>
                                 <Option value="2">Chemistry</Option>
                                 <Option value="3">Mathematics</Option>
                               </Select>
                             </div>
                             <div style={{position:"relative",float:"left",paddingLeft:150,marginTop:30}}>
                               <Select
                                 showSearch
                                 style={{ width: 200}}
                                 placeholder="Select The Chapter"
                                 optionFilterProp="children"
                                 onChange={handleChange}
                                 onFocus={handleFocus}
                                 onBlur={handleBlur}
                                 filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                               >
                                 <Option value="1">Chapter 1</Option>
                                 <Option value="2">Chapter 2</Option>
                                 <Option value="3">Chapter 3</Option>
                               </Select>
                             </div>
                             <div style={{position:"relative",float:"right",marginTop:30}}>
                               <Select
                                 showSearch
                                 style={{ width: 200 }}
                                 placeholder="Select The Topic"
                                 optionFilterProp="children"
                                 onChange={handleChange}
                                 onFocus={handleFocus}
                                 onBlur={handleBlur}
                                 filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                               >
                                 <Option value="1">Gravitation</Option>
                                 <Option value="2">Fluid mechanics</Option>
                                 <Option value="3">Newton's laws of motion</Option>
                               </Select>
                             </div>
                         </div>
                      </div>

                      <div style={{width:"100%",paddingTop:50}}>
                        <div style={{ display:"flex"}}>
                           <div style={{ margin:"auto" }}>

                               <div>
                                 <div>
                                   <RadioGroup defaultValue="b" size="large">
                                     <div style={{position:"relative",float:"left"}}>
                                         <RadioButton style={{width:80,height:1,borderColor:"rgba(255, 0, 0, 0)"}} value="b">
                                             <div style={{position:"relative",float:"left"}}>
                                                 <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/d360e756534229.59b23e4d35886.png" alt="Avatar" style={{width:"80px",height:"80px",borderRadius: "50%"}}/>
                                                 <b><p style={{paddingTop:10,paddingLeft:2}}>Community</p></b>
                                             </div>
                                         </RadioButton>
                                     </div>
                                     <div style={{marginLeft:80,position:"relative",float:"left"}}>
                                         <RadioButton style={{width:80,height:1,borderColor:"rgba(255, 0, 0, 0)"}} value="c">
                                             <div style={{position:"relative",float:"left"}}>
                                                 <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/54eb1256534229.59b2492202982.png" alt="Avatar" style={{width:"80px",height:"80px",borderRadius: "50%"}}/>
                                                 <b><p style={{paddingTop:10,paddingLeft:14}}>Teacher</p></b>
                                             </div>
                                         </RadioButton>
                                     </div>
                                   </RadioGroup>
                                 </div>
                               </div>

                              <div style={{marginTop:130,marginLeft:30}}>
                                  <p> * Choose Whome You Want to Ask ?</p>
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

export default Studyplanmodal;
