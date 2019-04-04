import React, { Component }from 'react';
import {Switch,Route,Redirect,BrowserRouter} from 'react-router-dom';
import Home from '../scenes/home/Home';
import Profile from '../scenes/profile/Profile';
import Message from '../scenes/message/Message';
import Signcontainer from '../scenes/signup/Signcontainer'
import Preferences from '../scenes/signup/components/Preferences'
import Preferences1 from '../scenes/signup/components/Preferences1'
import Allhomeroutes from './Allhomeroutes'

class Allroutes extends Component{

 render(){
   return(
    <div>
    <BrowserRouter>
        <Switch>
           <Route path='/sign' component={Signcontainer}/>
           <Route path='/setup/first' component={Preferences1}/>
           <Route path='/setup/last' component={Preferences}/>
           <Route path='/home' component={Allhomeroutes}/>
           <Redirect to="/sign"/>
        </Switch>
      </BrowserRouter>

     </div>
   );
  }
 }

export default Allroutes;
