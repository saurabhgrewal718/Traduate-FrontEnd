import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Head from '../components/Head'


function Yolo() {
  return (
    <Router>
    <div>
      <Head/>

      <hr style={{borderTop: "1px solid white"}}/>

      <Route exact path="/readbytes" component={Readbytes}/>
      <Route path="/message" component={Message} />
      <Route path="/home" component={Top} />
    </div>
  </Router>
  );
}

function Readbytes() {
  return (
    <div>
      <h2>readbytes</h2>
    </div>
  );
}

function Message() {
  return (
    <div>
      <h2>mesage</h2>
    </div>
  );
}

function Top({ match }) {
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:topicId`} component={To} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
}

function To({ match }) {
  return (
    <div>
      <h3>{match.params.topicId}</h3>
    </div>
  );
}

export default Yolo;
