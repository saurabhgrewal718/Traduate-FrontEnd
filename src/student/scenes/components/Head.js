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
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/message">Message</Link></li>
               <li><Link to="/extra"><i className="fa fa-bolt"></i></Link></li>
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
