import React, { Component } from 'react';
import {
  Upload, message, Button, Icon,
} from 'antd';

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

class Profilepic extends React.Component{
  render(){
    return(
      <Upload {...props}>
         <Button style={{borderRadius:25,marginLeft:"35px",borderColor:"black",zIndex:1}}><i class="fas fa-pencil-alt"></i></Button>
      </Upload>
    )
  }
}

export default Profilepic;
