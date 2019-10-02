import React, { Component } from 'react';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Auxiliary';
import WithClass from '../hoc/withClass';
import classes from './App.module.css';
class App extends Component {
  constructor(props) {
    super(props)
    console.log('[App.js] initialization');
  }

  state  = {
    persons: [
      {id : 'sh212', name : 'Kim' , age : 22},
      {id : 'sh123', name : 'Dkim' , age : 22},
      {id : 'sh331' , name : 'Park' , age : 27}
    ],
    others : "Hey Jude",
    showPersons : false,
    showCockpit : true,
    nameChange : 0
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

    //Guranteed for updating the latest state
    this.setState((prevState) => {
      return{
        persons : persons,
        nameChange : prevState.nameChange+1
      };
    });
  };

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
     <Aux>
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
      </Aux>
    );
  }
}

export default WithClass(App, classes.App);

