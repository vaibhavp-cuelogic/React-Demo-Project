import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello World...!</h1>
        <p>This is first React App.</p>
        <Person name="Max" age="28" />
        <Person name="Manu" age="29">My Hobbies is: Racing</Person>
        <Person name="Jon" age="30" />
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello World...!'));

  }
}

export default App;
