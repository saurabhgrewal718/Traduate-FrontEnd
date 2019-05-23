import React, { Component } from 'react';
import { Layout } from 'antd';
import { Tabs, Button } from 'antd';
import Science from './components/Science';
import English from './components/English';
import Maths from './components/Maths';
import Askquestionmodal from './components/Askquestionmodal';
import {Switch,Link,Route} from 'react-router-dom'
import { withRouter } from "react-router";
import './Teacherstories.css'

const TabPane = Tabs.TabPane;
const {Content} = Layout;
const Profile = () => <div>You're on the Profile Tab</div>;
const Comments = () => <div>You're on the Comments Tab</div>;
const Contact = () => <div>You're on the Contact Tab</div>;
const title = "this is my titlehttps://cdn.dribbble.com/users/2227512";


class Teacherstories extends Component {


  render() {
    return (
        <div className="shadowboxteacherstory">
              <div style={{ paddingTop: '5px' }}>
                <div style={{display:"flex"}}>
                   <div style={{flex:"1",textAlign:"center"}}>
                      <b style={{fontFamily: "Questrial, sans-serif",fontSize:16}}>Stories</b>
                   </div>
                   <div style={{flex:"1",textAlign:"center"}}>
                      <b style={{fontFamily: "Questrial, sans-serif",fontSize:14,marginTop:5}}><i className="fas fa-cog"></i></b>
                   </div>
                </div>

                <div style={{display:"flex", flexDirection:"column",marginTop:10}}>
                   <div style={{margin:"auto"}}>
                     <img src="https://cdn.dribbble.com/users/2227512/screenshots/5103649/_1.png" alt="image" style={{ width:60,height:60,borderRadius:"50%"}}/>
                   </div>

                   <div style={{margin:"auto"}}>
                     <b style={{fontFamily: "Questrial, sans-serif",paddinngTop:5,fontSize:12}}>{title.substring(0,25)}..</b>    
                   </div>
                   
                </div>


                <div style={{display:"flex", flexDirection:"column",marginTop:10}}>
                   <div style={{margin:"auto"}}>
                     <img src="https://cdn.dribbble.com/users/2227512/screenshots/5103649/_1.png" alt="image" style={{ width:60,height:60,borderRadius:"50%"}}/>
                   </div>

                   <div style={{margin:"auto"}}>
                     <b style={{fontFamily: "Questrial, sans-serif",paddinngTop:5,fontSize:12}}>{title.substring(0,25)}..</b>    
                   </div>
                   
                </div>
                
              </div>
        </div>

    );
  }
}

export default Teacherstories;
