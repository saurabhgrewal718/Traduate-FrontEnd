import React, { Component } from 'react';
import { Tabs,Input,Modal,Avatar, Button } from 'antd';
import { Select } from 'antd';
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


class Editprofile extends Component {
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
              <Button onClick={this.showModal} style={{borderRadius:25,borderColor:"black",zIndex:1}}><i class="fa fa-pencil" aria-hidden="true"></i></Button>
              <Modal
                style={{top:50,zIndex:2}}
                title={<div>
                         <div style={{position:"relative",float: "left"}}>
                             <div style={{position:"relative",float:"left",paddingTop:10}}>
                                 <b><p style={{marginBottom: 0,paddingTop:10}}>Edit Profile</p></b>
                             </div>
                            <div style={{position:"relative",float:"left",paddingTop:10}}>
                                <b><p style={{marginBottom: 0,paddingTop:10,marginLeft:30}}>Ankit Sharma</p></b>
                            </div>
                            <div style={{position:"relative",float:"left",paddingTop:10}}>
                                <b><p style={{marginBottom: 0,color:"#FFA07A",paddingTop:10,marginLeft:30}}>GENIUS</p></b>
                            </div>
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
                     Save Changes
                  </Button>
               ]}
              >

                  <div style={{width:"100%",height:400}}>
                      <div style={{ display:"flex"}}>
                         <div style={{ margin:"auto" }}>
                             <div>

                               <div style={{position:"relative",float: "left",paddingTop:25,marginRight:20}}>
                               <Upload {...props}>
                                  <Tooltip title="Change Your Profile Picture">
                                    <span><Button style={{borderRadius:25,borderColor:"black",zIndex:1}}><i class="fas fa-pencil-alt"></i></Button></span>
                                  </Tooltip>
                               </Upload>
                               </div>
                               <div style={{position:"relative",float: "left"}}>
                                  <img src="https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg" alt="Avatar" style={{width:"80px",borderRadius: "50%"}}/>
                               </div>

                             </div>
                         </div>
                      </div>

                      <div style={{width:"100%",marginTop:50}}>
                        <div style={{ display:"flex"}}>
                           <div style={{ margin:"auto" }}>
                             <b><p style={{fontSize:20}}>Earned Badges!</p></b>
                             <div style={{position:"relative",float:"left"}}>
                                 <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/54eb1256534229.59b2492202982.png" alt="Avatar" style={{width:"40px",height:"40px",borderRadius: "50%"}}/>
                             </div>
                             <div style={{position:"relative",float:"left",paddingLeft:40}}>
                                 <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/54eb1256534229.59b2492202982.png" alt="Avatar" style={{width:"40px",height:"40px",borderRadius: "50%"}}/>
                             </div>
                             <div style={{position:"relative",float:"left",paddingLeft:40}}>
                                 <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/54eb1256534229.59b2492202982.png" alt="Avatar" style={{width:"40px",height:"40px",borderRadius: "50%"}}/>
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

export default Editprofile;
