import React, { Component } from 'react';
import './Head.scss';
import {Button} from 'antd'
import {Link} from 'react-router-dom';
import Notification from './Notification'

class Head extends Component {
  render() {
    return (
      <div style={{height:52}}>

        <nav >
          <div className="container">
            <div className="container-right">
              <ul className="navbar-right">
                <li style={{paddingRight:15}}><Link to="/home"><b>Home</b></Link></li>
{/*                <li style={{paddingRight:15}}><Link to="/profile"><b>Profile</b></Link></li>*/}
                <li style={{paddingRight:15}}><b><Notification/></b></li>
                <li>
                  <Button style={{backgroundColor:"rgb(0,0,0,0)"}}><b><i className="fas fa-power-off" style={{color:"#fd0054"}}></i></b></Button>
                </li>
              </ul>
            </div>

            <ul className="navbar-left">
               <div className="brand"><p style={{fontFamily:'Ultra',letterSpacing: "0px",fontSize:24}}>traduate</p></div>
            </ul>
          </div>
        </nav>

     </div>
    );
  }
}

export default Head;
