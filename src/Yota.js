import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import './Yota.css'
import Science from './student/scenes/home/components/card1/components/Science';
import Maths from './student/scenes/home/components/card1/components/Maths';


const Profile = () => <div>You're on the Profile Tab</div>;
const Comments = () => <div>You're on the Comments Tab</div>;
const Contact = () => <div>You're on the Contact Tab</div>;

class Yota extends Component {
  render() {
    const { path } = this.props.match;

    return (
      <div>
        <div className="links">
          <Link to={`${path}`} className="link">Science</Link>
          <Link to={`${path}/maths`} className="link">Maths</Link>
          <Link to={`${path}/contact`} className="link">Contact</Link>
        </div>
        <div className="tabs">
          <Switch>
              <Route path={`${path}`} exact component={Science} />
              <Route path={`${path}/maths`} component={Maths} />
              <Route path={`${path}/contact`} component={Contact} />
          </Switch>
        </div>
      </div>
    );
  }
}
export default Yota;
