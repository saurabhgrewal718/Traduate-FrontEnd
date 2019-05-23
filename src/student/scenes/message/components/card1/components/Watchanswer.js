import React, { Component } from 'react';
import { Tabs,Input,Modal,Avatar, Popconfirm,Tooltip, Layout,Icon,Button,message,Rate,Select, AutoComplete } from 'antd';
import './Doubts.css';
import Flipbook from './Flipbook';
import Answerfile from './Answerfile'
import Images from './Images';
import Reportanswer from './Reportanswer'

const {Content} = Layout;

class Watchanswer extends Component {
  componentDidMount(){
    console.log(this.props);
  }
  goback=()=>{
    {this.props.history.push('/message')}
  }
  render() {
    console.log("yesdo");
    console.log(this.props);
    return (
       <div>

            <Layout className="layout">
              <Content style={{ padding: '0 0px' }}>
                <div style={{ borderRadius:25, height: "auto",width:"100%",overflow: "hidden" }}>

                <div className="cardquestion" >
                  <div className="containerquestion" >
                    <div className="top">
                       <div className="top1">
                         <img src="https://cdn.dribbble.com/users/1753953/screenshots/3818675/animasi-emptystate.gif" style={{height:40,width:40,borderRadius:"50%",border:"1px solid black"}}/>
                       </div>
                       <div className="top2">
                          <b style={{fontSize:18}}>{this.props.location.state.question_by.fullname}</b>
                       </div>
                       <div className="top2">
                          <b style={{color:"#7CFC00",fontSize:18}}>{this.props.location.state.subject}</b>
                       </div>
                       <div className="top2">
                          <b style={{fontSize:18}} >{this.props.location.state.chapter}</b>
                       </div>
                       <div className="top2">
                          <b style={{fontSize:18}}>{this.props.location.state.topic}</b>
                       </div>
                       <div className="top2">
                          <b style={{color:"#FFDAB9",fontSize:18}}>(Based on Topics you Read)</b>
                       </div>

                       <div className="top3" style={{marginTop:"-7px"}}>
                          <span><Button style={{fontSize:20,fontFamily:"Questrial",borderRadius:"20px",width:"auto",padding:5,paddingLeft:15,paddingRight:15,height:"auto",backgroundColor:"#db2d43",color:"#fcf5ee"}} onClick={this.goback}><b >Go Back</b></Button></span>
                       </div>
                   </div>
                   
                   <hr style={{marginTop:10}}/>

                    <div className="middle" style={{backgroundColor:"white",borderRadius:"10px"}}>
                       <b style={{fontSize:20}}>{this.props.location.state.question}</b>
                    </div>
                  

                    <div className="middle">

                    <div style={{width:"100%", height:450}}>
                        <div style={{position:"relative",float:"right",width:200,height:400}}>
                            <div style={{ display:"flex"}}>
                               <div style={{ margin:"auto" }}>
                                 <div style={{marginBottom:"80px"}}>

                                     {this.props.location.state.attachments==undefined ? (

                                            <Tooltip title="No Image file Avalable">
                                                <div >
                                                    <i className="fas fa-image" style={{fontSize:60,paddingLeft:25,color:"black"}}></i>
                                                    <b><p style={{paddingTop:10,paddingLeft:20}}>Answer File</p></b>
                                                </div>
                                            </Tooltip>

                                       ) : (
                                         <Tooltip title="📝 Image file Avalable">
                                           <Images image={this.props.location.state.attachments}/>
                                        </Tooltip>
                                     )}

                                 </div>
                                 <div >

                                 {this.props.location.state.attachments==undefined ? (
                                   <Tooltip title="No Video Avalable!">
                                     <div >
                                       <i className="fas fa-video"  style={{fontSize:60,paddingLeft:30,color:"black"}}></i>
                                       <b><p style={{paddingTop:10,paddingLeft:35}}>Videos</p></b>
                                     </div>
                                   </Tooltip>
                                   ) : (
                                     <Tooltip title="🍿 Video Avalable!">
                                     <i className="fas fa-video"  style={{fontSize:60,paddingLeft:30,color:"#CAEBF2"}}></i>
                                     <b><p style={{paddingTop:10,paddingLeft:35}}>Videos</p></b>
                                     </Tooltip>
                                 )}

                                 </div>
                               </div>
                            </div>
                        </div>
                        <div style={{ display:"flex"}}>
                           <div style={{ margin:"auto",backgroundColor:"white" }}>
                               <div style={{position:"relative",float:"left"}}>
                                 <div style={{width:1100,fontSize:30}}>
                                   {this.props.location.state.answer}
                                 </div>
                               </div>
                           </div>
                        </div>


                    </div>

                    </div>

                    <div className="bottom">
                    {/*   <div className="bottom1">answer</div>
                       <div className="bottom1">
                           <Tooltip title="Too tuff ? Mark a doubt!">
                             <span><Button >Mark Doubt</Button></span>
                           </Tooltip>
                       </div>*/}
                    </div>

                  </div>
                </div>


                </div>
              </Content>
            </Layout>

        </div>

    );
  }
}

export default Watchanswer;
