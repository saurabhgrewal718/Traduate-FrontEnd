import React, { Component } from 'react';
import './Home.scss';
import { Layout } from 'antd';
import { Tabs, Button,Tooltip,message } from 'antd';
import { Avatar } from 'antd';
import Card1 from './components/card1/Card1'
import Challengesdivider from './components/card/components/Challengesdivider';
import Reportcontainer from './components/card/components/Reportcontainer';
import Dailyranking from './components/card2/Dailyranking';
import Card from './components/card/Card';

const TabPane = Tabs.TabPane;
const {Content} = Layout;



class Home extends Component {
  componentDidMount(){
    console.log(this.props.location);
  }

  render() {
    return (
      <div>
        <div className="card">
          <div className="container0">
              <Card rambo={this.props.location}/>
          </div>
        </div>

        <div className="card1">
          <div className="container1">
             <Card1/>
          </div>
        </div>

        <div className="card2">
          <div className="container2">
             <Dailyranking/>
          </div>
        </div>

     </div>
    );
  }
}

export default Home;
