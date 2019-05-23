import React, { Component } from 'react';
import { Layout } from 'antd';
import { Tabs, Button,Tooltip } from 'antd';
import { Avatar } from 'antd';
import Challengesdivider from './components/Challengesdivider';
import Reportcontainer from './components/Reportcontainer';

const {Content} = Layout;

class Card extends Component {
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

                    <div style={{position:"relative",paddingLeft:20,paddingTop:10,float:"left",width:"30%"}}>
                      <div>
                          <Tooltip placement="right" title="Challenges!">
                            <span><Challengesdivider/></span>
                          </Tooltip>
                      </div>
                      <div style={{marginTop:15}}>
                          <Tooltip placement="right" title="Reports">
                            <span><Reportcontainer/></span>
                          </Tooltip>
                      </div>
                    </div>
                 </div>
             </div>


     </div>
    );
  }
}

export default Card;
