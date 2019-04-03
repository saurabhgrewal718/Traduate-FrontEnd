import React, { Component } from 'react';
import { Tabs,Input,Modal,Avatar, Button } from 'antd';
import { Select } from 'antd';
import { Radio } from 'antd';
import { Transfer } from 'antd';
import moment from 'moment';
import { DatePicker } from 'antd';
import { Checkbox, Row, Col } from 'antd';

function onChange(checkedValues) {
  console.log('checked = ', checkedValues);
}


const { MonthPicker, RangePicker } = DatePicker;

function range(start, end) {
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
}

function disabledDate(current) {
  // Can not select days before today and today
  return current && current < moment().endOf('day');
}

function disabledDateTime() {
  return {
    disabledHours: () => range(0, 24).splice(4, 20),
    disabledMinutes: () => range(30, 60),
    disabledSeconds: () => [55, 56],
  };
}

function disabledRangeTime(_, type) {
  if (type === 'start') {
    return {
      disabledHours: () => range(0, 60).splice(4, 20),
      disabledMinutes: () => range(30, 60),
      disabledSeconds: () => [55, 56],
    };
  }
  return {
    disabledHours: () => range(0, 60).splice(20, 4),
    disabledMinutes: () => range(0, 31),
    disabledSeconds: () => [55, 56],
  };
}


const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

const Option = Select.Option;

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

class Studyplanmodal extends Component {
  state = {
    visible: false
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
                <Button onClick={this.showModal} style={{borderRadius:"25px",backgroundColor:"#343d46",color:"white"}}>Study Plan</Button>
                <Modal
                  style={{top:50}}
                  title={         <div className="dailylistitem">
                                       <div className="top1">
                                         <Avatar src="https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg" />
                                       </div>
                                       <div className="top2">
                                          <b><p>Ankit Sharma</p></b>
                                       </div>
                                       <div className="top6">
                                           <RangePicker
                                             style={{color:"black"}}
                                             disabledDate={disabledDate}
                                             disabledTime={disabledRangeTime}
                                             format="DD-MM-YYYY "
                                           />
                                       </div>
                                   </div>
                          }
                  width="90%"
                  visible={this.state.visible}
                  onOk={this.handleOk}
                  onCancel={this.handleCancel}
                  footer={[
                    <Button key="back"  style={{borderRadius:"25px"}} onClick={this.handleCancel}>Cancel</Button>,
                    <Button key="submit" style={{borderRadius:"25px",backgroundColor:"#343d46",color:"white"}} onClick={this.handleOk}>
                       Save My Study Plan
                    </Button>
                 ]}
                >

                <div style={{height:300,width:"100%",position:"relative"}}>
                    <div style={{height:300,width:"50%",position:"relative",float:"left"}}>
                        <Checkbox.Group style={{ width: '50%' }} onChange={onChange}>
                          <Row>
                            <Col span={24}><Checkbox value="A">A</Checkbox></Col>
                            <Col span={24}><Checkbox value="B">B</Checkbox></Col>
                            <Col span={24}><Checkbox value="C">C</Checkbox></Col>
                            <Col span={24}><Checkbox value="D">D</Checkbox></Col>
                            <Col span={24}><Checkbox value="E">E</Checkbox></Col>
                          </Row>
                        </Checkbox.Group>
                    </div>

                    <div style={{height:300,width:"50%",position:"relative",float:"right"}}>
                        <Checkbox.Group style={{ width: '50%' }} onChange={onChange}>
                          <Row><b>This is chapter number</b></Row>
                          <Row>
                            <Col span={24}><Checkbox value="A">The challemging way of the things that change </Checkbox></Col>
                            <Col span={24}><Checkbox value="B">The challemging way of the things that change </Checkbox></Col>
                            <Col span={24}><Checkbox value="C">The challemging way of the things that change </Checkbox></Col>
                            <Col span={24}><Checkbox value="D">The challemging way of the things that change </Checkbox></Col>
                            <Col span={24}><Checkbox value="E">The challemging way of the things that change </Checkbox></Col>
                          </Row>
                        </Checkbox.Group>
                    </div>
                </div>



                </Modal>
              </div>

      );
    }
  }



export default Studyplanmodal;
