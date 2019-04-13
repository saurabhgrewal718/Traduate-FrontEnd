import React, { Component } from 'react';
import { Popover, Button,Badge } from 'antd';

const text = <span>Title</span>;
const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

const buttonWidth = 5;

class Notification extends Component{
  render(){
    return(

      <Badge count={buttonWidth} >
        <Popover placement="bottomRight"
          content={<div>
                     <p>Content</p>
                     <p>Content</p>
                   </div>}
          title="Title"
          trigger="click">
          <i className="fas fa-bolt" style={{marginRight:10,fontSize:20}}></i>
        </Popover>
      </Badge>

    );
  }
}

export default Notification;
