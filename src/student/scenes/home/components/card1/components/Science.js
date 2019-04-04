import React, { Component } from 'react';
import './Science.css';
import { Avatar,Button,message,Skeleton,Tooltip } from 'antd';
import Answermodal from './Answermodal';
import axios from 'axios';
import {time_ago} from '../../../../../utils/getTimeFormat';

axios.defaults.baseURL = 'http://localhost:5000';
axios.defaults.headers.post['Content-Type'] = 'application/json';


class Science extends Component {
  constructor(props) {
      super(props);
      const data = [];
      this.state = { data ,loading: true };
      this.handleSubmit = this.handleSubmit.bind(this);
}

handleSubmit = (e) => {
      axios.post('/post_question/markDoubt', {
        "id": "",
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
    await axios.get('/get_all_question/Science',{
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
                  <Skeleton avatar paragraph={{ rows: 4 }} active />
            </div>;
    }

    return (
    <div>

    <div className="scrollbar2" id="style-1">
       <div className="force-overflow">

          {question.map((items, idx) => {
            return(
            <div className="cardquestion" key={idx}>
              <div className="containerquestion">
                <div className="top">
                   <div className="top1">
                     <Avatar src="https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg" />
                   </div>
                   <div className="top2">
                      <p>{items._id}</p>
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
                   <div className="top3">
                       <Tooltip title="Not Covered Yet">
                         <span><i className="fa fa-paper-plane"></i></span>
                       </Tooltip>
                   </div>
               </div>

                <div className="middle">
                   <h3>{items.question}</h3>
                </div>

                <div className="bottom">
                   <div className="bottom1"><Answermodal marked_doubt={items.marked_doubt} subject={items.subject} topic={items.topic} chapter={items.chapter} question_by={items.question_by} question={items.question}/></div>
                   <div className="bottom1">
                       <Tooltip title="Too tuff ? Mark a doubt!">
                         <span><Button onClick={this.handleSubmit} >Mark Doubt</Button></span>
                       </Tooltip>
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

export default Science;
