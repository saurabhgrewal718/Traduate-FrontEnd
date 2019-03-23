import React, { Component } from 'react';
import { Tabs,Input,Modal,Avatar, Button } from 'antd';
import { Select } from 'antd';
import './Science.css';
import {
  Upload, message, Icon,
} from 'antd';
import { Tooltip } from 'antd';

const props = {
  name: 'file',
  action: '//jsonplaceholder.typicode.com/posts/',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

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


class Answermodal extends Component {
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
              <Button onClick={this.showModal}>Answer</Button>
              <Modal
                style={{top:50}}
                title={         <div className="dailylistitem1">
                                     <div className="top1">
                                       <Avatar src="https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg" />
                                     </div>
                                     <div className="top2">
                                        <p>Question By</p>
                                     </div>
                                     <div className="top2">
                                        <b><p>Ankit Sharma</p></b>
                                     </div>
                                     <div className="top7">
                                        <b><p>Physics</p></b>
                                     </div>
                                     <div className="top2">
                                        <b><p>The World Of Magnets</p></b>
                                     </div>
                                     <div className="top2">
                                        <b><p>(North And South Pole)</p></b>
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
                  <Button key="back" onClick={this.handleCancel} style={{borderRadius:"25px"}}>Cancel</Button>,
                  <Button key="submit" type="primary" style={{borderRadius:"25px",backgroundColor:"#343d46",color:"white"}} onClick={this.handleOk}>
                     Submit Answer
                  </Button>,
                  <Avatar style={{position:"relative",float:"left"}} src="https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg" />,
                  <Avatar style={{position:"relative",float:"left"}} src="https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg" />,
                  <Avatar style={{position:"relative",float:"left"}} src="https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg" />,
                  <Avatar style={{position:"relative",float:"left"}} src="https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg" />,
                  <b><p style={{paddingTop:5,paddingLeft:14,position:"relative",float:"left"}}>+500 Marked A Doubt</p></b>
               ]}
              >

                  <div style={{width:"100%",height:400}}>
                      <div style={{ display:"flex"}}>
                         <div style={{ margin:"auto" }}>
                             <div>
                               <p style={{width:900,paddingTop:0,fontSize:20}} > Ask Your Question Here Ask Your Question Here Ask Your Question Here Ask Your Question HereAsk Your Question HereAskAsk Your Question Here</p>
                             </div>
                             <div style={{position:"relative",float:"left",marginTop:10}}>
                               <TextArea style={{width:900,fontSize:20}} placeholder="Write an Answer that kills every doubt..." autosize={{ minRows: 4, maxRows: 6 }} />
                             </div>
                         </div>
                      </div>

                      <div style={{width:"100%",marginTop:50}}>
                        <div style={{ display:"flex"}}>
                           <div style={{ margin:"auto" }}>
                             <div style={{position:"relative",float:"left"}}>
                                 <Upload {...props}>
                                    <Tooltip title="Upload images of Answer!">
                                      <span><i className="fas fa-cloud-upload-alt" style={{fontSize:40,paddingLeft:25}}></i></span>
                                    </Tooltip>
                                     <b><p style={{paddingTop:10,paddingLeft:0}}>Upload Answer</p></b>
                                 </Upload>
                             </div>
                             <div style={{position:"relative",float:"left",paddingLeft:80}}>
                                 <Tooltip title="Link Additional Reads Or Notes">
                                   <span><i className="fas fa-paperclip" style={{fontSize:40,paddingLeft:35,color:"#ff3b3b"}}></i></span>
                                 </Tooltip>
                                 <b><p style={{paddingTop:10,paddingLeft:0,color:"#ff3b3b"}}>Additional Reads</p></b>
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


              </Modal>
            </div>

    );
  }
}

export default Answermodal;
