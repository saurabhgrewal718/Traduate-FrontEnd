import React, { Component } from 'react';
import Baserouter from './Baserouter';
import Containerhome from '../scenes/containerHome/Containerhome';

import {BrowserRouter,Route,Link,Redirect,withRouter} from "react-router-dom";

class Allhomeroutes extends Component {
  render() {
    return (
      <div >
        <BrowserRouter >
          <Containerhome>
             <Baserouter/>
          </Containerhome>
        </BrowserRouter>
      </div>
    );
  }
}

export default Allhomeroutes;
