import React, { Component } from 'react';
import { Avatar,Button,message,Skeleton,Tooltip,Drawer,Empty } from 'antd';
import axios from 'axios';
import Oneunans from './Oneunans'
import {
    getfromstorage,setInStorage,
  } from '../../../../../utils/Storage';


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
        "id": _id
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

                                          <div style={{display:"flex"}}>
                                             <div style={{margin:"auto"}}>
                                                <b><p style={{padding:5,paddingRight:20,position:"relative",float:"left",paddingBottom:10}}>{items.subject}</p></b>
                                                <b><p style={{padding:5,paddingRight:20,position:"relative",float:"left",paddingBottom:10}}>{items.chapter}</p></b>
                                                <b><p style={{padding:5,paddingRight:20,position:"relative",float:"left",paddingBottom:10}}>{items.topic}</p></b>
                                             </div>
                                          </div>

                                          <div style={{display:"flex"}}>
                                             <div style={{margin:"auto"}}>
           {/*                                      <div style={{position:"relative",float:"right"}}>
                                                     <Button style={{borderRadius:25}}><i style={{color:"#FD6A02"}} class="fas fa-fire"></i></Button>
                                                 </div> */}
                                                <p style={{paddingLeft:8,position:"relative",float:"right",fontWeight:600,color:"#FF7F50"}}>{items.question}</p>
                                             </div>
                                         </div>

                                          <div style={{position:"relative",float:"left"}}>
                                             <p style={{paddingLeft:2,paddingTop:2,position:"relative",float:"left",fontWeight:600}}>500 Views</p>
                                         </div>

                                         <div style={{position:"relative",float:"right"}}>
                                             <Tooltip placement="right" title="Ask Teacher!">
                                                 <div style={{position:"relative"}}>
                                                     <Button onClick={(event)=>this.handleSubmit(event,items._id)} style={{borderRadius:25,marginRight:20}}><i style={{color:"#00E52D"}} className="fas fa-chalkboard-teacher"></i></Button>
                                                 </div>
                                             </Tooltip>
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
