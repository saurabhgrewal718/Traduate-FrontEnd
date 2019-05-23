import React, { Component }from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import Home from '../student/scenes/home/Home';
import Profile from '../student/scenes/profile/Profile';
import Message from '../student/scenes/message/Message';


class Baserouter extends Component{
  componentDidMount(){
    console.log(this.props);
  }
 render(){
   return(
    <div>
      <Switch>
         <Route exact path='/' component={Home}/>
         <Route exact path='/home' component={Home}/>
         <Route exact path='/profile' component={Profile}/>
         <Route exact path='/message' component={Message}/>
         <Route exact path='/message/answer/' component={Home}/>
      </Switch>
     </div>
   );
  }
 }

export default Baserouter;
