import React, { Component } from 'react';
import './Science.css';
import { Avatar,Skeleton,Button,Tooltip } from 'antd';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000';
axios.defaults.headers.post['Content-Type'] = 'application/json';


class Markdoubt extends Component {
  constructor(props) {
  super(props);

  // This binding is necessary to make `this` work in the callback
  this.handleSubmit = this.handleSubmit.bind(this);
}

  handleSubmit = (e) => {
        axios.post('/post_question/markDoubt', {
          "id": "5c94cbd4f334310679a9e40d",
        })
         .then((res)=>{
         if(res.status==201) {
          console.log(res);

         }
         })
         .catch((err)=>{
           console.log(err);
         });
  }

  render(){
    return (
              <Button htmlType="submit" >Mark Doubt</Button>

    );
  }
}

export default Markdoubt;
