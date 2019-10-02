import React, {Component} from 'react';
import classes from './Person.module.css';
import Aux from '../../../hoc/Auxiliary' 
import WithClass from '../../../hoc/withClass'
import PropTypes from 'prop-types'

class Person extends Component {

    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
        }
    
    componentDidMount() {
        this.inputElementRef.current.focus();
    }

    render() {
        console.log('[Person.js] rendering...');
        return (
                <Aux>
                <p  onClick={this.props.click}>
                    My name is {this.props.name} and I'm {this.props.age} years old! {this.props.children}</p>
                <input 
                type = "text" 
                onChange={this.props.changed} 
                ref={this.inputElementRef}
                value = {this.props.name} />
                </Aux>    
        );
    }
} 

Person.propTypes = {
    click : PropTypes.func,
    name : PropTypes.string,
    age : PropTypes.number
};

export default WithClass(Person ,classes.Person);
