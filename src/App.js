import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>I react app</h1>
       <p> this is working</p>
       <Person name='Bruno' age='12' />
       <Person name='Jackie' age='78' />
      </div>
    );
  }
}

export default App;
