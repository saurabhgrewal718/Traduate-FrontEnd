import React, { Component } from 'react';
import Head from './student/scenes/components/Head';
import Allhomeroutes from './router/Allhomeroutes';
import Signcontainer from './student/scenes/signup/Signcontainer';
import Teachersign from './teacher/scenes/signup/Teachersign';
import Item1 from './student/scenes/signup/components/Item1'
import Item2 from './student/scenes/signup/components/Item2'
import Preferences from './student/scenes/signup/components/Preferences'
import Allteacherroutes from './router/Allteacherroutes';
import Teachersignup1 from './teacher/scenes/signup/components/Teachersignup1'
import Teachersignup2 from './teacher/scenes/signup/components/Teachersignup2'
import Allroutes from './router/Allroutes';
import { connect } from "react-redux";
import { Skeleton } from 'antd';
import Dictaphone from './Appcopy'


class App extends Component {

  render() {
    return (
      <div >
         <Allroutes/>
      </div>
    );
  }
}

export default App;
