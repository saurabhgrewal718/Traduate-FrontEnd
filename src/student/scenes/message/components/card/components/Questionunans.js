import React, { Component } from 'react';
import { Drawer, Avatar,Button,Progress } from 'antd';

class Questionunans extends React.Component {
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div>
        <Button onClick={this.showDrawer} style={{borderRadius:25,marginTop:"-15px",borderColor:"black",zIndex:1}}><i style={{color:"#FF0000"}} class="fas fa-question"></i></Button>
        <Drawer
          title={<div style={{display:"flex"}}><div style={{margin:"auto"}}><b>Be Ready for the Challenges !</b></div></div>}
          placement="bottom"
          height="450px"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >


        <div class="scrollbar3" id="style-1">
           <div class="force-overflow">
                <div style={{width:"100%",height:"170px",backgroundColor:"green"}}>
                    <div style={{display:"flex"}}>
                       <div style={{margin:"auto"}}>


                              <div style={{display:"flex"}}>
                                 <div style={{margin:"auto",paddingLeft:"20px",paddingRight:"20px"}}>

                                     <div style={{height:"auto",postion:"relative",width:"100%"}}>

                                       <div style={{position:"relative",float:"left"}}>
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



        </Drawer>
      </div>
    );
  }
}

export default Questionunans;
