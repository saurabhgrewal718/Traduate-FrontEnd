import React, { Component } from 'react';
import './Science.css';
import { Avatar,Skeleton,Button,Tooltip } from 'antd';
import Answermodal from './Answermodal';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000';
axios.defaults.headers.post['Content-Type'] = 'application/json';


class Maths extends Component {
  constructor(props) {
      super(props);
      const data = [];
      this.state = { data ,loading: true };
}

  async componentDidMount() {
    await axios.get('/get_all_question',{
    headers:{
      'x-auth':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Yzk0YmFjYjk0ODU3OTM3ZDQ5NzgwOGEiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTUzMjU4NzI1fQ.DjleZHQYLPzZkJTElVJsqGpoHzWZpPtAHoPRxnMdD5c",
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
    let question=this.state.data;
    if (this.state.loading) {
      return <div><Skeleton avatar paragraph={{ rows: 4 }} active /></div>;
    }
    return (
        <div>

        <div className="scrollbar2" id="style-1">
           <div className="force-overflow">

        {question.map((items, idx) => {
          return (
            <div className="cardquestion" key={idx} style={{marginTop:0,paddingTop:0,marginBottom:0,paddingTop:0}}>
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
                      <p>2 days ago </p>
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
                   <div className="bottom1"><Answermodal/></div>
                   <div className="bottom1">
                        <Button>Mark Doubt</Button>
                   </div>
                   <div className="bottom2"><Avatar src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/9222b568654569.5b6446bfab4b2.jpg" style={{height:20,width:20}}/></div>
                   <div className="bottom2"><Avatar src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/9222b568654569.5b6446bfab4b2.jpg" style={{height:20,width:20}}/></div>
                   <div className="bottom2"><Avatar src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/9222b568654569.5b6446bfab4b2.jpg" style={{height:20,width:20}}/></div>
                   <div className="bottom3">
                      <p>+Marked Doubt</p>
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
