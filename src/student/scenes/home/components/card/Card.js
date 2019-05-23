import React, { Component } from 'react';
import { Layout } from 'antd';
import { Tabs, Button,Tooltip } from 'antd';
import { Avatar } from 'antd';
import axios from 'axios';
import Challengesdivider from './components/Challengesdivider';
import { Skeleton } from 'antd';
import Reportcontainer from './components/Reportcontainer';
import logo from './fruit.gif'
import ContentLoader from "react-content-loader"


const {Content} = Layout;

class Card extends Component {
  constructor(props) {
      super(props);
      const data = [];
      this.state = { data ,loading: true,iconloading: false };
}


  async componentDidMount() {
    await axios.get('/users/get_credits')
  .then(result=>{
    if(result.status==200){
      let questiondata='';
      questiondata = result.data;
      this.setState({data:questiondata});
      this.setState({loading: false });
    }

  })
  .catch(err=>{
    console.log(err);
  });
}

componentDidUpdate(prevState) {
  // Typical usage (don't forget to compare props):
  if (this.state.data.credits !== prevState.credits) {
    //here i will run a again set state to newly found value
  }
}


  render() {
    let question=this.state.data;
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

      <div className="containertop">
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
         <div style={{width:"100%",height:80,marginTop:95}}>
             <div style={{position:"relative",float:"right"}}>
                <div style={{display:"flex"}}><b style={{fontSize:28,margin:"auto"}}>{question.credits} <img style={{height:28,width:28}} src={logo} alt="Fruits" /></b></div>
             </div>
             <div style={{position:"relative",float:"left"}}>
                  <div style={{display:"flex"}}><b style={{fontSize:24,margin:"auto"}}><Reportcontainer/></b></div>
             </div>
         </div>
      </div>


     </div>
    );
  }
}

export default Card;
