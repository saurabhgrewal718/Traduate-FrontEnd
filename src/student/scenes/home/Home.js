import React, { Component } from 'react';
import './Homestyle.css';
import { Layout } from 'antd';
import { Tabs, Button,Tooltip,message } from 'antd';
import { Avatar } from 'antd';
import Card1 from './components/card1/Card1'
import Challengesdivider from './components/card/components/Challengesdivider';
import Reportcontainer from './components/card/components/Reportcontainer';
import Dailyranking from './components/card2/Dailyranking';
import Card from './components/card/Card';
import Workspace from './Workspace'
import {
    getfromstorage,setInStorage,removeFromStorage
  } from '../../utils/Storage';

const TabPane = Tabs.TabPane;
const {Content} = Layout;

class Home extends Component {
  componentDidMount(){
    console.log(this.props.location);
    removeFromStorage('firstpage');
    removeFromStorage('secondpage');
  }

  render() {
    return (
      <div>
        <div className="cardcontainer">
          <div class="view">
          <div className="cardfirst">
            <div className="container0">
                <Card rambo={this.props.location}/>
            </div>
          </div>
          </div>

          <div className="cardthird">
          <div className="container1">
             <Card1/>
          </div>
        </div>

        <div class="view">
          <div className="cardsceond">
            <div className="container2">
               <Dailyranking/>
            </div>
          </div>
        </div>

       </div>
    </div>
    );
  }
}

export default Home;
