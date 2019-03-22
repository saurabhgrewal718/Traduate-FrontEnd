import React, { Component } from 'react';
import { Drawer, Button,Progress } from 'antd';

class Bookread extends React.Component {
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
        <Button onClick={this.showDrawer} style={{borderRadius:25,marginTop:"-15px",borderColor:"black",zIndex:1}}><i class="fas fa-book"></i></Button>
        <Drawer
          title={<div style={{display:"flex"}}><div style={{margin:"auto"}}><b>Be Ready for the Challenges !</b></div></div>}
          placement="bottom"
          height="450px"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >

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
                                            <img src="https://cdn.dribbble.com/users/226242/screenshots/2787156/no.1_hand.png" alt="Avatar" style={{width:"80px",height:"80px",borderRadius: "50%"}}/>
                                         </div>
                                         <div style={{marginTop:90}}>
                                            <p>The amaing effects of gravity in space</p>
                                         </div>
                                       <Progress percent={90} size="small" />
                                      </div>
                                  </div>

                                 <div style={{position:"relative",float:"left",paddingLeft:"120px"}}>
                                    <div className="containertop">
                                           <div className="containertop1" style={{marginLeft:70}}>
                                              <img src="https://cdn.dribbble.com/users/1852612/screenshots/5364088/2017_________1920_1080___andriod.png" alt="Avatar" style={{width:"80px",height:"80px",borderRadius: "50%"}}/>
                                           </div>
                                           <div style={{marginTop:90}}>
                                              <p>The amaing effects of gravity in space</p>
                                           </div>
                                          <Progress percent={50} size="small" />
                                    </div>
                                 </div>

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

                              <div style={{height:"auto",postion:"relative",width:"100%",marginBottom:"40px"}}>

                                 <div style={{position:"relative",float:"left",paddingLeft:"120px"}}>
                                     <div className="containertop">
                                        <div className="containertop1" style={{marginLeft:90}}>
                                           <img src="https://cdn.dribbble.com/users/226242/screenshots/2787156/no.1_hand.png" alt="Avatar" style={{width:"80px",height:"80px",borderRadius: "50%"}}/>
                                        </div>
                                        <div style={{marginTop:90}}>
                                           <p>The amaing effects of gravity in space</p>
                                        </div>
                                      <Progress percent={90} size="small" />
                                     </div>
                                 </div>

                                <div style={{position:"relative",float:"left",paddingLeft:"120px"}}>
                                   <div className="containertop">
                                      <div className="containertop1" style={{marginLeft:90}}>
                                         <img src="https://cdn.dribbble.com/users/1852612/screenshots/5364088/2017_________1920_1080___andriod.png" alt="Avatar" style={{width:"80px",height:"80px",borderRadius: "50%"}}/>
                                      </div>
                                      <div style={{marginTop:90}}>
                                         <p>The amaing effects of gravity in space</p>
                                      </div>
                                      <Progress percent={30} size="small" />
                                   </div>
                                </div>

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



        </Drawer>
      </div>
    );
  }
}

export default Bookread;
