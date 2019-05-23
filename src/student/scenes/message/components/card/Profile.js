import React, { Component } from 'react';
import { Layout } from 'antd';
import { Tabs, Button } from 'antd';
import { Avatar } from 'antd';
import Doubtuns from './components/Doubtuns'
import Communityuns from './components/Communityuns'
import ContentLoader from "react-content-loader"
import './Profile.css'


const TabPane = Tabs.TabPane;
const operations = <Button>Ask Question</Button>;
const {Content} = Layout;

class Profile extends Component {
  constructor(props) {
      super(props);
      this.state = { loading: false };
}

  render() {
    if (this.state.loading) {
      return <div>
                <ContentLoader
                height={200}
                width={260}
                speed={2}
                primaryColor="#f7f7f7"
                secondaryColor="#efefef"
                >
                <circle cx="51" cy="47" r="30" />
                <rect x="114" y="55" rx="0" ry="0" width="111" height="13" />
                <rect x="26" y="97" rx="3" ry="3" width="201" height="16" />
                <rect x="26" y="131" rx="3" ry="3" width="201" height="16" />
                <rect x="112" y="27" rx="0" ry="0" width="111" height="13" />
                </ContentLoader>
            </div>;
    }
    return (
      <div>

              <div className="containertop" style={{height:"auto"}}>
                 
                 <div className="profiletog">
                  <div className="containertop1">
                     <img src="https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg" alt="Avatar" style={{width:"80px",borderRadius: "50%"}}/>
                  </div>
                  <div className="containertop2">
                     <div style={{position:"relative",width:"100%",paddingTop:10,paddingLeft:10}}>
                           <b><p style={{marginBottom: 0,paddingTop:10}}>Ankit Sharma</p></b>
                     </div>
                     <div style={{position:"relative",width:"100%",paddingTop:2,paddingLeft:10}}>
                           <b><p style={{marginBottom: 0,color:"#FFA07A"}}>GENIUS</p></b>
                     </div>
                  </div>
                 </div>

                 <div className="profileheight">
                     <div className="container21" >
                        <div className="container211"><b><p>Doubts</p></b></div>
                        <div className="container212"><b><Doubtuns/></b></div>
                     </div>
                     <div className="container21" style={{marginBottom:0,marginTop:0}}>
                        <div className="container211" style={{marginBottom:10}}><b><p>Community</p></b></div>
                        <div className="container212"><b><Communityuns/></b></div>
                     </div>
                 </div>
              </div>


     </div>

    );
  }
}

export default Profile;
