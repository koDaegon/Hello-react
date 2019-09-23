import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
class App extends Component {
  constructor(props) {
    super(props)
    console.log('[App.js] initialization');
  }

  state  = {
    persons: [
      {id : 'agsh212', name : 'Kim' , age : 22},
      {id : 'agsh123', name : 'Dkim' , age : 22},
      {id : 'agsh3' , name : 'Park' , age : 27}
    ],
    others : "Hey Jude",
    showPersons : false,
    showCockpit : true
  };

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps' , props);
    return state;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  } 

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }
  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }


  nameChangedHandler =(event , id) => {
    const personIndex = this.state.persons.findIndex(p =>{
      return  p.id ===id
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons : persons
    });
  }

  togglePersonsHandler = () => {
    const currentStatus = this.state.showPerson;
    this.setState({
      showPerson : !(currentStatus)
    });
  }

  toggleCockpitHandler = () => {
    const currentCockpitStatus = this.state.showCockpit;
    this.setState({
      showCockpit : !(currentCockpitStatus)
    });
  }

  deletePersonHandler = ( personIndex ) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice( personIndex, 1 );
    this.setState( { persons: persons } );
  }

  render() {
    let persons  = null;
 
    if(this.state.showPerson){
      persons = <Persons
              persons = {this.state.persons}
              clicked = {this.deletePersonHandler}
              changed = {this.nameChangedHandler} />;
    }

    return (
      <div className='App'>
        <button onClick = {this.toggleCockpitHandler}>
          Remove Cockpit
        </button>
        {this.state.showCockpit ? 
          <Cockpit 
            name = {this.props.appName}
            personsLength= {this.state.persons.length}
            showPersons= {this.state.showPersons}
            clicked= {this.togglePersonsHandler}/>
          : null}
        {persons}
      </div>
    );
  }
}

export default App;

