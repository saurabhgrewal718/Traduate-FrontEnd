import React, { Component } from 'react';
import Item1 from './Item1'
import Item2 from './Item2'

class Preferences1 extends React.Component {


  render() {
    return (
          <div>

            <div>
              <div style={{height:750}}>
                <div className="header" style={{height:"10%",paddingTop:10}}>
                   <b style={{fontFamily:'Ultra',fontSize:34,paddingLeft:80}}>traduate</b>
                </div>

                <Item1/>

                <div className="footer" style={{backgroundColor:"#CAEBF2",height:"12%"}}></div>

             </div>
           </div>

        </div>


    );
  }
}


export default Preferences1;
