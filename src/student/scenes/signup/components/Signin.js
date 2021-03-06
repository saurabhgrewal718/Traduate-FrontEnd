import React, { Component } from 'react';
import {
  Form, Icon, Input, Button,message
} from 'antd';
import './Jquery.css'
import {
    getfromstorage,setInStorage,
  } from '../../../utils/Storage';
import axios from 'axios';
import { Spin } from 'antd';
import Card from '../../home/components/card/Card'

// Header Import
// axios.defaults.baseURL = 'http://www.traduate-backend.herokuapp.com';
axios.defaults.headers.post['Content-Type'] = 'application/json';



class HorizontalLoginForm extends React.Component {
  state={
    loading:false,
    response:[]
  }

componentDidMount = () => {
    console.log(this.state.response);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.setState({loading:true});
        console.log('Received values of form: ', values);
        axios.post('http://traduate-backend.herokuapp.com/login', {
         "email":values.email,
         "password":values.password,
       })
       .then((res)=>{
       if(res.status==200) {
         axios.defaults.headers.common['x-auth'] = res.headers['x-auth'];
         setInStorage('x-auth', res.headers['x-auth']);
         this.setState({loading:false});
         let questiondata='';
         questiondata = res.data;
         this.setState({response:questiondata});
         (function(){
             message.success("😍 Logged In");
            })();
         this.props.como.history.push({
            pathname: '/home',
            state: { response: res.data }
          })

       }
       })
       .catch((err)=>{
         console.log(err);
         this.setState({loading:false});
         (function(){
           message.config({
            top: 20,
            duration: 5,
          });
           message.error("Ahh..SNAP..🤕 " + err);
          })();

       });
      }
    });
  }

  render() {
    if (this.state.loading) {
      return   <div className="example">
                <Spin size="large"/>
              </div>
    }
    const { getFieldDecorator } = this.props.form;
    return (
      <div style={{display:"flex"}}>
        <div style={{margin:"auto",paddingTop:25}}>
          <Form layout="inline" onSubmit={this.handleSubmit}>
            <Form.Item>
              {getFieldDecorator('email', {
                rules: [{ required: true, message: 'Please input your Email!' }],
              })(
                <div style={{height:"auto",width:"auto",borderRadius:"50px",borderColor:"#7b7d7b"}}>
                <Input style={{ borderRadius:"50px",borderColor:"#7b7d7b" }} placeholder="Email" />
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
              <div className="loginbutton">
              <Button type="primary" htmlType="submit" style={{borderRadius:"25px",borderColor:'rgba(24,144,255,100)'}} className="login-form-button">
                Log in
              </Button>
              </div>
            </Form.Item>
          </Form>

       </div>
     </div>
    );
  }
}

const Signin = Form.create({ name: 'horizontal_login' })(HorizontalLoginForm);

export default Signin;
