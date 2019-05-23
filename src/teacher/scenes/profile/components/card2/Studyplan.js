import React, { Component } from 'react';
import { Layout } from 'antd';
import { Tabs, Progress,Button,Tooltip } from 'antd';
import { Avatar,message } from 'antd';
import Studyplanmodal from './Studyplanmodal'

const TabPane = Tabs.TabPane;
const {Content} = Layout;

class Studyplan extends Component {
  render() {
    return (
      <div>
               <div className="container21">
                  <div className="container211"><b><p>Weekly Goals (till 19/8/19)</p></b></div>
                  <div className="container212"><b><i className="fa fa-bolt" aria-hidden="true"></i></b></div>
               </div>

               <div className="container22">
                   <div style={{display:"flex"}}>
                       <div style={{margin:"auto"}}>
                           <div style={{ width: 170 }}>
                             <div><p style={{fontWeight:"bold"}}>Physics <span><Progress percent={30} size="small" /></span> </p></div>
                             <div><p style={{fontWeight:"bold"}}>Chemistry <span><Progress percent={60} size="small" status="active" /></span></p></div>
                             <div><p style={{fontWeight:"bold"}}>Mathematics <span><Progress percent={40} size="small" status="active" /></span></p></div>
                             <div><p style={{fontWeight:"bold"}}>Biology <span><Progress percent={80} size="small" status="active" /></span></p></div>
                           </div>
                        </div>
                    </div>

                    <div style={{display:"flex"}}>
                       <div style={{margin:"auto",marginTop:20}}>
                          <Studyplanmodal/>
                       </div>
                    </div>

              </div>

     </div>
    );
  }
}

export default Studyplan;
