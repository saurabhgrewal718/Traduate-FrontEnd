import React, { Component } from 'react';
import './Signcontainer.css';
import Signin from './components/Signin';
import Signup from './components/Signup';

class Signcontainer extends Component {
  render() {
    return (
      <div>

        <div>
          <div style={{height:750}}>
            <div className="header">
                <div style={{position:"relative",float:"left",width:"50%"}}>
                   <img src="https://cdn.dribbble.com/users/2667093/screenshots/6195327/gghh_1x.png" alt="Logo" style={{width:240, height:100,paddingTop:0,paddingLeft:80}} />
                </div>
                <div style={{position:"relative",float:"right",width:"50%"}}>
                   <h1><Signin/></h1>
                </div>
            </div>
            <div className="content">
               <div style={{position:"relative",float:"left",width:"50%"}}>
                  <img src="https://cdn.dribbble.com/users/405145/screenshots/4152205/22_daydream_1_800x600.gif" alt="Learn with Traduate" />
               </div>
               <div style={{position:"relative",float:"right",width:"50%"}}>
                  <h1><Signup/></h1>
               </div>
            </div>
            <div className="footer"></div>
          </div>
          <div className="sidertop">

          </div>
          <div className="siderbottom">

          </div>
        </div>

      </div>
    );
  }
}

export default Signcontainer;
