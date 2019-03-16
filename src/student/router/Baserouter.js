import React, { Component }from 'react';
import {Switch,Route} from 'react-router-dom';
import Home from '../scenes/home/Home';
import Profile from '../scenes/profile/Profile';
import Message from '../scenes/message/Message';

class Baserouter extends Component{

 render(){
   return(
    <div>
      <Switch>
         <Route exact path='/home' component={Home}/>
         <Route exact path='/profile' component={Profile}/>
         <Route exact path='/message' component={Message}/>
         <Route exact path='/extra' component={Home}/>
      </Switch>
     </div>
   );
  }
 }

export default Baserouter;
