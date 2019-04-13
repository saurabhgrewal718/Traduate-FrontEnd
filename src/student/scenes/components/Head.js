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

axios.defaults.baseURL = 'http://localhost:5000';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.common['x-auth'] = getfromstorage('x-auth');

const text = 'Do you want to Signout?';

function confirm() {
  console.log(this.props);
{/*  message.info('Clicked on Yes.'); */}

}

class Head extends Component {
  state={
    loading:false
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
                    <Spin size="large"/>
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
                <li style={{paddingRight:15}}><Link to="/home"><b>Home</b></Link></li>
{/*                <li style={{paddingRight:15}}><Link to="/profile"><b>Read bytes</b></Link></li> */}
                <li style={{paddingRight:15}}><Link to="/message"><b>Answers</b></Link></li>
{/*                <li style={{paddingRight:15}}><b><Notification/></b></li>*/}
                <li>
                  <Button onClick={this.handleLogout} style={{backgroundColor:"rgb(0,0,0,0)"}}><b><i className="fas fa-power-off" style={{color:"#fd0054"}}></i></b></Button>
                </li>
              </ul>
            </div>

            <ul className="navbar-left">
              <li className="brand">
                <Link to="/home"><b style={{fontFamily:'Ultra',letterSpacing: "0px",fontSize:24}}>traduate</b></Link>
             </li>
            </ul>
          </div>
        </nav>

     </div>
    );
  }
}
export default withRouter(Head);
