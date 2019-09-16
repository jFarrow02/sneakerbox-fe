import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class FormInput extends Component{

    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <input 
                type={this.props.type}
                name={this.props.name}
                value={this.props.value}
            />
        )
    }
}

FormInput.propTypes={
    name: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
};

FormInput.defaultProps={
    name: '',
    type: 'text',
    value: '',
};