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
             label:"Time I Studied",
             backgroundColor:"rgba(255,0,255,0.75)",
             data:[4,5,10,12,32,18,29]
           },
           {
             label:"Time My Friends Studied",
             backgroundColor:"rgba(0,255,0,0.75)",
             data:[29,15,10,12,32,18,29]
           }
         ]
       },
       data1:{
         labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
         datasets: [
           {
             label: 'My First dataset',
             fill: false,
             lineTension: 0.1,
             backgroundColor: 'rgba(75,192,192,0.4)',
             borderColor: 'rgba(75,192,192,1)',
             borderCapStyle: 'butt',
             borderDash: [],
             borderDashOffset: 0.0,
             borderJoinStyle: 'miter',
             pointBorderColor: 'rgba(75,192,192,1)',
             pointBackgroundColor: '#fff',
             pointBorderWidth: 1,
             pointHoverRadius: 5,
             pointHoverBackgroundColor: 'rgba(75,192,192,1)',
             pointHoverBorderColor: 'rgba(220,220,220,1)',
             pointHoverBorderWidth: 2,
             pointRadius: 1,
             pointHitRadius: 10,
             data: [65, 59, 80, 81, 56, 55, 40]
           }
         ]
       },

       data2:{
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
        <div style={{display:"flex"}}><div style={{margin:"auto"}}>
{/*        <div style={{height:550,width:600}}>
            <Line
              options={{
                responsive:true
              }}
              data={this.state.data}
            />
        </div> */}

        <div style={{height:550,width:600}}>
          <Line
              options={{
                responsive:true
              }}
             data={this.state.data1} />
        </div>


        </div></div>


      </div>

    );
  }
}
export default Reports;
