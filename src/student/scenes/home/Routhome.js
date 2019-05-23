import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Home'
import Topics from './Topics'
import Head from '../components/Head'
import Mopics from './Mopics'

class Routhome extends React.Component{
    render() {
        return (
          <div>      
              <Route exact path="/readbytes" component={Home} />
              <Route path="/message" component={Mopics} />
              <Route path="/home" component={Topics} />
          </div>
        );
      }
}

export default Routhome;




