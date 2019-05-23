import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Yes from './Yes'
import Home from './Home'
import Workspace from "./Workspace";
import Science from "./components/card1/components/Science";
import Maths from "./components/card1/components/Maths";

class Topic extends React.Component{
    render() {
        const isEditMode = this.props.match.params.topicId;
        console.log(isEditMode)
        return (
          <div style={{backgroundColor:"white"}}>
          
          {(() => {
            switch(isEditMode) {
            case 'science':
                return <div>Science</div>;
            case 'maths':
                return <div>Maths</div>;
            case 'props-v-state':
                return <div>hey man its a Geometry </div>;
            default:
                return <div>found null</div>;
            }
        })()}     
          </div>
        );
      }
}

export default Topic