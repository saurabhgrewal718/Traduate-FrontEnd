import React, { Component } from 'react';
import './Signcontainer.css';
import Signin from './components/Signin';
import Signup from './components/Signup';

class Teachersign extends Component {
  render() {
    return (
      <div>

        <div>
          <div style={{height:750}}>
            <div className="header">
                <div style={{position:"relative",float:"left",width:"50%",paddingTop:15}}>
                   <b style={{fontFamily:'Ultra',fontSize:34,paddingLeft:80}}>traduate</b>
                   <b style={{position:"relative",float:"right",fontFamily:'Ultra',fontSize:34}}>teacher</b>
                </div>
                <div style={{position:"relative",float:"right",width:"50%"}}>
                   <h1><Signin como={this.props}/></h1>
                </div>
            </div>
            <div className="content">
               <div style={{position:"relative",float:"left",width:"50%"}}>
                  <img src="https://cdn.dribbble.com/users/998555/screenshots/2534708/teacher_animation.gif" alt="Learn with Traduate" />
               </div>
               <div style={{position:"relative",float:"right",width:"50%"}}>
                  <h1><Signup como={this.props}/></h1>
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

export default Teachersign;
