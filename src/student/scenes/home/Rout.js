import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Home'
import Topics from './Topics'
import Head from '../components/Head'
import Mopics from './Mopics'
import Routhome from './Routhome' 

class Rout extends React.Component{
    render() {
        return (
          <Router>
            <div>
              <Head/>
      
              <hr style={{borderTop: "1px solid white"}}/>
      
              <Routhome/>
            </div>
          </Router>
        );
      }
}

export default Rout;




