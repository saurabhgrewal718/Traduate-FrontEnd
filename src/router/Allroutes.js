import React, { Component }from 'react';
import {Switch,Route,Redirect,BrowserRouter} from 'react-router-dom';
import Home from '../student/scenes/home/Home';
import Profile from '../student/scenes/profile/Profile';
import Message from '../student/scenes/message/Message';
import Signcontainer from '../student/scenes/signup/Signcontainer'
import Signup from '../student/scenes/signup/components/Signup'
import Preferences from '../student/scenes/signup/components/Preferences'
import Preferences1 from '../student/scenes/signup/components/Preferences1'
import Teachersign from '../teacher/scenes/signup/Teachersign'
import Teachersignup1 from '../teacher/scenes/signup/components/Teachersignup1'
import Teachersignup2 from '../teacher/scenes/signup/components/Teachersignup2'
import Allhomeroutes from './Allhomeroutes'
import Allteacherroutes from './Allteacherroutes'
import Head from '../student/scenes/components/Head'
import {
    getfromstorage,setInStorage,
  } from '../student/utils/Storage';
import axios from 'axios';


class Allroutes extends Component{

 render(){
   return(
    <div>
    <BrowserRouter>
        <Switch>
           <Route exact path='/sign' render={props=> <Signcontainer {...props}/>}/>
           <Route exact path='/setup/first' render={props=> <Preferences1 {...props}/>}/>
           <Route exact path='/setup/last' render={props=> <Preferences {...props}/>}/>
           <Route exact path='/home' render={props=> <Allhomeroutes {...props}/>}/>
           <Route exact path='/teacher' render={props=> <Teachersign {...props}/>}/>
           <Route exact path='/teacher/first' render={props=> <Teachersignup1 {...props}/>}/>
           <Route exact path='/teacher/last' render={props=> <Teachersignup2 {...props}/>}/>
           <Route exact path='/teacherhome' render={props=> <Allteacherroutes {...props}/>}/>
           { getfromstorage('x-auth') &&
              <Redirect to='/home'/>
            }
          { getfromstorage('teacher-auth') &&
             <Redirect to='/teacherhome'/>
           }
           <Redirect to='./sign'/>
        </Switch>
      </BrowserRouter>


     </div>
   );
  }
 }

export default Allroutes;
