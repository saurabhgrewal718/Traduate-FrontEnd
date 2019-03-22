import React, { Component } from 'react';
import { Layout } from 'antd';
import { Tabs, Button } from 'antd';
import { Avatar } from 'antd';
import Questionunans from './components/Questionunans'


const TabPane = Tabs.TabPane;
const operations = <Button>Ask Question</Button>;
const {Content} = Layout;

class Profile extends Component {
  render() {
    return (
      <div>

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
                 <div style={{width:"100%",height:80,marginTop:110}}>
                     <div className="container21">
                        <div className="container211"><b><p>Questions Unanswered</p></b></div>
                        <div className="container212"><b><Questionunans/></b></div>
                     </div>
                 </div>
              </div>


     </div>

    );
  }
}

export default Profile;
