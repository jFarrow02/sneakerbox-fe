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
                name={this.props.fieldName}
                onChange={(e)=>{this.props.onChange(e)}}
                value={this.props.value}
            />
        )
    }
}

FormInput.propTypes={
    fieldName: PropTypes.string,
    onChange: PropTypes.func,
    type: PropTypes.string,
    value: PropTypes.string,
};

FormInput.defaultProps={
    fieldName: '',
    onChange: null,
    type: 'text',
    value: '',
};