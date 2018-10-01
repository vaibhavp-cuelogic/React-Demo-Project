import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { 'name': 'Max', age: 28 },
      { 'name': 'Manu', age: 29 },
      { 'name': 'Jon', age: 30 }
    ]
  }

  switchNameHandler = (newName) => {
    //console.log('Switched Occured!');
    //Don't do this as it not change the state 
    //this.state.persons[0].name="Maximaa";

    // Use setState method which is from extended Component class:
    this.setState({
      persons: [
        { 'name': newName, age: 28 },
        { 'name': 'Manus', age: 29 },
        { 'name': 'Jon', age: 31 }
      ]
    });
  }

  changeNameHandler = (event) => {
    this.setState({
      persons: [
        { 'name': 'Max', age: 28 },
        { 'name': event.target.value, age: 29 },
        { 'name': 'Jon', age: 31 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hello World...!</h1>
        <p>This is first React App.</p>
        <button onClick={() => this.switchNameHandler('ArrowMax')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'BindMax')}
          changed={this.changeNameHandler} 
          >My Hobbies is: Racing</Person> {/*Recomended way to pass argument to method is using bind() insted of ()=> function used in button click*/}
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello World...!'));

  }
}

export default App;
