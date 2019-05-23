import React, { Component } from 'react';
import Home from'./Home';
import Workspace from './Workspace'
import { Layout } from 'antd';
import { Tabs, Button,Tooltip,message } from 'antd';
import { Avatar } from 'antd';
import Card1 from './components/card1/Card1'
import Challengesdivider from './components/card/components/Challengesdivider';
import Reportcontainer from './components/card/components/Reportcontainer';
import Dailyranking from './components/card2/Dailyranking';
import Card from './components/card/Card';
import {
    getfromstorage,setInStorage,removeFromStorage
  } from '../../utils/Storage';
import Head from '../components/Head';
import Read from '../profile/Read';
import Message from '../message/Message';
import {BrowserRouter,Switch,Route,Link,Redirect,withRouter} from "react-router-dom";

const Profile = () => <div>You're on the Profile Tab</div>;
const Comments = () => <div>You're on the Comments Tab</div>;
const Contact = () => <div>You're on the Contact Tab</div>;


const TabPane = Tabs.TabPane;
const {Content} = Layout;

class Yes extends Component {
  componentDidMount(){
    console.log(this.props.location);
    removeFromStorage('firstpage');
    removeFromStorage('secondpage');
  }

  render() {
    return (
      <React.Fragment>
        <div style={{backgroundColor:"pink",height:"auto",width:"100%"}}>
           <div style={{position:"relative",float:"left"}}>
             <Home/>
           </div>
           <div style={{position:"relative",float:"right"}}>
             <Workspace/>
           </div>
           
        </div>

     </React.Fragment>
    );
  }
}

export default Yes;
