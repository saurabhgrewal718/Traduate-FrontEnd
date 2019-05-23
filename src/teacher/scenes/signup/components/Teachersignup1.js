import React, { Component } from 'react';
import Teachersign1 from './Teachersign1'
import Teachersign2 from './Teachersign2'

class Teachersignup1 extends React.Component {


  render() {
    return (
      <div>

        <div>
          <div style={{height:750}}>
            <div className="header" style={{height:"10%",paddingTop:10}}>
              <b style={{fontFamily:'Ultra',fontSize:34,paddingLeft:80}}>traduate</b>
            </div>

            <Teachersign1 compo={this.props}/>

            <div className="footer" style={{backgroundColor:"#CAEBF2",height:"12%"}}></div>

         </div>
       </div>

    </div>


    );
  }
}


export default Teachersignup1;
