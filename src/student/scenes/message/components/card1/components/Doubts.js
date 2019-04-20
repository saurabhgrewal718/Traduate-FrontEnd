import React, { Component } from 'react';
import Doubtquestion from './Doubtquestion';
import {Tooltip,Avatar,Button,Progress,Skeleton,Empty} from 'antd'
import Watchanswer from './Watchanswer'
import Allhomeroutes from '../../../../../../router/Allhomeroutes'
import axios from 'axios';
import {Link} from 'react-router-dom'
import {time_ago} from '../../../../../utils/getTimeFormat';
import {getfromstorage,setInStorage,} from '../../../../../utils/Storage';

axios.defaults.baseURL = 'http://localhost:5000';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.common['x-auth'] = getfromstorage('x-auth');

class Doubts extends Component {
  constructor(props) {
      super(props);
      const data = [];
      this.state = { data ,loading: true };
}

  async componentDidMount() {
    await axios.get('/get_all_answer/marked_doubt')
  .then(result=>{
    if(result.status==200){
      let questiondata='';
      questiondata = result.data.result;
      console.log(result);
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
    const isNull = !question;
    const isEmpty = !isNull && !question.length;
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

                 <div>
                   { isNull ?
                     <Empty
                       description={
                         <span>
                           No Doubt Answes Found!
                         </span>
                       }
                     >
                     </Empty>
                     : ( isEmpty
                       ?
                       <div style={{display:"flex"}}><div style={{margin:"auto"}}>
                          <img style={{height:"200px",width:"300px"}} src="https://cdn.dribbble.com/users/1753953/screenshots/3818675/animasi-emptystate.gif" alt="Learn with Traduate" />
                          <p style={{fontSize:18}}>You Have not Added any Questions Yet!</p>
                       </div></div>
                       :
                       <div>
                         {question.map((items, idx) => {
                           return (
                                  <div className="carddoubtread" key={items._id}>
                                    <div className="containerdoubt">
                                      <div className="top">
                                         <div className="top2">
                                            <b><p>{items.subject}</p></b>
                                         </div>
                                         <div className="top2">
                                            <b style={{color:"#FF7F50"}}><p>{items.chapter}</p></b>
                                         </div>
                                         <div className="top2">
                                            <b><p style={{color:"#CD853F"}}>{items.topic}</p></b>
                                         </div>
                                         <div className="top3">
                                             <Tooltip placement="top" title="Marked on !">
                                               <span><b><p style={{color:"black"}}>{time_ago(items.date_of_answer)}</p></b></span>
                                             </Tooltip>
                                         </div>
                                     </div>

                                        <div className="middle">
                                           <h3>{items.question}</h3>
                                        </div>

                                      <div className="bottom">
                                         <div className="bottom2"><Avatar src={"http://localhost:5000/" + items.question_by.profileImage} /></div>
                                         <div className="bottom2"><p style={{paddingTop:5}}>Answered by <b>{items.question_by.fullname}</b></p></div>
                                         <div className="bottom1">
                                           <Link
                                             to={{pathname:`/message/question/${items._id}`,
                                             state: {question:items.question,
                                               answer:items.answer,
                                               answered_by:items.answered_by,
                                               asked_to:items.asked_to,
                                               chapter:items.chapter,
                                               class:items.class,
                                               date_of_answer:items.date_of_answer,
                                               date_of_question:items.date_of_question,
                                               marked_doubt:items.marked_doubt,
                                               question:items.question,
                                               question_by:items.question_by,
                                               reported:items.reported,
                                               subject:items.subject,
                                               topic:items.topic,
                                               _id:items._id,
                                               attachments:items.attachments
                                             }

                                           }}>
                                             <Button>Watchanswer</Button>
                                           </Link>
                                         </div>

                                         <div className="bottom1"><Button>Say Cheers!</Button></div>
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

export default Doubts;
