import React, {Component} from 'react';
import './Person.css';
import Aux from '../../../hoc/Auxiliary' 

class Person extends Component {
    render() {
        console.log('[Person.js] rendering...');
        return (
            // <div className="Person">
                <Aux>
                <p  onClick={this.props.click}>
                    My name is {this.props.name} and I'm {this.props.age} years old! {this.props.children}</p>
                <input type = "text" onChange={this.props.changed} value = {this.props.name} />
                </Aux>    
            // </div>
        );
    }
}; 

export default Person;
