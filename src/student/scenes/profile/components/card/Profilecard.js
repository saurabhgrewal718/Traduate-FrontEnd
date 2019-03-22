import React, { Component } from 'react';
import { Layout } from 'antd';
import { Tabs, Progress,Button,Tooltip } from 'antd';
import { Avatar,Upload,message } from 'antd';
import Bookread from './components/Bookread'

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

const {Content} = Layout;

class Profilecard extends Component {
  render() {
    return (
      <div>

              <div className="containertop">
                 <div className="containertop1">
                    <img src="https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg" alt="Avatar" style={{width:"80px",borderRadius: "50%"}}/>
                 </div>
                 <div className="containertop2">
                    <div style={{position:"relative",float:"right",marginTop:25}}>
                        <Upload {...props}>
                           <Tooltip title="Change Your Profile Picture">
                             <span><Button style={{borderRadius:25,borderColor:"black",zIndex:1}}><i class="fas fa-pencil-alt"></i></Button></span>
                           </Tooltip>
                        </Upload>
                    </div>
                    <div style={{position:"relative",width:"100%",paddingTop:10}}>
                        <b><p style={{marginBottom: 0,paddingTop:10}}>Ankit Sharma</p></b>
                    </div>
                    <div style={{position:"relative",width:"100%",paddingTop:2}}>
                        <b><p style={{marginBottom: 0,color:"#FFA07A"}}>GENIUS</p></b>
                    </div>
                 </div>
              </div>

              <div style={{width:"100%",height:100,marginTop:40}}>
                  <div className="container21">
                     <div className="container211"><b><p>Books Read</p></b></div>
                     <div className="container212"><b><Bookread/></b></div>
                  </div>
              </div>

     </div>
    );
  }
}

export default Profilecard;
