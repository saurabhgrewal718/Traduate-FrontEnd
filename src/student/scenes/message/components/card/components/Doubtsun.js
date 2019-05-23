import React, { Component } from 'react';
import { Avatar,Button,message,Skeleton,Tooltip,Drawer,Empty } from 'antd';
import axios from 'axios';
import Oneunans from './Oneunans'
import {
    getfromstorage,setInStorage,
  } from '../../../../../utils/Storage';
import {
    time_ago,
  } from '../../../../../utils/getTimeFormat';


axios.defaults.baseURL = 'http://localhost:5000';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.common['x-auth'] = getfromstorage('x-auth');


class Doubtsun extends Component {
  constructor(props) {
      super(props);
      const data = [];
      this.state = { data ,loading: true };
      this.handleSubmit = this.handleSubmit.bind(this);
}

handleSubmit = (e,_id) => {
  e.preventDefault();
      axios.post('/post_question/send_to_teacher', {        
      })
       .then((res)=>{
       if(res.status==201) {
        console.log(res);
        (function(){
          message.config({
           top: 20,
           duration: 5,
         });
          message.success('🤩 Question sent to Teacher..! Will be answered within Two hours !');

         })();

       }
       })
       .catch((err)=>{
         console.log(err);
         (function(){
           message.config({
            top: 20,
            duration: 5,
          });
           message.error("Ahh..SNAP..🤕 " + err);
          })();

       });
}

  async componentDidMount() {
    await axios.get('/get_all_question/mark_doubt')
  .then(result=>{
    if(result.status==200){
      let questiondata='';
      questiondata = result.data;
      console.log(questiondata);
      this.setState({data:questiondata});
      this.setState({loading: false });
    }

  })
  .catch(err=>{
    console.log(err);
  });
}


  render() {
    let question=this.state.data.data;
    console.log(question);
    const isNull = !question;
    const isEmpty = !isNull && !question.length;
    if (this.state.loading) {
      return <div>
            <div style={{display:"flex"}}><div style={{margin:"auto"}}>
            <div style={{width:800}}>
                  <Skeleton paragraph={{ rows: 4 }} active />
                  <Skeleton paragraph={{ rows: 4 }} active />
            </div>
            </div></div>
            </div>;
    }

    return (

<div>

    <div className="scrollbar1" id="style-1">
       <div className="force-overflow">


       <div>
         { isNull ? <Empty/>
           : ( isEmpty
             ?
             <div style={{display:"flex"}}><div style={{margin:"auto"}}>
                <img style={{height:"200px",width:"300px"}} src="https://cdn.dribbble.com/users/1753953/screenshots/3818675/animasi-emptystate.gif" alt="Learn with Traduate" />
                <p style={{fontSize:18}}>You Have not Added any Questions Yet!</p>
             </div></div>
             :
             <div>
               {question.map((items, idx) => {
                 return(
                   <div style={{width:"100%",height:"auto",backgroundColor:"white",marginBottom:20}} key={idx}>
                       <div style={{display:"flex"}}>
                          <div style={{margin:"auto"}}>

                                <div style={{position:"relative"}}>
                                   <div style={{position:"relative",float:"left",width:"800px",borderRadius:25,borderColor:"#DCDCDC",borderStyle:"solid",borderWidth:"0.5px" ,padding:10}}>
                                       <div className="containertop">

                                         <div className="containerquestion">
                                           <div className="top">
                                              <div className="top1">
                                                <Avatar src={"http://localhost:5000/" + items.question_by.profileImage} />
                                              </div>
                                              <div className="top2">
                                                 <p>{items.question_by.fullname}</p>
                                              </div>
                                              <div className="top2">
                                                 <b><p style={{color:"#7CFC00"}}>{items.subject}</p></b>
                                              </div>
                                              <div className="top2">
                                                 <p>{time_ago(items.date_of_question)} </p>
                                              </div>
                                              <div className="top2">
                                                 <b><p style={{color:"#FFDAB9"}}>(Based on Topics you Read)</p></b>
                                              </div>
                        {/*                      <div className="top3">
                                                  <Tooltip title="Not Covered Yet">
                                                    <span><i className="fa fa-paper-plane"></i></span>
                                                  </Tooltip>
                                              </div> */}
                                          </div>

                                           <div className="middle">
                                              <h3>{items.question}</h3>
                                           </div>
                                          </div>

                                       <div style={{padding:25}}>
                                          <div style={{position:"relative",float:"left"}}>
                                             <p style={{paddingLeft:2,paddingTop:2,position:"relative",float:"left",fontWeight:600}}>500 Views</p>
                                         </div>

                                         <div style={{position:"relative",float:"right"}}>
                                             <Tooltip placement="right" title="Ask To Teacher!">
                                                 <div style={{position:"relative"}}>
                                                     <Button onClick={(event)=>this.handleSubmit(event,items._id)} style={{borderRadius:25,borderColor:"#ff5733"}}><i style={{color:"#ff5733"}} className="fas fa-chalkboard-teacher"></i></Button>
                                                 </div>
                                             </Tooltip>
                                         </div>
                                      </div>

                                       </div>
                                   </div>
                                 </div>

                         </div>
                     </div>
                   </div>
               )
             })}

             </div>
           )
         }
       </div>



      </div>
   </div>

</div>

    );
  }
}

export default Doubtsun;
