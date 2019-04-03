import React, { Component } from 'react';
import { Drawer, Button } from 'antd';

class Challengesdivider extends React.Component {
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
        <Button onClick={this.showDrawer} style={{borderRadius:25,borderColor:"black",marginTop:5}}><i className="fas fa-hands-helping"></i></Button>
        <Drawer
          title={<div style={{display:"flex"}}><div style={{margin:"auto"}}><b>Be Ready for the Challenges !</b></div></div>}
          placement="bottom"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >

          <div style={{width:"100%",height:170,marginTop:"-20px"}}>
              <div style={{display:"flex"}}>
                 <div style={{margin:"auto"}}>
                       <div style={{position:"relative",float:"left",paddingLeft:"120px"}}>
                           <div className="containertop">
                              <div className="containertop1" style={{marginLeft:90}}>
                                 <img src="https://cdn.dribbble.com/users/226242/screenshots/2787156/no.1_hand.png" alt="Avatar" style={{width:"80px",height:"80px",borderRadius: "50%"}}/>
                              </div>
                              <div style={{marginTop:90}}>
                                 <p>hey do you know mai tere utter kiinna marta</p>
                              </div>
                              <Button style={{borderRadius:"25px",backgroundColor:"#343d46",color:"white",marginLeft:70}} >
                                 Take Challenge
                              </Button>
                           </div>
                      </div>

                      <div style={{position:"relative",float:"left",paddingLeft:"120px"}}>
                         <div className="containertop">
                            <div className="containertop1" style={{marginLeft:90}}>
                               <img src="https://cdn.dribbble.com/users/1852612/screenshots/5364088/2017_________1920_1080___andriod.png" alt="Avatar" style={{width:"80px",height:"80px",borderRadius: "50%"}}/>
                            </div>
                            <div style={{marginTop:90}}>
                               <p>hey do you know mai tere utter kiinna marta</p>
                            </div>
                            <Button style={{borderRadius:"25px",backgroundColor:"#343d46",color:"white",marginLeft:70}} >
                               Take Challenge
                            </Button>
                         </div>
                      </div>

                      <div style={{position:"relative",float:"left",paddingLeft:"120px"}}>
                          <div className="containertop">
                             <div className="containertop1" style={{marginLeft:90}}>
                                <img src="https://cdn.dribbble.com/users/1787356/screenshots/4903899/__111.jpg" alt="Avatar" style={{width:"80px",height:"80px",borderRadius: "50%"}}/>
                             </div>
                             <div style={{marginTop:90}}>
                                <p>hey do you know mai tere utter kiinna marta</p>
                             </div>
                             <Button style={{borderRadius:"25px",backgroundColor:"#343d46",color:"white",marginLeft:70}} >
                                Take Challenge
                             </Button>
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

export default Challengesdivider;
