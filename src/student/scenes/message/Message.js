import React, { Component } from 'react';
import { Layout } from 'antd';
import './Message.scss';
import { Tabs, Button } from 'antd';
import { Avatar } from 'antd';
import Card1 from './components/card1/Card1'

const TabPane = Tabs.TabPane;
const operations = <Button>Ask Question</Button>;
const {Content} = Layout;

class Message extends Component {
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
                  <div className="container211"><b><p>Cheered by!</p></b></div>
                  <div className="container212"><b><i className="fa fa-bolt" aria-hidden="true"></i></b></div>
               </div>

               <div className="container22">
                   <div className="dailylistitem">
                       <div className="top1">
                         <Avatar src="https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg" />
                       </div>
                       <div className="top1">
                         <Avatar src="https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg" />
                       </div>
                       <div className="top1">
                         <Avatar src="https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg" />
                       </div>
                       <div className="top1">
                         <Avatar src="https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg" />
                       </div>
                       <div className="top1">
                         <Avatar src="https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg" />
                       </div>
                       <div className="top1">
                         <Avatar src="https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg" />
                       </div>
                   </div>

                   <div className="dailylistitem">
                       <div className="top1">
                         <Avatar src="https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg" />
                       </div>
                       <div className="top1">
                         <Avatar src="https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg" />
                       </div>
                       <div className="top1">
                         <Avatar src="https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg" />
                       </div>
                       <div className="top1">
                         <Avatar src="https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg" />
                       </div>
                       <div className="top1">
                         <Avatar src="https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg" />
                       </div>
                       <div className="top1">
                         <Avatar src="https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg" />
                       </div>
                   </div>


              </div>

          </div>
        </div>

     </div>

    );
  }
}

export default Message;
