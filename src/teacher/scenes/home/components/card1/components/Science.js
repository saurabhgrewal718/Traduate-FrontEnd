import React, { Component } from 'react';
import './Science.css';
import { Avatar,Button,message,Skeleton,Tooltip,Empty } from 'antd';
import Answermodal from './Answermodal';
import axios from 'axios';
import {time_ago} from '../../../../../utils/getTimeFormat';
import {getfromstorage,setInStorage,} from '../../../../../utils/Storage';

axios.defaults.baseURL = 'http://localhost:5000';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.common['x-auth'] = getfromstorage('x-auth');

class Science extends Component {
  constructor(props) {
      super(props);
      const data = [];
      this.state = { data ,loading: true};
}


  async componentDidMount() {
    await axios.get('teacher_get_all_question')
  .then(result=>{
    if(result.status==200){
      let questiondata='';
      questiondata = result.data.result;
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
    let question=this.state.data;
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

       { isNull ? <Empty/>
         : ( isEmpty
           ?
           <Empty
             description={
               <span>
                 No Science Questions Matching You Today!!
               </span>
             }
           >
           </Empty>
           :
           <div>
           {question.map((items, idx) => {

             return(
               <div className="cardquestion" key={idx}>
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
                         <b><p style={{color:"#FFDAB9"}}>{(items.topic)}</p></b>
                      </div>
{/*                      <div className="top3">
                          <Tooltip title="Not Covered Yet">
                            <span><i className="fa fa-paper-plane"></i></span>
                          </Tooltip>
                      </div>*/}
                  </div>

                   <div className="middle">
                      <h3>{items.question}</h3>
                   </div>

                   <div className="bottom">
                      <div className="bottom1"><Answermodal subject={items.subject} question={items.question} chapter={items.chapter} topic={items.topic} /></div>

{/*                      <div className="bottom2"><Avatar src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/9222b568654569.5b6446bfab4b2.jpg" style={{height:20,width:20}}/></div>
                      <div className="bottom2"><Avatar src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/9222b568654569.5b6446bfab4b2.jpg" style={{height:20,width:20}}/></div>
                      <div className="bottom2"><Avatar src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/9222b568654569.5b6446bfab4b2.jpg" style={{height:20,width:20}}/></div>
                      <div className="bottom3">
                         <p>+Marked Doubt</p>
                      </div>*/}
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

    );
  }
}

export default Science;
