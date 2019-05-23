import React, { Component } from 'react';
import './Signcontainer.css';
import Signin from './components/Signin';
import Signup from './components/Signup';
import {
    getfromstorage,setInStorage,removeFromStorage
  } from '../../utils/Storage';
import {Redirect} from 'react-router-dom'

class Signcontainer extends Component {

componentDidMount(){
  console.log(this.props);
}

  render() {

      const xauth = getfromstorage('x-auth');

      if (xauth != null) {
        return <Redirect to='/home'/>
      }
    return (
      <div>

        <div>
          <div style={{height:750}}>
            <div className="header">
                <div style={{position:"relative",float:"left",width:"50%",paddingTop:15}}>
                   <b style={{fontFamily:'Ultra',fontSize:34,paddingLeft:80}}>traduate</b>
                   <b className="headtitle">student</b>
                </div>
                <div className="signy">
                   <h1 style={{paddingTop:0}}><Signin como={this.props}/></h1>
                </div>
            </div>
            <div className="content">
               <div className="gifi">
                  <img src="https://cdn.dribbble.com/users/405145/screenshots/4152205/22_daydream_1_800x600.gif" alt="Learn with Traduate" style={{height:500,width:800}} />
               </div>
               <div className="signi">
                  <h1 style={{paddingTop:30}}><Signup como={this.props}/></h1>
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
