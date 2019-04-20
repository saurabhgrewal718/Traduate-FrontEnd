import React, { Component } from 'react';
import { Tabs,Input,Modal,Avatar, Button,Form } from 'antd';
import { Select } from 'antd';
import './Science.css';
import {
  Upload, message, Icon,
} from 'antd';
import { Tooltip } from 'antd';
import axios from 'axios';
import {
    getfromstorage,setInStorage,removeFromStorage
  } from '../../../../../utils/Storage';

  axios.defaults.baseURL = 'http://localhost:5000';
  axios.defaults.headers.post['Content-Type'] = 'application/json';
  axios.defaults.headers.common['x-auth'] = getfromstorage('x-auth');

const Option = Select.Option;
const { TextArea } = Input;


class Ansmod extends Component {
     state = { visible: false,
        selectedFile:null,
        iconLoading: false,
    }



handleSubmit = (e, questionId) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.setState({ iconloading: true });
        console.log('Received values of form: ', values);
        console.log(typeof questionId);
        axios.post('/post_answer', {
          "answer": values.answer,
          "id":questionId,
        })
         .then((res)=>{
         if(res.status==202) {
          console.log(res);
          this.setState({
            visible: false,
            iconloading: false
          });
          (function(){
            message.config({
             duration: 2,
           });
            message.success("Answer Posted !");
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
      console.log(this.props);
    return (
            <div>
              <Button onClick={this.showModal}>Answer</Button>
                     <Modal
                       style={{top:50}}
                       title={         <div className="dailylistitem1" style={{height:32,paddingTop:0}}>
                                            <div className="top1">
                                              <Avatar src="https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg" />
                                            </div>
                                            <div className="top2">
                                               <b><p>hey</p></b>
                                            </div>
                                            <div className="top7">
                                               <b><p>{this.props.subject}</p></b>
                                            </div>
                                            <div className="top2">
                                               <b><p>{this.props.chapter}</p></b>
                                            </div>
                                            <div className="top2">
                                               <b><p>({this.props.topic})</p></b>
                                            </div>
                                            <div className="top6">
                                               <b><p>10</p></b>
                                            </div>
                                       </div>
                               }
                       width="90%"
                       visible={this.state.visible}
                       onOk={this.handleOk}
                       onCancel={this.handleCancel}
                       footer={[
                          <div key="6"></div>
                      ]}
                     >


                     <Form onSubmit={(event)=>this.handleSubmit(event,this.props.questionId)} style={{padding:0}}>

                     <div style={{width:"100%",height:400}}>
                         <div style={{ display:"flex"}}>
                            <div style={{ margin:"auto" }}>
                                <div style={{display:"flex"}}>
                                  <div style={{margin:"auto"}}>
                                    <b><p style={{width:900,paddingTop:0,fontSize:20}} > {this.props.question} </p></b>
                                  </div>
                                </div>
                                <div style={{position:"relative",float:"left",marginTop:10}}>
                                <Form.Item>
                                  {getFieldDecorator('answer', {
                                    rules: [{ required: true, message: "Answer can't be empty :)" }],
                                  })(
                                    <TextArea style={{width:900,fontSize:20}} placeholder="Write an Answer that kills every doubt..." autosize={{ minRows: 4, maxRows: 6 }} />
                                  )}
                                </Form.Item>
                                </div>
                            </div>
                         </div>

                         <div style={{width:"100%",marginTop:50}}>
                           <div style={{ display:"flex"}}>
                              <div style={{ margin:"auto" }}>
                                <div style={{position:"relative",float:"left"}}>
                                   <Tooltip title="Upload Image of Answer!  💌 ">
                                     <Upload {...{
                                       name: 'image',
                                        action: 'http://localhost:5000/post_answer',
                                        headers: {
                                          'x-auth': getfromstorage('x-auth')
                                        },
                                        data: {
                                         'id':this.props.questionId
                                       },
                                        onChange(info) {
                                          if (info.file.status !== 'uploading') {
                                            console.log(info.file);

                                          }
                                          if (info.file.status === 'done') {
                                            message.success(`${info.file.name} file uploaded successfully`);
                                          } else if (info.file.status === 'error') {
                                            message.error(`${info.file.name} file upload failed.`);
                                          }
                                        }
                                     }

                                         }>
                                        <span><i className="fas fa-cloud-upload-alt"  style={{fontSize:40,paddingLeft:25,color:"#CAEBF2"}}></i></span>
                                     </Upload>
                                    <b><p style={{paddingTop:10,paddingLeft:0}}>Upload Answer</p></b>
                                  </Tooltip>
                                </div>
                                <div style={{position:"relative",float:"left",paddingLeft:80}}>
                                    <Tooltip title="Coming soon!  😅 ">
                                      <span><i className="fas fa-paperclip" style={{fontSize:40,paddingLeft:35,color:"#CAEBF2"}}></i></span>
                                    </Tooltip>
                                    <b><p style={{paddingTop:10,paddingLeft:0}}>Additional Reads</p></b>
                                </div>
       {/*                             <div style={{position:"relative",float:"left",paddingLeft:80}}>
                                    <Tooltip title="Write Answers Directly Onscreen!">
                                      <span><i className="far fa-edit" style={{fontSize:40,paddingLeft:30}}></i></span>
                                    </Tooltip>
                                    <b><p style={{paddingTop:10,paddingLeft:14}}>Use Board</p></b>
                                </div>
       */}
                              </div>
                           </div>
                         </div>

                     </div>

                     <Form.Item
                     >

                         <div style={{width:"100%",paddingBottom:0,height:32,paddingTop:10}}>
                           <div style={{position:"relative",width:"50%",float:"right"}}>
                               <Button type="primary" htmlType="submit" loading={this.state.iconloading} style={{borderRadius:"25px",backgroundColor:"#343d46",marginLeft:20,position:"relative",float:"right",color:"white"}} onClick={this.handleOk}>
                                  Submit Answer
                               </Button>
                               <Button key="back" onClick={this.handleCancel} style={{borderRadius:"25px",position:"relative",float:"right"}}>Cancel</Button>
                           </div>
                           <div style={{position:"relative",width:"50%",float:"left"}}>
                             {/*<Avatar style={{position:"relative",float:"left"}} src="https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg" />
                             <b><p style={{paddingTop:5,paddingLeft:14,position:"relative",float:"left"}}>hey</p></b>*/}
                           </div>
                        </div>

                     </Form.Item>


                     </Form>


                     </Modal>


            </div>

    );
  }
}

const Answermodal = Form.create({ name: 'validate_other' })(Ansmod);

export default Answermodal;
