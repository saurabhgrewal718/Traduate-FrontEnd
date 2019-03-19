import React from 'react';
import {
  Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete,
} from 'antd';

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;


class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  }

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };

    return (
      <div>
          <div style={{display:"flex"}}>
            <div style={{margin:"auto",marginTop:50}}>
              <div><p style={{fontFamily:"Questrial"}}>Register to be Always curious</p></div>
            </div>
          </div>
          <div style={{display:"flex"}}>
            <div style={{margin:"auto",marginTop:20}}>
                  <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                    <Form.Item
                    >
                      {getFieldDecorator('fullname', {
                        rules: [{
                          required: true, message: 'Please input your Full Name!',
                        }],
                      })(
                        <Input style={{borderRadius:"50px",borderColor:"#7b7d7b",width:"250px"}} placeholder="Full Name"/>
                      )}
                    </Form.Item>
                    <Form.Item
                    >
                      {getFieldDecorator('emailphone', {
                        rules: [{
                          type: 'email', message: 'The input is not valid E-mail!',
                        }, {
                          required: true, message: 'Please input your E-mail or phone',
                        }],
                      })(
                        <Input style={{borderRadius:"50px",borderColor:"#7b7d7b",width:"250px"}} placeholder="Email or Phone"/>
                      )}
                    </Form.Item>
                    <Form.Item
                    >
                      {getFieldDecorator('password', {
                        rules: [{
                          required: true, message: 'Please input your password!',
                        }, {
                          validator: this.validateToNextPassword,
                        }],
                      })(
                        <Input style={{borderRadius:"50px",borderColor:"#7b7d7b",width:"250px"}} placeholder="Password" type="password" />
                      )}
                    </Form.Item>
                    <Form.Item
                    >
                      {getFieldDecorator('confirm', {
                        rules: [{
                          required: true, message: 'Please confirm your password!',
                        }, {
                          validator: this.compareToFirstPassword,
                        }],
                      })(
                        <Input style={{borderRadius:"50px",borderColor:"#7b7d7b",width:"250px"}} placeholder="Confirm Password" type="password" onBlur={this.handleConfirmBlur} />
                      )}
                    </Form.Item>
                    <Form.Item {...tailFormItemLayout}>
                      <Button type="primary" htmlType="submit" style={{borderRadius:"50px",borderColor:"black"}}>Sign Up</Button>
                    </Form.Item>
                  </Form>

            </div>
          </div>

       </div>
    );
  }
}

const Signup = Form.create({ name: 'register' })(RegistrationForm);

export default Signup;
