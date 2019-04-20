import React, { Component } from 'react';
import { Tabs,Input,Modal,Avatar, Button,Tooltip,Form } from 'antd';
import { Select } from 'antd';
import './Science.css';
import { Radio,message } from 'antd';
import axios from 'axios';
import {
    getfromstorage,setInStorage,
  } from '../../../../../utils/Storage';

  axios.defaults.baseURL = 'http://localhost:5000';
  axios.defaults.headers.post['Content-Type'] = 'application/json';
  axios.defaults.headers.common['x-auth'] = getfromstorage('x-auth');


const { Option } = Select;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;


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


class Askque extends Component {
  state = { visible: false , iconloading: false,toggle:false}

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.setState({ iconloading: true });
        console.log('Received values of form: ', values);
        axios.post('/post_question', {
          "chapter": values.chapter,
          "question": values.question,
          "asked_to":values.radio,
          "subject": values.subject,
          "topic": values.topic
        })
         .then((res)=>{
         if(res.status==201) {
          console.log(res);
          this.setState({
            visible: false,
            iconloading: false
          });
          (function(){
            message.config({
             duration: 2,
           });
            message.success("Question Posted! ");
           })();

         }
         })
         .catch((err)=>{
           console.log(err);
           this.setState({ iconloading: false });
           (function(){
             message.config({
              duration: 5,
            });
             message.error("Ohh..No 🤕 " + err);
            })();
         });
      }
    });
  }

