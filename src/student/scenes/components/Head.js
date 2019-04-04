import React, { Component } from 'react';
import './Head.scss';
import {Link} from 'react-router-dom';

class Head extends Component {
  render() {
    return (
      <div>

        <nav>
          <div className="container">
            <div className="container-right">
              <ul className="navbar-right">
                <li style={{paddingRight:15}}><Link to="/home"><b>Home</b></Link></li>
{/*                <li style={{paddingRight:15}}><Link to="/profile"><b>Read bytes</b></Link></li> */}
                <li style={{paddingRight:15}}><Link to="/message"><b>Message</b></Link></li>
                <li><b><i className="fas fa-power-off" style={{color:"#fd0054"}}></i></b></li>
              </ul>
            </div>

            <ul className="navbar-left">
              <div className="brand"><b style={{fontFamily:'Ultra',letterSpacing: "0px",fontSize:24}}>traduate</b></div>
            </ul>
          </div>
        </nav>

     </div>
    );
  }
}

export default Head;
