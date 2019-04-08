import React, { Component }from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import Home from '../teacher/scenes/home/Home';
import Profile from '../teacher/scenes/profile/Profile';
import Message from '../teacher/scenes/message/Message';

class Teacherrouter extends Component{

 render(){
   return(
    <div>
      <Switch>
         <Route path='/home' component={Home}/>
         <Route exact path='/profile' component={Profile}/>
         <Route exact path='/answers' component={Message}/>
      </Switch>
     </div>
   );
  }
 }

export default Teacherrouter;
