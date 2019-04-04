import React, { Component } from 'react';
import Head from './student/scenes/components/Head';
import Allhomeroutes from './student/router/Allhomeroutes';
import Signcontainer from './student/scenes/signup/Signcontainer';
import { connect } from "react-redux";
import { Skeleton } from 'antd';


class App extends Component {


  render() {
    const { fetching, question, onRequestQuestion, error } = this.props;
    return (
      <div >
         <Allhomeroutes/>
      </div>
    );
  }
}


export default App;





import React, { Component } from 'react';
import Head from './student/scenes/components/Head';
import Allhomeroutes from './student/router/Allhomeroutes';
import Signcontainer from './student/scenes/signup/Signcontainer';
import { connect } from "react-redux";
import { Skeleton } from 'antd';


class App extends Component {

componentDidMount(){
  this.props.onRequestQuestion();
}

  render() {
    const { fetching, question, onRequestQuestion, error } = this.props;
    return (
      <div >
      <div>
      {console.log(question)}
      {question&&question.length>0&&question.map((object, i) => {
         return <div key={i}>
                    {[ object.question ,
                       // remove the key
                       <b key={i}> {object.question} </b> ,
                       object.date_of_question
                    ]}
                </div>;

       })}
       </div>

        {question ? (
          <p className="App-intro">Keep clicking for new question</p>
        ) : (
          <p className="App-intro">Replace the React icon with a question!</p>
        )}

        {fetching ? (
          <div>
            <button disabled>Fetching...</button>
            <Skeleton active />
          </div>
        ) : (
          <button onClick={onRequestQuestion} >Request a question</button>
        )}

        {error && <p style={{ color: "red" }}>Uh oh - something went wrong!</p>}

      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    fetching: state.fetching,
    question: state.question,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRequestQuestion: () => dispatch({ type: "GET_QUESTION_REQUEST" })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);




import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

////////////////////////////////////////////////////////////
// 1. Click the public page
// 2. Click the protected page
// 3. Log in
// 4. Click the back button, note the URL each time

function AuthExample() {
  return (
    <Router>
      <div>
        <AuthButton />
        <ul>
          <li>
            <Link to="/public">Public Page</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>
        <Route path="/public" component={Public} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/protected" component={Protected} />
      </div>
    </Router>
  );
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

const AuthButton = withRouter(
  ({ history }) =>
    fakeAuth.isAuthenticated ? (
      <p>
        Welcome!{" "}
        <button
          onClick={() => {
            fakeAuth.signout(() => history.push("/"));
          }}
        >
          Sign out
        </button>
      </p>
    ) : (
      <p>You are not logged in.</p>
    )
);

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        fakeAuth.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

function Public() {
  return <h3>Public</h3>;
}

function Protected() {
  return <h3>Protected</h3>;
}

class Login extends Component {
  state = { redirectToReferrer: false };

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true });
    });
  };

  render() {
    let { from } = this.props.location.state || { from: { pathname: "/" } };
    let { redirectToReferrer } = this.state;

    if (redirectToReferrer) return <Redirect to={from} />;

    return (
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={this.login}>Log in</button>
      </div>
    );
  }
}

export default AuthExample;
