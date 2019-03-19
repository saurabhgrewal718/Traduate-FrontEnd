import React, { Component } from 'react';
import {
  Form, Icon, Input, Button,
} from 'antd';


function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class HorizontalLoginForm extends React.Component {
  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const {
      getFieldDecorator, getFieldsError, getFieldError, isFieldTouched,
    } = this.props.form;

    // Only show error after a field is touched.
    const userNameError = isFieldTouched('userName') && getFieldError('userName');
    const passwordError = isFieldTouched('password') && getFieldError('password');
    return (
      <div style={{display:"flex"}}>
        <div style={{margin:"auto",paddingTop:25}}>
          <Form layout="inline" onSubmit={this.handleSubmit}>
            <Form.Item
              validateStatus={userNameError ? 'error' : ''}
              help={userNameError || ''}
            >
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input style={{borderRadius:"50px",borderColor:"#7b7d7b"}} placeholder="Username" />
              )}
            </Form.Item>
            <Form.Item
              validateStatus={passwordError ? 'error' : ''}
              help={passwordError || ''}
            >
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input style={{borderRadius:"50px",borderColor:"#7b7d7b"}} type="password" placeholder="Password" />
              )}
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                disabled={hasErrors(getFieldsError())}
                style={{borderRadius:"25px",borderColor:'rgba(24,144,255,100)'}}
              >
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
