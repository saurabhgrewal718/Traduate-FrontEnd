import React from 'react';
import {Line} from 'react-chartjs-2';

class Reports extends React.Component {
  constructor(props){
     super(props);
     this.state={
       data:{
         labels:["1","2","3","4","5"],
         datasets:[
           {
             label:"Questions answered in a week",
             backgroundColor:"rgba(255,0,255,0.75)",
             data:[4,5,10,12,32,18,29]
           },
           {
             label:"Questions asked!",
             backgroundColor:"rgba(0,255,0,0.75)",
             data:[29,15,10,12,32,18,29]
           }
         ]
       },
       data1:{
         labels:["1","2","3","4","5"],
         datasets:[
           {
             label:"New Topics",
             backgroundColor:"rgba(255,0,255,0.75)",
             data:[29,15,10,12,32,18,29]
           },
           {
             label:"New Concepts",
             backgroundColor:"rgba(0,255,0,0.75)",
             data:[4,5,7,9,16,18,29,21,10]
           }
         ]
       }
     }
  }
  render(){
    return(
      <div>

        <div style={{position:"relative",float:"left",height:550,width:600}}>
            <Line
              options={{
                responsive:true
              }}
              data={this.state.data}
            />
        </div>
        <div style={{position:"relative",float:"right",height:550,width:600}}>
            <Line
              options={{
                responsive:true
              }}
              data={this.state.data1}
            />
        </div>
      </div>

    );
  }
}
export default Reports;
