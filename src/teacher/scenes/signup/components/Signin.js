import React, { Component } from 'react';
import {
  Form, Icon, Input, Button,
} from 'antd';
import {
    getfromstorage,setInStorage,
  } from '../../../utils/Storage';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000';
axios.defaults.headers.post['Content-Type'] = 'application/json';


class HorizontalLoginForm extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        axios.post('/login', {
         "username":values.username,
         "password":values.password,
       })
       .then((res)=>{
       if(res.status==200) {
         axios.defaults.headers.common['x-auth'] = res.headers['x-auth'];
         console.log(res);
         console.log("Headers: " +" "+ res.headers['x-auth']);
         setInStorage('x-auth', res.headers['x-auth']);

       }
       })
       .catch((err)=>{
         console.log(err);
       });
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div style={{display:"flex"}}>
        <div style={{margin:"auto",paddingTop:25}}>
          <Form layout="inline" onSubmit={this.handleSubmit}>
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <div style={{height:"auto",width:"auto",borderRadius:"50px",borderColor:"#7b7d7b"}}>
                <Input style={{ borderRadius:"50px",borderColor:"#7b7d7b" }} placeholder="Username" />
                </div>
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input style={{ borderRadius:"50px",borderColor:"#7b7d7b" }} type="password" placeholder="Password" />
              )}
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" style={{borderRadius:"25px",borderColor:'rgba(24,144,255,100)'}} className="login-form-button">
                Log in
              </Button>
            </Form.Item>
          </Form>
       </div>
     </div>
    );
  }
}

const Signin = Form.create({ name: 'horizontal_login' })(HorizontalLoginForm);

export default Signin;
