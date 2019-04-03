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
