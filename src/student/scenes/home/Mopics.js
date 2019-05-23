import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Yes from './Yes'
import Home from './Home'
import Topic from "./Topic";
import Workspace from './Workspace'
import Science from "./components/card1/components/Science";
import Teacherstories from "./components/card1/Teacherstories";
import Card1 from "./components/card1/Card1";
import Maths from "./components/card1/components/Maths";


class Mopics extends React.Component{
    render() {
        console.log(this.props)
        return (
          <div style={{position:"relative"}}>
            <div style={{position:"relative",backgroundColor:"white",width:"20%",float:"left"}}>
              <div style={{display:"flex"}}>
                <div style={{margin:"auto"}}>
                   <Home/>
                </div>
              </div>    
            </div>
            <div style={{position:"relative",backgroundColor:"white",width:"66%",float:"left"}}>
            <div style={{padding:5,borderRadius:10,backgroundColor: "white",boxShadow: "0 2px 4px 0 rgba(0,0,0,0.2)"}}>
                <div className="links">
                <Link to={`${this.props.match.url}`} className="link"><b style={{fontFamily: "Questrial, sans-serif",color:"#247e6c",fontSize:20}}><i className="fas fa-microscope"></i> </b></Link>
                <Link to={`${this.props.match.url}/maths`} className="link"><b style={{fontFamily: "Questrial, sans-serif",color:"#a9c6de",fontSize:20}}><i className="fas fa-microscope"></i></b></Link>
                <Link to={`${this.props.match.url}/props-v-state`} className="link"><b style={{fontFamily: "Questrial, sans-serif",color:"#a9c6de",fontSize:20}}><i className="fas fa-microscope"></i></b></Link>
                </div>
            </div>

            <Route path={`${this.props.match.path}/:topicId`} component={Topic} />
            <Route
              exact
              path={this.props.match.path}
              render={() => <Maths/>}
            />    
            </div>

            <div style={{position:"relative",backgroundColor:"white",width:"13%",float:"right"}}>
               <Card1/>
            </div>

            
          </div>
        );
      }
}




  

export default Mopics