import React, { Component } from 'react';
import { Tabs,Input,Modal,Avatar, Button,Tooltip,Form } from 'antd';
import { Select } from 'antd';
import { Radio } from 'antd';
import axios from 'axios';
import {
    getfromstorage,setInStorage,
  } from '../../../../../utils/Storage';
  import Profilepic from './Profilepic'

axios.defaults.baseURL = 'http://localhost:5000';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['x-auth'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YzkxMjBhMTcyM2VlMTA0MjUyMmQ5YjMiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTUzMDE0OTQ1fQ._j6CGxc5O-1t1FzGNolfalXBoxqxvyI-49dfhxPy8TA';

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


class Editprofile extends Component {
  state = { visible: false }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);

      }
    });
  }


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
              <Tooltip title="Edit Profile">
                <span>
                   <Button onClick={this.showModal} style={{borderRadius:25,marginTop:"-15px",borderColor:"black",zIndex:1}}><i class="fas fa-user-edit"></i></Button>
                </span>
              </Tooltip>

              <Modal
                style={{top:50}}
                title={ <div key="" style={{height:0}}></div>}
                width="90%"
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                footer={[
                    <div key="" style={{height:0}}></div>
               ]}
              >

                  <div style={{width:"100%",height:400,backgroundColor:"grey"}}>

                            <div style={{position:"relative",float:"left",width:"50%",backgroundColor:"pink"}} ><div style={{display:"flex"}}><div style={{margin:"auto"}}>

                                 <div className="containertop">
                                    <div className="containertop1">
                                       <img src="https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg" alt="Avatar" style={{width:"80px",borderRadius: "50%"}}/>
                                    </div>
                                    <div className="containertop2">
                                       <div style={{position:"relative",float:"right",marginTop:25}}>
                                           <Profilepic/>
                                       </div>
        {/*                               <div style={{position:"relative",width:"100%",paddingTop:10}}>
                                           <b><p style={{marginBottom: 0,paddingTop:10}}>Ankit Sharma</p></b>
                                       </div>
                                       <div style={{position:"relative",width:"100%",paddingTop:2}}>
                                           <b><p style={{marginBottom: 0,color:"#FFA07A"}}>GENIUS</p></b>
                                       </div>
        */}
                                    </div>
                                 </div>

                            </div></div></div>


                            <div style={{position:"relative",float:"right",width:"50%",backgroundColor:"green"}} >

                               <p style={{padding:30,fontSize:30}}>Personal things to change or costomise</p>

                            </div>

                  </div>


              </Modal>
            </div>

    );
  }
}


export default Editprofile;
