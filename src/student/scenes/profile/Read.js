import React, { Component } from 'react';
import { Layout } from 'antd';
import './Read.scss';
import { Tabs, Progress,Button,Tooltip } from 'antd';
import { Avatar,Upload,message } from 'antd';
import Card1 from './components/card1/Card1'
import Profilecard from './components/card/Profilecard'
import Studyplan from './components/card2/Studyplan'


const TabPane = Tabs.TabPane;
const operations = <Button>Ask Question</Button>;
const {Content} = Layout;

class Profile extends Component {
  render() {
    return (
      <div>
        <div className="card">
          <div className="container0">
             <Profilecard/>
          </div>
        </div>

        <div className="card1">
          <div className="container1">
             <Card1/>
          </div>
        </div>

        <div className="card2">
          <div className="container2">
               <Studyplan/>
          </div>
        </div>

     </div>
    );
  }
}

export default Profile;
