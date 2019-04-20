import React, { Component } from 'react';
import { Tabs,Input,Modal,Avatar, Popconfirm,Tooltip, Layout,Icon,Button,message,Rate,Select } from 'antd';
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

                <div className="cardquestion" style={{height:"auto"}}>
                  <div className="containerquestion">
                    <div className="top">
                       <div className="top1">
                         <Avatar src="https://cdn.dribbble.com/users/1753953/screenshots/3818675/animasi-emptystate.gif" />
                       </div>
                       <div className="top2">
                          <p>{this.props.location.state.question_by.fullname}</p>
                       </div>
                       <div className="top2">
                          <b><p style={{color:"#7CFC00"}}>{this.props.location.state.subject}</p></b>
                       </div>
                       <div className="top2">
                          <p>{this.props.location.state.chapter}</p>
                       </div>
                       <div className="top2">
                          <p>{this.props.location.state.topic}</p>
                       </div>
                       <div className="top2">
                          <b><p style={{color:"#FFDAB9"}}>(Based on Topics you Read)</p></b>
                       </div>
                       <div className="top3">
                           <Tooltip title="Not Covered Yet">
                             <span><Button onClick={this.goback}><i className="fa fa-paper-plane"></i></Button></span>
                           </Tooltip>
                       </div>
                   </div>

                  <div style={{display:"flex"}}><div style={{margin:"auto"}}>
                    <div className="middle">
                       <b style={{fontSize:30}}>{this.props.location.state.question}</b>
                    </div>
                  </div></div>

                    <div className="middle">

                    <div style={{width:"100%", height:450}}>
                        <div style={{position:"relative",float:"right",width:200,height:400}}>
                            <div style={{ display:"flex"}}>
                               <div style={{ margin:"auto" }}>
                                 <div style={{marginBottom:"80px"}}>
                                    <Images image={this.props.location.state.attachments}/>
                                 </div>
                                 <div >
                                     <i className="fas fa-video"  style={{fontSize:60,paddingLeft:30,color:"#CAEBF2"}}></i>
                                     <b><p style={{paddingTop:10,paddingLeft:35}}>Videos</p></b>
                                 </div>
                               </div>
                            </div>
                        </div>
                        <div style={{ display:"flex"}}>
                           <div style={{ margin:"auto" }}>
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
