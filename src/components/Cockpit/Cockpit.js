import React , { useEffect , useRef } from 'react';
import classes from './Cockpit.module.css';
import './Cockpit.css'

const Cockpit = (props) => {
  const inputBtnRef = useRef(null);
  
  useEffect( ()=> {
    console.log('[Cockpit.js] useEffect');
    
    //HTTP Request!
    // setTimeout(()=> {
    //   alert('Saved data to cloud');
    // })
    inputBtnRef.current.click();
    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect')
    }
  }, []);

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return (()=> {
      console.log('[Cockpit.js] 2nd cleanup work in useEffect');
    })
  });
  
    const assignedClasses =[];
    let btnClass = '';

    if(props.showPersons) {
        btnClass = classes.red;
    }

    if(props.personsLength<= 2){
      assignedClasses.push('Red');
    }
    
    if(props.personsLength<= 1) {
      assignedClasses.push('Bold');
    }
     
    return(
        <div className= {classes.Cockpit}>
            <h1>{props.name}</h1>
            <p className={assignedClasses.join(' ')}>I'm learning React</p>
            <button 
                className={btnClass}
                ref={inputBtnRef}
                onClick={props.clicked}>
                show</button>
         </div>
    );
}

export default React.memo(Cockpit);

      