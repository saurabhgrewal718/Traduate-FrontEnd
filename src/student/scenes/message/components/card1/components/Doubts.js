import React, { Component } from 'react';
import { Layout } from 'antd';
import { Tabs, Button,Avatar,Icon } from 'antd';
import './Doubts.css';
import { Popconfirm, message } from 'antd';
import Watchanswermodal from './Watchanswermodal';

const success = () => {
  message.success('Cheers sent Sucessfully !');
  message.config({
  top:20,
  duration: 2,
  maxCount: 3,
});
};

function confirm(e) {
  console.log(e);
  message.success('Click on Yes');
}

function cancel(e) {
  console.log(e);
  message.error('Click on No');
}


const TabPane = Tabs.TabPane;
const operations = <Button>Ask Question</Button>;
const {Content} = Layout;

class Topics extends Component {
  render() {
    return (
      <div>
        <div style={{display:"flex"}}>
           <div style={{margin:"auto"}}>
              <b><p style={{paddingLeft:20}}>19 January 2019<i class="fa fa-calendar" aria-hidden="true" style={{color:"black",paddingLeft:10}}></i></p></b>
           </div>
        </div>


        <div className="carddoubt">
          <div className="containerdoubt">
            <div className="top">
               <div className="top2">
                  <b><p>Maths</p></b>
               </div>
               <div className="top2">
                  <b style={{color:"#FF7F50"}}><p>Chapter 23</p></b>
               </div>
               <div className="top2">
                  <b><p style={{color:"#CD853F"}}>(Topic Name is great powers)</p></b>
               </div>
               <div className="top3">
                   <Popconfirm title="Add to Physics Book?" onConfirm={confirm} onCancel={cancel} okText="Yes" cancelText="No" icon={<Icon type="book" />}>
                     <a style={{color:"#000000"}}><i className="fa fa-book"></i></a>
                   </Popconfirm>
               </div>
           </div>

            <div className="middle">
               <h3>Ing oqueston really sucks!</h3>
            </div>

            <div className="bottom">
               <div className="bottom2"><Avatar src="https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg" /></div>
               <div className="bottom2"><p style={{paddingTop:5}}>Answered by <b>Rohit Roy</b></p></div>
               <div className="bottom1"><Watchanswermodal/></div>
               <div className="bottom1"><Button>Say Cheers!</Button></div>
            </div>

          </div>
        </div>


          <div className="carddoubt">
            <div className="containerdoubt">
              <div className="top">
                 <div className="top2">
                    <b><p>Maths</p></b>
                 </div>
                 <div className="top2">
                    <b style={{color:"#FF7F50"}}><p>Chapter 23</p></b>
                 </div>
                 <div className="top2">
                    <b><p style={{color:"#CD853F"}}>(Topic Name is great powers)</p></b>
                 </div>
                 <div className="top3">
                     <Popconfirm title="Add to Physics Book?" onConfirm={confirm} onCancel={cancel} okText="Yes" cancelText="No" icon={<Icon type="book" />}>
                       <a style={{color:"#000000"}}><i className="fa fa-book"></i></a>
                     </Popconfirm>
                 </div>
             </div>

              <div className="middle">
                 <h3>Ing oqueston really sucks!</h3>
              </div>

              <div className="bottom">
                 <div className="bottom2"><Avatar src="https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg" /></div>
                 <div className="bottom2"><p style={{paddingTop:5}}>Answered by <b>Rohit Roy</b></p></div>
                 <div className="bottom1"><Button>Watch Answer</Button></div>
                 <div className="bottom1"><Button onClick={success}>Say Cheers!</Button></div>
              </div>

            </div>
          </div>


          <div className="carddoubt">
            <div className="containerdoubt">
              <div className="top">
                 <div className="top2">
                    <b><p>Maths</p></b>
                 </div>
                 <div className="top2">
                    <b style={{color:"#FF7F50"}}><p>Chapter 23</p></b>
                 </div>
                 <div className="top2">
                    <b><p style={{color:"#CD853F"}}>(Topic Name is great powers)</p></b>
                 </div>
                 <div className="top3">
                     <Popconfirm title="Add to Physics Book?" onConfirm={confirm} onCancel={cancel} okText="Yes" cancelText="No" icon={<Icon type="book" />}>
                       <a style={{color:"#000000"}}><i className="fa fa-book"></i></a>
                     </Popconfirm>
                 </div>
             </div>

              <div className="middle">
                 <h3>Ing oqueston really sucks!</h3>
              </div>

              <div className="bottom">
                 <div className="bottom2"><Avatar src="https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg" /></div>
                 <div className="bottom2"><p style={{paddingTop:5}}>Answered by <b>Rohit Roy</b></p></div>
                 <div className="bottom1"><Button>Watch Answer</Button></div>
                 <div className="bottom1"><Button>Say Cheers!</Button></div>
              </div>

            </div>
          </div>


          <div className="carddoubt">
            <div className="containerdoubt">
              <div className="top">
                 <div className="top2">
                    <b><p>Maths</p></b>
                 </div>
                 <div className="top2">
                    <b style={{color:"#FF7F50"}}><p>Chapter 23</p></b>
                 </div>
                 <div className="top2">
                    <b><p style={{color:"#CD853F"}}>(Topic Name is great powers)</p></b>
                 </div>
                 <div className="top3">
                     <Popconfirm title="Add to Physics Book?" onConfirm={confirm} onCancel={cancel} okText="Yes" cancelText="No" icon={<Icon type="book" />}>
                       <a style={{color:"#000000"}}><i className="fa fa-book"></i></a>
                     </Popconfirm>
                 </div>
             </div>

              <div className="middle">
                 <h3>Ing oqueston really sucks!</h3>
              </div>

              <div className="bottom">
                 <div className="bottom2"><Avatar src="https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg" /></div>
                 <div className="bottom2"><p style={{paddingTop:5}}>Answered by <b>Rohit Roy</b></p></div>
                 <div className="bottom1"><Button>Watch Answer</Button></div>
                 <div className="bottom1"><Button>Say Cheers!</Button></div>
              </div>

            </div>
          </div>


      </div>
    );
  }
}

export default Topics;
