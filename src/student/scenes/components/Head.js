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
                <li ><Link to="/extra"><b><i className="fas fa-power-off" style={{color:"#fd0054"}}></i></b></Link></li>
              </ul>
            </div>

            <ul className="navbar-left">
              <div className="brand"><li><a href="#" id="cart"> Traduate </a></li></div>
            </ul>
          </div>
        </nav>

     </div>
    );
  }
}

export default Head;
