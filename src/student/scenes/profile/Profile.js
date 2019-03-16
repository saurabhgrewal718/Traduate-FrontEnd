import React, { Component } from 'react';
import { Layout } from 'antd';
import './Profile.scss';
import { Tabs, Progress,Button,Tooltip } from 'antd';
import { Avatar } from 'antd';
import Card1 from './components/card1/Card1'
import Editprofile from './components/card1/components/Editprofile'

const TabPane = Tabs.TabPane;
const operations = <Button>Ask Question</Button>;
const {Content} = Layout;

class Profile extends Component {
  render() {
    return (
      <div>
        <div className="card">
          <div className="container0">


              <div className="containertop">
                 <div className="containertop1">
                    <img src="https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg" alt="Avatar" style={{width:"80px",borderRadius: "50%"}}/>
                 </div>
                 <div className="containertop2">
                    <div style={{position:"relative",float:"right",marginTop:25}}>
                        <Tooltip title="Edit Profile">
                          <span><Editprofile/></span>
                        </Tooltip>
                    </div>
                    <div style={{position:"relative",width:"100%",paddingTop:10}}>
                        <b><p style={{marginBottom: 0,paddingTop:10}}>Ankit Sharma</p></b>
                    </div>
                    <div style={{position:"relative",width:"100%",paddingTop:2}}>
                        <b><p style={{marginBottom: 0,color:"#FFA07A"}}>GENIUS</p></b>
                    </div>
                 </div>
              </div>


          </div>
        </div>

        <div className="card1">
          <div className="container1">
             <Card1/>
          </div>
        </div>

        <div className="card2">
          <div className="container2">
               <div className="container21">
                  <div className="container211"><b><p>Weekly Goals (till 19/8/19)</p></b></div>
                  <div className="container212"><b><i class="fa fa-bolt" aria-hidden="true"></i></b></div>
               </div>

               <div className="container22">
                   <div style={{display:"flex"}}>
                       <div style={{margin:"auto"}}>
                           <div style={{ width: 170 }}>
                             <p style={{fontWeight:"bold"}}>Physics <Progress percent={30} size="small" /> </p>
                             <p style={{fontWeight:"bold"}}>Chemistry <Progress percent={60} size="small" status="active" /></p>
                             <p style={{fontWeight:"bold"}}>Mathematics <Progress percent={40} size="small" status="active" /></p>
                             <p style={{fontWeight:"bold"}}>Biology <Progress percent={80} size="small" status="active" /></p>
                           </div>
                        </div>
                    </div>

                    <div style={{display:"flex"}}>
                       <div style={{margin:"auto",marginTop:20}}>
                          <Button>Study Plan</Button>
                       </div>
                    </div>

              </div>

          </div>
        </div>

     </div>
    );
  }
}

export default Profile;
