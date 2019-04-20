import React, { Component } from 'react';
import './Home.scss';
import { Spin } from 'antd';


class Homesign extends Component {
componentDidMount(){
  document.location.reload(true);
}
  render() {
    return (
      <div class="homesign">
        <div style={{backgroundColor:"white",zIndex:2,marginTop:"-80px",height:100,width:"100%"}}></div>
        <div style={{display:"flex"}}>
        <div style={{fontSize:60,margin:"auto",marginTop:150}}>
          😄
          <b style={{fontSize:40}}> Bye !! See you Soon !</b>
        </div>
       </div>
     </div>


    );
  }
}

export default Homesign;
