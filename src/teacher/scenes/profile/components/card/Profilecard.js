import React, { Component } from 'react';
import { Layout } from 'antd';
import { Tabs, Progress,Button,Tooltip } from 'antd';
import { Avatar,Upload,message } from 'antd';
import Bookread from './components/Bookread'
import Editprofile from './components/Editprofile'

const {Content} = Layout;

class Profilecard extends Component {
  render() {
    return (
      <div>

              <div className="containertop">
                 <div className="containertop1">
                    <img src="https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg" alt="Avatar" style={{width:"80px",borderRadius: "50%"}}/>
                 </div>
                 <div className="containertop2">
                    <div style={{position:"relative",float:"right",marginTop:25}}>
                        <Editprofile/>
                    </div>
                    <div style={{position:"relative",width:"100%",paddingTop:10}}>
                        <b><p style={{marginBottom: 0,paddingTop:10}}>Ankit Sharma</p></b>
                    </div>
                    <div style={{position:"relative",width:"100%",paddingTop:2}}>
                        <b><p style={{marginBottom: 0,color:"#FFA07A"}}>GENIUS</p></b>
                    </div>
                 </div>
              </div>

              <div style={{width:"100%",height:100,marginTop:0}}>
                  <div className="container21">
                     <div className="container211"><b><p>Books Read</p></b></div>
                     <div className="container212"><b><Bookread/></b></div>
                  </div>

                  <div className="container21">
                     <div className="container211"><b><p>My Notes</p></b></div>
                     <div className="container212"><b><Bookread/></b></div>
                  </div>
              </div>


     </div>
    );
  }
}

export default Profilecard;
