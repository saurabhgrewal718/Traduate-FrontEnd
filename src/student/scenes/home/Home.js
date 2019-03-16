import React, { Component } from 'react';
import './Home.scss';
import { Layout } from 'antd';
import { Tabs, Button,Tooltip } from 'antd';
import { Avatar } from 'antd';
import Card1 from './components/card1/Card1'

const TabPane = Tabs.TabPane;
const operations = <Button>Ask Question</Button>;
const {Content} = Layout;

class Home extends Component {
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
                  <div style={{position:"relative",width:"100%",paddingTop:10,paddingLeft:10}}>
                      <b><p style={{marginBottom: 0,paddingTop:10}}>Ankit Sharma</p></b>
                  </div>
                  <div style={{position:"relative",width:"100%",paddingTop:2,paddingLeft:10}}>
                      <b><p style={{marginBottom: 0,color:"#FFA07A"}}>GENIUS</p></b>
                  </div>
               </div>
            </div>

             <div className="containerbottom">
                 <div className="containerbottom1">
                     <div style={{position:"relative",float:"right",width:"70%"}}>
                     <div style={{ display:"flex"}}>
                        <div style={{ margin:"auto" ,paddingTop:15}}>
                          <b><p style={{fontSize:28}}>450</p></b>
                        </div>
                    </div>
                    </div>

                    <div style={{position:"relative",paddingLeft:20,float:"left",width:"30%"}}>
                      <div>
                          <Tooltip placement="right" title="View Challenges!">
                            <span><Button style={{borderRadius:25,borderColor:"black",marginTop:5}}><i className="fas fa-hands-helping"></i></Button></span>
                          </Tooltip>
                      </div>
                      <div style={{marginTop:15}}>
                          <Tooltip placement="right" title="See Reports">
                            <span><Button style={{borderRadius:25,borderColor:"black"}}><i className="fa fa-bar-chart" aria-hidden="true"></i></Button></span>
                          </Tooltip>
                      </div>
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
                <div className="container211"><b><p>Daily Ranking</p></b></div>
                <div className="container212"><b><i className="fa fa-bolt" aria-hidden="true"></i></b></div>
             </div>

             <div className="container22">
                 <div className="dailylistitem">
                     <div className="top1">
                       <Avatar src="https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg" />
                     </div>
                     <div className="top2">
                        <p>Ankit Sharma</p>
                     </div>
                     <div className="top3">
                        <b><p>4500</p></b>
                     </div>
                 </div>
                 <div className="dailylistitem">
                     <div className="top1">
                       <Avatar src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/6c088176414139.5c696b3a86452.jpg" />
                     </div>
                     <div className="top2">
                        <p>Jitender Bhati</p>
                     </div>
                     <div className="top3">
                        <b><p>2500</p></b>
                     </div>
                 </div>
                 <div className="dailylistitem">
                     <div className="top1">
                       <Avatar src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/ca54a636488325.571e82a33b526.jpg" />
                     </div>
                     <div className="top2">
                        <p>Rohan Shrivastava</p>
                     </div>
                     <div className="top3">
                        <b><p>2300</p></b>
                     </div>
                 </div>
             </div>


          </div>
        </div>

     </div>
    );
  }
}

export default Home;
