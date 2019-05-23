import React, { Component } from 'react';
import Teacherrouter from './Teacherrouter';
import Containerhome from '../teacher/scenes/containerHome/Containerhome';
import {
    getfromstorage,setInStorage,
  } from '../student/utils/Storage';
import {BrowserRouter,Route,Switch,Link,Redirect,withRouter} from "react-router-dom";
import Home from '../teacher/scenes/home/Home';
import Profile from '../teacher/scenes/profile/Profile';
import Homesign from '../student/scenes/home/Homesign';
import Message from '../teacher/scenes/message/Message';


class Allteacherroutes extends Component {
  render() {
    return (
      <div >
      {getfromstorage('x-auth')?(
        <BrowserRouter >
          <Switch>
            <Containerhome>
               <Route path='/teacherhome' component={Home}/>
               <Route exact path='/profile' component={Profile}/>
               {/*<Route exact path='/answers' component={Message}/>
               <Route exact path='/reports' component={Reports}/>*/}
               <Route exact path='/teacher' component={Homesign}/>
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

export default Allteacherroutes;
