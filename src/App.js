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
import Home from './student/scenes/home/Home'
import Yes from './student/scenes/home/Yes'
import Allroutes from './router/Allroutes';
import { connect } from "react-redux";
import { Skeleton } from 'antd';
import Dictaphone from './Appcopy'
import Yota from './Yota'
import { BrowserRouter,Route,Redirect,Switch } from "react-router-dom";
import Yesmain from './student/scenes/home/Yesmain';
import Rout from './student/scenes/home/Rout';
import Yolo from './student/scenes/home/Yolo';
import Watchanswer from './student/scenes/message/components/card1/components/Watchanswer'

class App extends Component {

  render() {
    return (
      <div >
        
        <BrowserRouter>
          <Allroutes/>
        </BrowserRouter>


  {/*
        <BrowserRouter>
           <Switch>
             <Route path="/home" component={Yota} />
             <Redirect from="/" to="/home" />
           </Switch>
          </BrowserRouter>

*/}
     </div>
    );
  }
}

export default App;
