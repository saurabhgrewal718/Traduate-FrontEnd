import React, { Component } from 'react';
import './Head.scss';
import {Link,Redirect,withRouter} from 'react-router-dom';
import {Popconfirm, message, Button} from 'antd';
import axios from 'axios';
import {
    getfromstorage,setInStorage,removeFromStorage
  } from '../../utils/Storage';
import Notification from './Notification'
import { Spin } from 'antd';
import { config } from "../../../firebaseConfig";
import firebase from "firebase";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { notification } from 'antd';

axios.defaults.baseURL = 'http://localhost:5000';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.common['x-auth'] = getfromstorage('x-auth');

firebase.initializeApp(config);


class Head extends Component {
  constructor(props) {
  super(props);
  // this.addNotification.bind(this);
  this.notificationDOMRef = React.createRef();
}

state={
  loading:false
}


initializePusher = () => {
  const messaging = firebase.messaging();
  messaging
    .requestPermission()
    .then(() => {
      console.log("Have Permission");
      return messaging.getToken();
    })
    .then(async token => {
      console.log("FCM Token: ", token);
      await axios.post('/add_FCMToken', {
        "id": token
      })
        .then((res) => {
          if (res.status == 200) {
            console.log(res);
          }
        })
      // return new Promise((resolve, reject)=>{
      //     if(token)
      //         resolve(token)
      //     reject();
      // });
      //you probably want to send your new found FCM token to the
      //application server so that they can send any push
      //notification to you.
    })
    .catch(error => {
      if (error.code === "messaging/permission-blocked") {
        console.log("Please Unblock Notification Request Manually");
        // alert box
      } else {
        console.log("Error Occurred", error);
      }
    })

  messaging.onMessage(payload => {
    console.log("Notification Received", payload.notification.title);
    //this is the function that gets triggered when you receive a
    //push notification while you’re on the page. So you can
    //create a corresponding UI for you to have the push
    //notification handled.
    this.notificationDOMRef.current.addNotification({
      title: payload.notification.title,
      message: payload.notification.body,
      type: "success",
      insert: "top",
      container: "bottom-left",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: { duration: 1000*60 },
      dismissable: { click: true },
      isMobile : true
    });
  });
}
componentDidMount() {
  this.initializePusher();
}


  handleLogout = async event => {
      this.setState({loading:true});
      await axios.get('/logout')
      .then(result=>{
       if(result.status==200){
         console.log("yes logged out");
         this.props.history.push('/sign');
         removeFromStorage('x-auth');
         console.log(this.props);
         this.setState({loading:false});
       }
     })
     .catch(err=>{
       this.setState({loading:false});
       console.log(err);
     });
    }

  render() {
    if (this.state.loading) {
      return   <div class="spinhead">
                <div className="example2" style={{paddingTop:10}}>
                    <Spin size="small"/>
                </div>
               </div>
    }
    console.log(this.props);
    return (
      <div style={{height:52}}>

        <nav style={{paddingBottom:40}}>
          <div className="container">
            <div className="container-right">
              <ul className="navbar-right">
                <li style={{paddingRight:15}}><Link to="/message"><b>Answers</b></Link></li>


{/*  <li style={{paddingRight:15}}><Link to="/motionbooks"><b>Motionbooks</b></Link></li>
     <li style={{paddingRight:15}}><Link to="/motionbook"><b>Motionbook</b></Link></li>
*/}    
                <li>
                  <Button onClick={this.handleLogout} style={{backgroundColor:"rgb(0,0,0,0)"}}><b><i className="fas fa-power-off" style={{color:"#fd0054"}}></i></b></Button>
                </li>
              </ul>
            </div>
        <ReactNotification ref={this.notificationDOMRef} />
            <ul className="navbar-left">
              <li className="brand">
                <Link to="/home"><b class="brandname">traduate</b></Link>
             </li>
            </ul>
          </div>
        </nav>

        
        
     </div>
    );
  }
}
export default withRouter(Head);
