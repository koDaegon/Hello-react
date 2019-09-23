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
    showPersons : false
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
        <Cockpit 
          name = {this.props.appName}
          persons= {this.state.persons}
          showPersons= {this.state.showPersons}
          clicked= {this.togglePersonsHandler}/>
        {persons}
      </div>
    );
  }
}

export default App;

// const app = props => {
  
//   const [personStaate , setPersonState] = useState({
//     person : [
//       {name : 'kim' , age : '22'},
//       {name : 'park' , age : '25'},
//       {name : 'Lee' , age : '27'}
//     ],
//   })

//   const [otherState , setOtherState] = useState("others");

//   const changePersonName = props => {
//     setPersonState ({
//       person : [
//         {name : 'Kim' , age : '00'},
//         {name : 'Park' , age : '01'},
//         {name : 'Lee' , age : '02'}
//       ]
//     })
//   }

//   console.log(personStaate , otherState);
  
//   return (
//           <div className="App">
//             <h1>Hello World</h1>
//             <p>I'm learning React</p>
//             <button onClick={changePersonName}>change</button>
//             <Person name={personStaate.person[0].name} age ={personStaate.person[0].age} />
//             <Person name= {personStaate.person[1].name}age = {personStaate.person[1].age}> I want to be a Dev! </Person>
//             <Person name={personStaate.person[2].name} age = {personStaate.person[2].age}/>
//           </div>
//         );
// };


