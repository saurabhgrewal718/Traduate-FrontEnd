import React, { Component } from 'react';
import './Science.css';
import { Avatar,message,Skeleton,Button,Tooltip,Empty } from 'antd';
import Answermodal from './Answermodal';
import axios from 'axios';
import {time_ago} from '../../../../../utils/getTimeFormat';
import {getfromstorage,setInStorage,} from '../../../../../utils/Storage';

axios.defaults.baseURL = 'http://www.traduate-backend.herokuapp.com';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.common['x-auth'] = getfromstorage('x-auth');

const isApiSucessful=response=>response.status===200;

class Maths extends Component {
  constructor(props) {
      super(props);
      const data = [];
      this.state = { data ,loading: true,iconloading:false };
      this.handleSubmit = this.handleSubmit.bind(this);
}

handleSubmit = (e,_id) => {
      this.setState({iconloading: true });
      axios.post('/post_question/markDoubt', {
        "id": _id,
      })
       .then((res)=>{
       if(res.status==200) {
        this.setState({iconloading: false });
        console.log(res);
        (function(){
            message.success('Added to Doubts');
           })();

       }
       })
       .catch((err)=>{
         console.log(err);
         this.setState({iconloading: false });
         (function(){
           message.error("Ohh no..🤕 ! Cant add to Doubts !" + err);
            })();
       });

}

componentDidMount() {
    this.getmathsquestion();
}

getmathsquestion=async()=>{
  try{
    const res= await axios.get('/get_all_question/Maths')
    if(isApiSucessful(res)){
      let questiondata='';
      questiondata = res.data;
      this.setState({data:questiondata});
      this.setState({loading: false });
   }
 }catch(err){
     console.log(err);
 }
}


  render() {
    let question=this.state.data.data;
    console.log(question);
    const isNull = !question;
    const isEmpty = !isNull && !question.length;
    if (this.state.loading) {
      return <div style={{marginTop:10}}><Skeleton avatar paragraph={{ rows: 4 }} active />
                  <Skeleton avatar paragraph={{ rows: 4 }} active />
                  <Skeleton avatar paragraph={{ rows: 4 }} active />
            </div>;
    }

    return (
        <div >

        <div className="thescrollbar" id="scrollbarstyle" >
              <div className="the-overflow">

           <div>
             { isNull ? <Empty/>
               : ( isEmpty
                 ?
                 <Empty
                   description={
                     <span>
                       No Questions Matching You Today!!
                     </span>
                   }
                 >
                 </Empty>
                 :
                 <div>
                 {question.map((items, idx) => {
                   return (
                     <div className="cardquestion" key={items._id} style={{marginTop:0,paddingTop:0,marginBottom:10,paddingTop:0}}>
                       <div className="containerquestion">
                         <div className="top">
                            <div className="top1">
                              <Avatar src={"http://localhost:5000/" + items.question_by.profileImage} />
                            </div>
                            <div className="top2">
                               <p>{items.question_by.fullname}</p>
                            </div>
                            <div className="top2">
                               <b><p style={{color:"#7CFC00"}}>Maths</p></b>
                            </div>
                            <div className="top2">
                               <p>{time_ago(items.date_of_question)}  </p>
                            </div>
                            <div className="top2">
                               <b><p style={{color:"#FFDAB9"}}>(Based on Topics you Read)</p></b>
                            </div>
                            <div className="top3">
                                <Tooltip title="Not Covered Yet">
                                  <span><i className="fa fa-paper-plane"></i></span>
                                </Tooltip>
                            </div>
                        </div>

                         <div className="middle">
                           <div>
                             <h3>{items.question}</h3>
                           </div>
                         </div>

                         <div className="bottom">
                            <div className="bottom1"><Answermodal subject={items.subject} questionId={items._id} question_by={items.question_by} question={items.question} chapter={items.chapter} topic={items.topic} marked_doubt={items.marked_doubt} /></div>
                            <div className="bottom1">
                               <Button loading={this.state.iconloading} onClick={(event) =>this.handleSubmit(event,items._id)} >Mark Doubt</Button>
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

export default Maths;
