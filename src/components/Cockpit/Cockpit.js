import React , { useEffect } from 'react';
import classes from './Cockpit.module.css';
import './Cockpit.css'

const Cockpit = (props) => {
  useEffect( ()=> {
    console.log('[Cockpit.js] useEffect');
    
    //HTTP Request!
    setTimeout(()=> {
      alert('Saved data to cloud');
    })
    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect')
    }
  }, [props.persons]);
  
    const assignedClasses =[];
    let btnClass = '';

    if(props.showPersons) {
        btnClass = classes.red;
    }

    if(props.persons.length<= 2){
      assignedClasses.push('Red');
    }
    
    if(props.persons.length<= 1) {
      assignedClasses.push('Bold');
    }
     
    return(
        <div className= {classes.Cockpit}>
            <h1>{props.name}</h1>
            <p className={assignedClasses.join(' ')}>I'm learning React</p>
            <button 
                className={btnClass}
                onClick={props.clicked}>show</button>
        </div>
    );
}

export default Cockpit;

      