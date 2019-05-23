import React, { Component } from 'react';
import './Workspace.css';
import Card1 from './components/card1/Card1'
import {BrowserRouter,Switch,Route,Link,Redirect,withRouter} from "react-router-dom";

const Profile = () => <div>You're on the Profile Tab</div>;
const Comments = () => <div>You're on the Comments Tab</div>;
const Contact = () => <div>You're on the Contact Tab</div>;


class Workspace extends Component {

  render() {
    const { path } = this.props.match;
    return (
      <div >
        <div className="workspace">
          <div className="workspacecontainer">
              <Card1/>
          </div>
        </div>


     </div>
    );
  }
}

export default withRouter(Workspace);
