import React, { Component } from 'react';
import { Tabs,Input,Modal,Avatar, Button,Tooltip,Form } from 'antd';
import { Select } from 'antd';
import { Radio } from 'antd';
import {Link} from 'react-router-dom'
import Teachersign2 from './Teachersign2'
import {
    getfromstorage,setInStorage,
  } from '../../../utils/Storage';

const { Option } = Select;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;


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



class Item extends Component {

      handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);

        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
            setInStorage('secondpage', values);
            this.props.compo.history.push('./last');
          }
        });
      }


 render() {
    const { getFieldDecorator } = this.props.form;
    return (

      <div>

            <div className="content">
               <div style={{position:"relative",float:"left",width:"50%",height:"auto"}}>
                  <img src="https://cdn.dribbble.com/users/998555/screenshots/2534709/bonus_animation.gif" alt="Learn with Traduate" style={{height:580}}/>
               </div>

               <div style={{position:"relative",float:"right",width:"50%",height:580}}>
                 <div style={{paddingTop:40}}><div style={{display:"flex"}}><div style={{margin:"auto"}}><h1 style={{fontFamily:"Questrial"}}>Let's know each other better !😃</h1></div></div></div>

                  <Form onSubmit={this.handleSubmit}>

                    <div style={{width:"100%",height:"auto"}}>
                        <div style={{ display:"flex"}}>
                           <div style={{ margin:"auto" }}>
                               <div>

                               </div>

                               <div style={{marginTop:40}}>
                                 <Form.Item
                                  >
                                    {getFieldDecorator('subject', {
                                      rules: [
                                        { required: true, message: 'Ahhh!...Subject is missing!' },
                                      ],
                                    })(
                                      <Select
                                        showSearch
                                        style={{ width: 200 }}
                                        placeholder="Subject I Teach!"
                                        optionFilterProp="children"
                                        onChange={handleChange}
                                        onFocus={handleFocus}
                                        onBlur={handleBlur}
                                        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                                      >
                                        <Option value="Physics">Physics</Option>
                                        <Option value="Chemistry">Chemistry</Option>
                                        <Option value="Mathematics">Mathematics</Option>
                                      </Select>
                                    )}
                                  </Form.Item>
                               </div>
                               <div style={{marginTop:40}}>
                                 <Form.Item
                                  >
                                    {getFieldDecorator('class', {
                                      rules: [
                                        { required: true, message: '...Which class you Love teaching!' },
                                      ],
                                    })(
                                      <Select
                                        showSearch
                                        style={{ width: 200}}
                                        placeholder="Class I Teach"
                                        optionFilterProp="children"
                                        onChange={handleChange}
                                        onFocus={handleFocus}
                                        onBlur={handleBlur}
                                        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                                      >
                                        <Option value="Nineth">Nineth (9)</Option>
                                        <Option value="Tenth">Tenth (10)</Option>
                                        <Option value="Both">Both</Option>
                                      </Select>
                                    )}
                                  </Form.Item>
                               </div>
                               <div style={{marginTop:40}}>
                                  <Form.Item
                                   >
                                     {getFieldDecorator('city', {
                                       rules: [
                                         { required: true, message: '...City missing!' },
                                       ],
                                     })(
                                       <Select
                                         showSearch
                                         style={{ width: 200 }}
                                         placeholder="I Live in ...City"
                                         optionFilterProp="children"
                                         onChange={handleChange}
                                         onFocus={handleFocus}
                                         onBlur={handleBlur}
                                         filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                                       >
                                         <Option value="Delhi">Delhi</Option>
                                         <Option value="Rohtak">Rohtak</Option>
                                         <Option value="Gurugram">Gurugram</Option>
                                       </Select>
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
                                <Button type="primary" htmlType="submit" style={{borderRadius:"25px",backgroundColor:"#343d46",color:"white",marginTop:30}}>Next</Button>
                              </div>
                            </div></div>

                        </div>

                    </Form.Item>

                  </Form>

               </div>
            </div>


      </div>



    );
  }
}


const Teachersign1 = Form.create({ name: 'validate_other' })(Item);

export default Teachersign1;
