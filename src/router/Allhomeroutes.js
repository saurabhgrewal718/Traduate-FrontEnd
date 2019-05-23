import React, { Component } from 'react';
import Containerhome from '../student/scenes/containerHome/Containerhome';
import axios from 'axios';
import {getfromstorage,setInStorage} from '../student/utils/Storage';
import Head from '../student/scenes/components/Head';
import Signcontainer from '../student/scenes/signup/Signcontainer'
import {BrowserRouter,Switch,Route,Link,Redirect,withRouter} from "react-router-dom";
import Science from '../student/scenes/home/components/card1/components/Science';
import Maths from '../student/scenes/home/components/card1/components/Maths';
import Home from '../student/scenes/home/Home';
import Homesign from '../student/scenes/home/Homesign';
import Read from '../student/scenes/profile/Read';
import Trending from '../student/scenes/profile/components/card1/components/Trending';
import Detail from '../student/scenes/profile/components/card1/components/more/Detail';
import Message from '../student/scenes/message/Message';
import Watchanswer from '../student/scenes/message/components/card1/components/Watchanswer';


axios.defaults.baseURL = 'http://localhost:5000';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.common['x-auth'] = getfromstorage('x-auth');

class Allhomeroutes extends Component {

  componentDidMount(){
    console.log(this.props);
  }

  render() {
    return (
      <div >
        {getfromstorage('x-auth')?(
          <BrowserRouter >
            <Switch>
              <Containerhome>
                <Route exact path='/home' component={Home}/>
                <Route exact path='/home/maths' component={Maths}/>
                <Route exact path='/readbytes' component={Read}/>
                <Route exact path='/message' component={Message}/>
                <Route exact path='/motionbooks' component={Trending}/>
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
