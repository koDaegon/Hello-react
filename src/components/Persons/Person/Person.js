import React, {Component} from 'react';
import classes from './Person.module.css';
import Aux from '../../../hoc/Auxiliary' 
import WithClass from '../../../hoc/withClass'

class Person extends Component {
    render() {
        console.log('[Person.js] rendering...');
        return (
                <Aux>
                <p  onClick={this.props.click}>
                    My name is {this.props.name} and I'm {this.props.age} years old! {this.props.children}</p>
                <input type = "text" onChange={this.props.changed} value = {this.props.name} />
                </Aux>    
        );
    }
}; 

export default WithClass(Person ,classes.Person);
