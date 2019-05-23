import React, { Component } from 'react';
import { Layout } from 'antd';
import './Message.scss';
import { Tabs, Button } from 'antd';
import { Avatar } from 'antd';
import Card1 from './components/card1/Card1'
import Cheered from './components/card2/Cheered'
import Profile from './components/card/Profile'

const TabPane = Tabs.TabPane;
const {Content} = Layout;

class Message extends Component {
  render() {
    return (
      <div>
        <div className="cardme">
          <div className="containermes">
             <Profile/>
          </div>
        </div>

        <div className="card1mes">
          <div className="container1mes">
             <Card1/>
          </div>
        </div>

        {/* <div className="card2">
          <div className="container2">
              <Cheered/>
          </div>
        </div> */}

     </div>

    );
  }
}

export default Message;
