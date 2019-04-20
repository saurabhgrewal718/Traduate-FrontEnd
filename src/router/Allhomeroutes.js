import React, { Component } from 'react';
import Containerhome from '../student/scenes/containerHome/Containerhome';
import axios from 'axios';
import {getfromstorage,setInStorage} from '../student/utils/Storage';
import Head from '../student/scenes/components/Head';
import Signcontainer from '../student/scenes/signup/Signcontainer'
import {BrowserRouter,Switch,Route,Link,Redirect,withRouter} from "react-router-dom";
import Home from '../student/scenes/home/Home';
import Homesign from '../student/scenes/home/Homesign';
import Profile from '../student/scenes/profile/Profile';
import Message from '../student/scenes/message/Message';
import Watchanswer from '../student/scenes/message/components/card1/components/Watchanswer';


axios.defaults.baseURL = 'http://localhost:5000';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.common['x-auth'] = getfromstorage('x-auth');

class Allhomeroutes extends Component {

  render() {
    return (
      <div >
        {getfromstorage('x-auth')?(
          <BrowserRouter >
            <Switch>
              <Containerhome>
                <Route exact path='/home' component={Home}/>
                <Route exact path='/profile' component={Profile}/>
                <Route exact path='/message' component={Message}/>
                <Route exact path='/message/question/:id' component={Watchanswer}/>
                <Route exact path='/sign' component={Homesign}/>
              </Containerhome>
            </Switch>
          </BrowserRouter>
        ):(
          this.props.history.push('/sign')
        )}
      </div>
    );
  }
}

export default Allhomeroutes;
