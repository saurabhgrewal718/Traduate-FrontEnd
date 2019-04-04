import React, { Component } from 'react';
import { Avatar,Button,message,Skeleton,Tooltip,Drawer } from 'antd';
import axios from 'axios';
import Oneunans from './Oneunans'


axios.defaults.baseURL = 'http://localhost:5000';
axios.defaults.headers.post['Content-Type'] = 'application/json';


class Communityun extends Component {
  constructor(props) {
      super(props);
      const data = [];
      this.state = { data ,loading: true };
      this.handleSubmit = this.handleSubmit.bind(this);
}

handleSubmit = (e) => {
  e.preventDefault();
  this.props.form.validateFields((err, values) => {
    if (!err) {
      console.log('Received values of form: ', values);
      axios.post('/post_question', {
        "chapter": values.chapter,
        "question": values.question,
        "asked_to":values.radio,
        "subject": values.subject,
        "topic": values.topic
      })
       .then((res)=>{
       if(res.status==201) {
        console.log(res);

       }
       })
       .catch((err)=>{
         console.log(err);
       });
    }
  });
}

  async componentDidMount() {
    await axios.get('/get_all_question/ask_community',{
    headers:{
      'x-auth':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Yzk0Yzk4ZmRiYjFlYzA2MzJjZjU0MzMiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTUzMjU0Nzk5fQ.SB9YNuFNMUfd69owntsDAZmxSrLrLCtlFOsSbRH4C5g",
    }
  })
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
    if (this.state.loading) {
      return <div><Skeleton avatar paragraph={{ rows: 4 }} active />
                  <Skeleton avatar paragraph={{ rows: 4 }} active />
            </div>;
    }

    return (

<div>

    <div className="scrollbar1" id="style-1">
       <div className="force-overflow">

       {question.map((items, idx) => {
         return(
           <div style={{width:"100%",height:"350px",backgroundColor:"white"}} key={idx}>
               <div style={{display:"flex"}}>
                  <div style={{margin:"auto"}}>

                  <div style={{display:"flex"}}>
                     <div style={{margin:"auto",paddingLeft:"20px",paddingRight:"20px",paddingBottom:"10px"}}>

                         <div style={{height:"auto",postion:"relative",width:"100%"}}>

                           <div style={{position:"relative",float:"left",borderRadius:25,borderColor:"#DCDCDC",borderStyle:"solid",borderWidth:"0.5px" ,padding:10}}>
                               <div className="containertop">

                                   <div style={{display:"flex"}}>
                                      <div style={{margin:"auto"}}>
    {/*                                      <div style={{position:"relative",float:"right"}}>
                                              <Button style={{borderRadius:25}}><i style={{color:"#FD6A02"}} class="fas fa-fire"></i></Button>
                                          </div> */}
                                          <div style={{position:"relative"}}>
                                              <Button style={{borderRadius:25}}><i style={{color:"#FC6600"}} className="fas fa-chalkboard-teacher"></i></Button>
                                          </div>
                                      </div>
                                  </div>

                                  <div style={{display:"flex"}}>
                                     <div style={{margin:"auto"}}>
                                        <b><p style={{padding:10,position:"relative",float:"left",marginBottom:0}}>{items.topic}</p></b>
                                     </div>
                                  </div>

                                  <div>
                                     <p style={{marginBottom:5,width:300}}>{items.question}</p>
                                  </div>
                                  <div style={{position:"relative",float:"left"}}>
                                     <p style={{paddingLeft:2,paddingTop:2,position:"relative",float:"left",color:"#FF7F50",fontWeight:600}}>500 Views</p>
                                 </div>

                                 <div style={{position:"relative",float:"right"}}>
                                     <p style={{paddingLeft:8,position:"relative",float:"right",fontWeight:600,color:"#FF7F50"}}>{items.marked_doubt}</p>
                                 </div>

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
   </div>

</div>

    );
  }
}

export default Communityun;
