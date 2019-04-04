import React, { Component } from 'react';
import './Science.css';
import { Avatar,message,Skeleton,Button,Tooltip } from 'antd';
import Answermodal from './Answermodal';
import axios from 'axios';
import Markdoubt from './Markdoubt';
import {time_ago} from '../../../../../utils/getTimeFormat';

axios.defaults.baseURL = 'http://localhost:5000';
axios.defaults.headers.post['Content-Type'] = 'application/json';


class Maths extends Component {
  constructor(props) {
      super(props);
      const data = [];
      this.state = { data ,loading: true };
      this.handleSubmit = this.handleSubmit.bind(this);
}

handleSubmit = (e) => {
      axios.post('/post_question/markDoubt', {
        "id": "5ca5f8aecd1c2b838cb7cf0c",
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
    await axios.get('/get_all_question/Maths',{
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
          return (
            <div className="cardquestion" key={idx} style={{marginTop:0,paddingTop:0,marginBottom:10,paddingTop:0}}>
              <div className="containerquestion">
                <div className="top">
                   <div className="top1">
                     <Avatar src="https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg" />
                   </div>
                   <div className="top2">
                      <p>Ankit Sharma</p>
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
                    <h3>{items._id}</h3>
                  </div>
                </div>
                </div></div>

                <div className="bottom">
                   <div className="bottom1"><Answermodal marked_doubt={items.marked_doubt} subject={items.subject} topic={items.topic} chapter={items.chapter} question_by={items.question_by} question={items.question}/></div>
                   <div className="bottom1">
                      <Button onClick={this.handleSubmit} >Mark Doubt</Button>
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

export default Maths;
