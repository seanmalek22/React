import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [ personsState, setPersonsState] = useState({
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26}
    ],
    otherState: 'Some other value',
    showPersons: false
  });

  const switchNameHandler = (newName) => {
    //console.log('Was clicked!');
    setPersonsState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27}
      ]
    });
  };

  const nameChangeHandler = (event) => {
    setPersonsState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 27}
      ]
    });
  }

  const togglePersonsHandler = () => {
    const doesShow = personsState.showPersons;
    personsState.setState({showPersons: !doesShow});


  }

  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  };

  let persons = null;

  if (personsState.showPersons === true) {
    persons = (
      <div>
        <Person 
          name={personsState.persons[0].name} 
          age={personsState.persons[0].age} />
        <Person 
          name={personsState.persons[1].name} 
          age={personsState.persons[1].age} 
          click={switchNameHandler.bind(this, "Max")}
          changed={nameChangeHandler}  >My Hobbies: Racing</Person>
        <Person 
          name={personsState.persons[2].name} 
          age={personsState.persons[2].age} />
      </div>
    );
  }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button 
        style={style}
        onClick={togglePersonsHandler}>Switch Name</button>
        
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now??'));
}

export default app;