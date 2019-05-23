import React, { Component } from 'react';
import { Tabs,Input,Modal,Avatar, Button,Tooltip,Form } from 'antd';
import { Select } from 'antd';
import { Radio } from 'antd';
import {Link} from 'react-router-dom';
import Item2 from './Item2'
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
  state = {
    subject: '',
    chapter: '',
    topic:''
  }


  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);

    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        console.log(this.props);
        this.setState({subject:values.subject, chapter:values.chapter,topic:values.topic}, ()=>{
        console.log(this.state);

        setInStorage('secondpage', values);
        this.props.compo.history.push('/setup/last');

        });

      }

    });
  }

  componentDidUpdate(){
    (()=>{
      return <Item2 yo={this.state}/>

    })();
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    return (

      <div>
            <div className="content">
               <div style={{position:"relative",float:"left",width:"50%",height:"auto"}}>
                  <img src="http://dribbble.s3.amazonaws.com/users/42716/screenshots/4151582/scribbles-800x600_4.gif" alt="Learn with Traduate" style={{height:580}}/>
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
                                    {getFieldDecorator('class', {
                                      rules: [
                                        { required: true, message: 'Ahhh!...Class is missing!' },
                                      ],
                                    })(
                                      <Select
                                        showSearch
                                        style={{ width: 200 }}
                                        placeholder="My Class"
                                        optionFilterProp="children"
                                        onChange={handleChange}
                                        onFocus={handleFocus}
                                        onBlur={handleBlur}
                                        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                                      >
                                        <Option value="8">Eighth</Option>
                                        <Option value="9">Nineth</Option>
                                        <Option value="10">Tenth</Option>
                                      </Select>
                                    )}
                                  </Form.Item>
                               </div>
                               <div style={{marginTop:40}}>
                                 <Form.Item
                                  >
                                    {getFieldDecorator('school', {
                                      rules: [
                                        { required: true, message: '...School name missing!' },
                                      ],
                                    })(
                                      <Select
                                        showSearch
                                        style={{ width: 200}}
                                        placeholder="My School"
                                        optionFilterProp="children"
                                        onChange={handleChange}
                                        onFocus={handleFocus}
                                        onBlur={handleBlur}
                                        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                                      >
                                        <Option value="KVS">KVS</Option>
                                        <Option value="DAV">DAV</Option>
                                        <Option value="DPS">DPS</Option>
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
                                         placeholder="My City"
                                         optionFilterProp="children"
                                         onChange={handleChange}
                                         onFocus={handleFocus}
                                         onBlur={handleBlur}
                                         filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                                       >
                                         <Option value="Delhi">Delhi</Option>
                                         <Option value="Mumbai">Mumbai</Option>
                                         <Option value="Vadodara">Vadodara</Option>
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
                                  <Button type="primary" htmlType="submit" style={{borderRadius:"25px",backgroundColor:"#343d46",color:"white",marginTop:30}} >
                                     Next
                                  </Button>
                              </div>
                            </div></div>

                        </div>

                    </Form.Item>

                  </Form>

                 <div style={{display:"none"}}></div>


               </div>
            </div>


      </div>



    );
  }
}


const Item1 = Form.create({ name: 'validate_other' })(Item);

export default Item1;
