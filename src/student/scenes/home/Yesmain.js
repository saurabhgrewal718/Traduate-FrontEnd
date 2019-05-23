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
import Yes from './Yes';
import {BrowserRouter,Switch,Route,Link,Redirect,withRouter} from "react-router-dom";
import Read from '../profile/Read';
import Message from '../message/Message';

const Profile = () => <div>You're on the Profile Tab</div>;
const Comments = () => <div>You're on the Comments Tab</div>;
const Contact = () => <div>You're on the Contact Tab</div>;


const TabPane = Tabs.TabPane;
const {Content} = Layout;
const routes = [
  {
    path: "/home",
    exact: true,
    sidebar: () => <div>home!</div>,
    main: () => <h2>Home</h2>
  },
  {
    path: "/readbytes",
    sidebar: () => <Yes/>,
    main: () => <h2>Bubblegum</h2>
  },
  {
    path: "/message",
    sidebar: () => <div>shoelaces!</div>,
    main: () => <h2>Shoelaces</h2>
  }
];

class Yesmain extends Component {
  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        <div style={{backgroundColor:"white",height:"auto",width:"100%"}}>
          <div style={{backgroundColor:"white",width:"100%",height:"auto"}}>
            <Head/>
          </div>
          <div><p style={{marginTop:"-20px",color:"#CAEBF2"}}>.</p>          </div>
            <Route exact path="/" component={Home} />
            <Route path="/message" component={Yes} />
            <Route path="/readbytes" component={Comment} />
        </div>

     </React.Fragment>
    );
  }
}

export default withRouter(Yesmain);
