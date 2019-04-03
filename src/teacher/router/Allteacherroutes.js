import React, { Component } from 'react';
import Teacherrouter from './Teacherrouter';
import Containerhome from '../scenes/containerHome/Containerhome';

import {BrowserRouter,Route,Link,Redirect,withRouter} from "react-router-dom";

class Allteacherroutes extends Component {
  render() {
    return (
      <div >
        <BrowserRouter >
          <Containerhome>
             <Teacherrouter/>
          </Containerhome>
        </BrowserRouter>
      </div>
    );
  }
}

export default Allteacherroutes;
