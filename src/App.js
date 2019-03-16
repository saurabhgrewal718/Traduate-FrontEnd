import React, { Component } from 'react';
import Head from './student/scenes/components/Head';
import Allhomeroutes from './student/router/Allhomeroutes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Allhomeroutes/>
      </div>
    );
  }
}

export default App;
