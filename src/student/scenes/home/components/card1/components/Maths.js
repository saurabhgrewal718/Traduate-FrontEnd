import React, { Component } from 'react';
import './Science.css';
import { Avatar,message,Skeleton,Button,Tooltip,Empty } from 'antd';
import Answermodal from './Answermodal';
import axios from 'axios';
import Markdoubt from './Markdoubt';
import {time_ago} from '../../../../../utils/getTimeFormat';
import {getfromstorage,setInStorage,} from '../../../../../utils/Storage';

axios.defaults.baseURL = 'http://localhost:5000';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.common['x-auth'] = getfromstorage('x-auth');


class Maths extends Component {
  constructor(props) {
      super(props);
      const data = [];
      this.state = { data ,loading: true };
      this.handleSubmit = this.handleSubmit.bind(this);
}

handleSubmit = (e,_id) => {
      axios.post('/post_question/markDoubt', {
        "id": _id,
      })
       .then((res)=>{
       if(res.status==200) {
        console.log(res);

       }
       })
       .catch((err)=>{
         console.log(err);
       });
   message.loading('Action in progress..', 2.5)
      .then(() => message.success('Marked Doubt', 2.5));

}

  async componentDidMount() {
    await axios.get('/get_all_question/Maths')
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
      return <div><Skeleton avatar paragraph={{ rows: 4 }} active />
                  <Skeleton avatar paragraph={{ rows: 4 }} active />
                  <Skeleton avatar paragraph={{ rows: 4 }} active />
            </div>;
    }
    return (
        <div>

        <div className="scrollbar2" id="style-1">
           <div className="force-overflow">


           <div>
             { isNull ? <Empty/>
               : ( isEmpty
                 ?
                 <p>Sorry, the list is empty.</p>
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

                         <div style={{display:"flex"}}><div style={{margin:"auto"}}>
                         <div className="middle">
                           <div>
                             <h3>{items.question}</h3>
                           </div>
                         </div>
                         </div></div>

                         <div className="bottom">
                            <div className="bottom1"><Answermodal image={items.question_by.profileImage} marked_doubt={items.marked_doubt} subject={items.subject} topic={items.topic} chapter={items.chapter} questionId={items._id} fullname={items.question_by.fullname} question={items.question}/></div>
                            <div className="bottom1">
                               <Button onClick={(event) =>this.handleSubmit(event,items._id)} >Mark Doubt</Button>
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
