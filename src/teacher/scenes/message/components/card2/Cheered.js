import React, { Component } from 'react';
import { Button } from 'antd';
import { Avatar,Tabs,Layout } from 'antd';

const TabPane = Tabs.TabPane;
const operations = <Button>Ask Question</Button>;
const {Content} = Layout;

class Cheered extends Component {
  render() {
    return (
      <div>

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

                   <div style={{display:"flex"}}><div style={{margin:"auto",marginTop:20}}>
                      <b><p style={{fontSize:20}}>+ 30 more..</p></b>
                   </div></div>


              </div>

     </div>

    );
  }
}

export default Cheered;
