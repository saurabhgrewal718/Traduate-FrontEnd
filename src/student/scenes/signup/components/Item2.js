import React, { Component } from 'react';
import { Tabs,Input,Modal,Avatar, Button,Tooltip,Form } from 'antd';
import { Select } from 'antd';
import {
   DatePicker, TimePicker
} from 'antd';

const { MonthPicker, RangePicker } = DatePicker;

const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

function handleBlur() {
  console.log('blur');
}

function handleFocus() {
  console.log('focus');
}


class Item extends Component {
  handleSubmit = (e) => {
    e.preventDefault();

    this.props.form.validateFields((err, fieldsValue) => {
      if (err) {
        return;
      }

      // Should format date value before submit.
      const rangeValue = fieldsValue['range-picker'];
      const rangeTimeValue = fieldsValue['range-time-picker'];
      const values = {
        ...fieldsValue,
        'date_of_birth': fieldsValue['date_of_birth'].format('YYYY-MM-DD'),
      };
      console.log('Received values of form: ', values);
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const config = {
      rules: [{ type: 'object', required: true, message: 'Please select time!' }],
    };
    return (

      <div>

            <div className="content">
               <div style={{position:"relative",float:"left",width:"50%",height:"580px"}}>
                  <img src="https://cdn.dribbble.com/users/1848412/screenshots/4846657/branding_dribbble.gif" alt="Learn with Traduate" style={{height:"580px"}}/>
               </div>
               <div style={{position:"relative",float:"right",width:"50%",height:"580px"}}>
                  <div style={{paddingTop:40}}><div style={{display:"flex"}}><div style={{margin:"auto"}}><h1 style={{fontFamily:"Questrial"}}>Final Step!</h1></div></div></div>

                  <Form onSubmit={this.handleSubmit}>

                    <div style={{width:"100%",height:"auto"}}>
                        <div style={{ display:"flex"}}>
                           <div style={{ margin:"auto" }}>


                               <div style={{marginTop:40}}>
                                 <div style={{position:"relative",float:"right",zIndex:1}}>
                                   <Form.Item
                                    >
                                    {getFieldDecorator('date_of_birth', config)(
                                      <DatePicker style={{width:200}}/>
                                    )}
                                    </Form.Item>
                                  </div>
                                  <div style={{position:"relative",float:"left"}}>
                                     <i class="fas fa-birthday-cake" style={{fontSize:24,marginTop:7,marginRight:20}}></i>
                                  </div>
                               </div>
                               <div style={{height:40}}></div>
                               <div style={{marginTop:40}}>
                                 <Form.Item
                                  >
                                    {getFieldDecorator('username', {
                                      rules: [
                                        { required: true, message: '...be Unieque with username' },
                                      ],
                                    })(
                                      <Select
                                        showSearch
                                        style={{ width: 244}}
                                        placeholder="Select a Username"
                                        optionFilterProp="children"
                                        onChange={handleChange}
                                        onFocus={handleFocus}
                                        onBlur={handleBlur}
                                        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                                      >
                                        <Option value="1">Chapter 1</Option>
                                        <Option value="2">Chapter 2</Option>
                                        <Option value="3">Chapter 3</Option>
                                      </Select>
                                    )}
                                  </Form.Item>
                               </div>

                               <div style={{marginTop:40}}>
                               <Form.Item
                               >
                                 {getFieldDecorator('phone', {
                                   rules: [{ required: true, message: 'Please input your phone number!' }],
                                 })(
                                   <Input placeholder="Phone number" style={{ width: '100%' }} />
                                 )}
                               </Form.Item>
                              </div>
                           </div>
                        </div>

                    </div>

                    <Form.Item
                    >

                        <div style={{width:"100%",paddingBottom:0,height:52}}>

                            <div style={{display:"flex"}}><div style={{margin:"auto"}}>
                              <div >
                                  <Button type="primary" htmlType="submit" style={{borderRadius:"25px",backgroundColor:"#343d46",color:"white",marginTop:40}} onClick={this.handleOk}>
                                     Submit
                                  </Button>
                              </div>
                            </div></div>

                            <div style={{paddingTop:40}}><div style={{display:"flex"}}><div style={{margin:"auto"}}><h1 style={{fontFamily:"Questrial",fontSize:16}}>Read and Learn Better With Traduate!</h1></div></div></div>

                        </div>

                    </Form.Item>

                  </Form>

               </div>
            </div>




      </div>

    );
  }
}

const Item2 = Form.create({ name: 'validate_other' })(Item);
export default Item2;
