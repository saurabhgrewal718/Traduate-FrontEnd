import React, { Component } from 'react';
import { Layout } from 'antd';
import { Tabs, Button } from 'antd';
import Science from './components/Science';
import English from './components/English';
import Maths from './components/Maths';
import Askquestionmodal from './components/Askquestionmodal';
import {Switch,Link,Route} from 'react-router-dom'
import { withRouter } from "react-router";
import './Card1.css'
import Teacherstories from './Teacherstories'

const TabPane = Tabs.TabPane;
const {Content} = Layout;
const Profile = () => <div>You're on the Profile Tab</div>;
const Comments = () => <div>You're on the Comments Tab</div>;
const Contact = () => <div>You're on the Contact Tab</div>;
const operations = <Askquestionmodal/>


class Card1 extends Component {
state={
  currenttab:1,
}

 componentDidMount(){
   console.log(this.props);
 }

 yo=(key)=>{
  console.log(key);
  if(key==1){
    this.setState({currenttab:key});
  }
  else if (key==2) {
     this.setState({currenttab:key});
  }
}

  render() {
        const { path } = this.props.match;
    return (
        <div>
            <Layout className="layout" style={{backgroundColor:"white"}}>
              <Content style={{ padding: '0 20px' }}>
                <Tabs tabBarExtraContent={operations}>
                  <TabPane tab="Science" key="1"><Science/></TabPane>
                  <TabPane tab="Maths" key="2"><Maths/></TabPane>
                </Tabs>
              </Content>
            </Layout>
        </div>

    );
  }
}

export default withRouter(Card1);
