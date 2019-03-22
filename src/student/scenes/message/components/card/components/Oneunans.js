import React, { Component } from 'react';
import { Drawer, Avatar,Button,Progress } from 'antd';

class Oneunans extends React.Component {


  render() {
    return (
      <div>

          <div style={{width:"100%",height:170,marginTop:"-20px"}}>
              <div style={{display:"flex"}}>
                 <div style={{margin:"auto"}}>

                   <div class="scrollbar1" id="style-1">
                      <div class="force-overflow">
                        <div style={{display:"flex"}}>
                           <div style={{margin:"auto",paddingLeft:"20px",paddingRight:"20px"}}>

                               <div style={{height:"auto",postion:"relative",width:"100%",marginBottom:"180px"}}>

                                 <div style={{position:"relative",float:"left",paddingLeft:"120px"}}>
                                     <div className="containertop">
                                        <div className="containertop1" style={{marginLeft:90}}>
                                           <img src="https://cdn.dribbble.com/users/1787356/screenshots/4903899/__111.jpg" alt="Avatar" style={{width:"80px",height:"80px",borderRadius: "50%"}}/>
                                        </div>
                                        <div style={{marginTop:90}}>
                                           <p>The amaing effects of gravity in space</p>
                                        </div>
                                       <Progress percent={50} size="small" />
                                     </div>
                                 </div>

                               </div>


                           </div>
                         </div>
                      </div>
                   </div>


                </div>
            </div>
        </div>

      </div>
    );
  }
}

export default Oneunans;
