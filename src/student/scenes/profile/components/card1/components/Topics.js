import React, { Component } from 'react';
import { Layout } from 'antd';
import { Tabs, Button,Avatar,Popconfirm } from 'antd';
import './Topics.css';

const TabPane = Tabs.TabPane;
const operations = <Button>Ask Question</Button>;
const {Content} = Layout;

class Topics extends Component {
  render() {
    return (
      <div>
        <div className="cardtopic">
          <div className="containertopic">

            <div className="top">
               <div className="top1">
                 <Avatar src="https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg" />
               </div>
               <div className="top2">
                  <b><p>Physics</p></b>
               </div>
               <div className="top4">
                  <b style={{color:"#FF7F50"}}><p>Chapter 23</p></b>
               </div>
               <Popconfirm title="Read a Short Summary?" okText="Yes" cancelText="No">
                 <div className="top3">
                    <i className="fa fa-clone"></i>
                 </div>
               </Popconfirm>
           </div>

            <div className="middle">
               <h3>Ing oqueston really sucks!</h3>
            </div>

            <div className="bottom">
               <div className="bottom1"><Button>I Have read it!</Button></div>
               <div className="bottom1"><Button>Not</Button></div>
            </div>

          </div>
        </div>

        <div className="cardtopic">
          <div className="containertopic">
            <div className="top">
               <div className="top1">
                 <Avatar src="https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg" />
               </div>
               <div className="top2">
                  <b><p>Science</p></b>
               </div>
               <div className="top4">
                  <b style={{color:"#FF7F50"}}><p>Chapter 23</p></b>
               </div>
               <div className="top3">
                  <i className="fa fa-clone"></i>
               </div>
           </div>

            <div className="middle">
               <h3>Ing oqueston really sucks!</h3>
            </div>

            <div className="bottom">
               <div className="bottom1"><Button>I Have read it!</Button></div>
               <div className="bottom1"><Button>Not</Button></div>
            </div>

          </div>
        </div>

        <div className="cardtopic">
          <div className="containertopic">
            <div className="top">
               <div className="top1">
                 <Avatar src="https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg" />
               </div>
               <div className="top2">
                  <b><p>English</p></b>
               </div>
               <div className="top4">
                  <b style={{color:"#FF7F50"}}><p>Chapter 23</p></b>
               </div>
               <div className="top3">
                  <i className="fa fa-clone"></i>
               </div>
           </div>

            <div className="middle">
              <div style={{ display:"flex"}}>
                <div style={{ margin:"auto" }}>
                  <h3>Food And the ways we uuse it!</h3>
                  <p>this is the decription of the topic </p>
                </div>
              </div>
            </div>


            <div className="bottom">
               <div className="bottom1"><Button>I Have read it!</Button></div>
               <div className="bottom1"><Button>Not</Button></div>
            </div>

          </div>
        </div>

        <div className="cardtopic">
          <div className="containertopic">
            <div className="top">
               <div className="top1">
                 <Avatar src="https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg" />
               </div>
               <div className="top2">
                  <b><p>Maths</p></b>
               </div>
               <div className="top4">
                  <b style={{color:"#FF7F50"}}><p>Chapter 23</p></b>
               </div>
               <div className="top3">
                  <i className="fa fa-clone"></i>
               </div>
           </div>

            <div className="middle">
               <h3>Ing oqueston really sucks!</h3>
            </div>

            <div className="bottom">
               <div className="bottom1"><Button>I Have read it!</Button></div>
               <div className="bottom1"><Button>Not</Button></div>
            </div>

          </div>
        </div>


      </div>
    );
  }
}

export default Topics;