buttontoggle=()=>{
  const newtoggle=!this.state.toggle;
  this.setState({toggle:newtoggle})
}

  showModal = () => {
    this.setState({
      visible: true,
    });

  }

  handleOk = (e) => {
    console.log(e);

  }

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
            <div>
              <Button onClick={this.showModal} style={{borderRadius:"25px",backgroundColor:"#343d46",color:"white"}}>Ask Question</Button>
              <Modal
                style={{top:50}}
                title={         <div className="dailylistitem" style={{height:32,paddingTop:0}}>
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
                    <div key="" style={{height:0}}></div>
               ]}
              >

                <Form onSubmit={this.handleSubmit}>

                  <div style={{width:"100%",height:400}}>
                      <div style={{ display:"flex"}}>
                         <div style={{ margin:"auto" }}>
                             <div >
                               <Form.Item>
                                 {getFieldDecorator('question', {
                                   rules: [{ required: true, message: "Hey! Question can't be empty :)" }],
                                 })(
                                  <div style={{width:900,position:"relative"}}>
                                     <TextArea style={{width:800,paddingTop:10,position:"relative",float:"left",paddingBottom:10,fontSize:24}} placeholder="Ask Your Question Here..." autosize={{ minRows: 2, maxRows: 3 }} />
                                     <div style={{width:100,float:"right",position:"relative",height:93,paddingTop:25}}>
                                        <Tooltip title="Speak Question" placement="right" >
                                           <span><i onClick={this.toggle} className="fas fa-microphone-alt" style={{fontSize:40,paddingLeft:35,addingBottom:0}}></i></span>
                                           <img style={{height:60,width:100,marginTop:"-16px"}} src="https://cdn.dribbble.com/users/82855/screenshots/4302618/cvs4.gif"/>
                                        </Tooltip>
                                     </div>
                                  </div>
                                 )}
                               </Form.Item>

                             </div>

                             <div style={{position:"relative",float:"left",marginTop:30}}>
                               <Form.Item
                                >
                                  {getFieldDecorator('subject', {
                                    rules: [
                                      { required: true, message: 'Ahhh!...Subject is missing!' },
                                    ],
                                  })(
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
                                      <Option value="Maths">Maths</Option>
                                      <Option value="Science">Science</Option>
                                    </Select>
                                  )}
                                </Form.Item>
                             </div>
                             <div style={{position:"relative",float:"left",paddingLeft:150,marginTop:30}}>
                               <Form.Item
                                >
                                  {getFieldDecorator('chapter', {
                                    rules: [
                                      { required: true, message: 'Hmmm...Chapter missing!' },
                                    ],
                                  })(
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
                                      <Option value="CHapter1">Chapter 1</Option>
                                      <Option value="CHapter2">Chapter 2</Option>
                                      <Option value="CHapter3">Chapter 3</Option>
                                    </Select>
                                  )}
                                </Form.Item>
                             </div>
                             <div style={{position:"relative",float:"right",marginTop:30}}>
                                <Form.Item
                                 >
                                   {getFieldDecorator('topic', {
                                     rules: [
                                       { required: true, message: 'Hmmm...Topic missing!' },
                                     ],
                                   })(
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
                                       <Option value="Gravitation">Gravitation</Option>
                                       <Option value="Fluid">Fluid mechanics</Option>
                                       <Option value="Newtons">Newtons laws of motion</Option>
                                     </Select>
                                   )}
                                 </Form.Item>
                             </div>
                         </div>
                      </div>

                      <div style={{width:"100%",paddingTop:10}}>
                        <div style={{ display:"flex"}}>
                           <div style={{ margin:"auto" }}>

                               <div>
                                 <div>
                                   <Form.Item
                                   >
                                     {getFieldDecorator('radio',{
                                       rules: [
                                         { required: true, message: 'Ahh...Please Select Whome you are asking?!' },
                                       ],
                                     })(
                                       <div style={{height:"120px",width:"100%"}}>
                                           <Radio.Group size="large">
                                               <div style={{position:"relative",float:"left",marginTop:20}}>
                                                   <RadioButton style={{width:80,height:1,borderColor:"rgba(255, 0, 0, 0)"}} value="community">
                                                       <div style={{position:"relative",float:"left"}}>
                                                           <Tooltip title="Ask Community Its free!">
                                                              <span><i className="fas fa-user-friends" style={{fontSize:40,paddingLeft:25}}></i></span>
                                                              <b><p style={{paddingTop:10,paddingLeft:2}}>Community</p></b>
                                                           </Tooltip>
                                                       </div>
                                                   </RadioButton>
                                               </div>
                                               <div style={{marginLeft:80,position:"relative",float:"left",marginTop:20}}>
                                                   <RadioButton style={{width:80,height:1,borderColor:"rgba(255, 0, 0, 0)"}} value="teacher">
                                                       <div style={{position:"relative",float:"left"}}>
                                                           <Tooltip title="Ask Teacher Directly">
                                                             <span><i className="fas fa-chalkboard-teacher" style={{fontSize:40,paddingLeft:25,}}></i></span>
                                                             <b><p style={{paddingTop:10,paddingLeft:24}}>Teacher</p></b>
                                                           </Tooltip>
                                                       </div>
                                                   </RadioButton>
                                               </div>
                                           </Radio.Group>
                                        </div>
                                     )}
                                   </Form.Item>
                                 </div>
                               </div>

                           </div>
                        </div>
                      </div>



                  </div>

                  <Form.Item
                  >

                      <div style={{width:"100%",paddingBottom:0,height:52}}>
                        <div style={{position:"relative",width:"25%",float:"right"}}>
                            <Button type="primary" htmlType="submit" loading={this.state.iconloading} style={{borderRadius:"25px",backgroundColor:"#343d46",color:"white",marginLeft:20,position:"relative",float:"right"}} onClick={this.handleOk}>
                               Ask Question
                            </Button>
                            <Button key="back" onClick={this.handleCancel} style={{borderRadius:"25px",position:"relative",float:"right"}}>Cancel</Button>
                        </div>
                        <div style={{position:"relative",width:"50%",float:"right"}}>
                          <div style={{display:"flex"}}>
                             <div style={{margin:"auto"}}>
                                <p> * Choose Whome You Want to Ask ?</p>
                             </div>
                          </div>
                        </div>
                        <div style={{position:"relative",width:"25%",float:"left"}}>
                            <Avatar key="1" style={{position:"relative",float:"left"}} src='https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg' />
                            <Avatar key="2" style={{position:"relative",float:"left"}} src='https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg' />
                            <Avatar key="3" style={{position:"relative",float:"left"}} src='https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg' />
                            <Avatar key="4" style={{position:"relative",float:"left"}} src='https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg' />
                            <b><p style={{paddingTop:5,paddingLeft:14,position:"relative",float:"left"}}>+500 Online</p></b>
                        </div>
                     </div>

                  </Form.Item>


                </Form>

              </Modal>
            </div>

    );
  }
}

const Askquestionmodal = Form.create({ name: 'validate_other' })(Askque);

export default Askquestionmodal;
