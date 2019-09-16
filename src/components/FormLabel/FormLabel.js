import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class FormLabel extends Component{

    render(){
        return(
            <label 
                htmlFor={this.props.for}
            >
                {this.props.txt}
            </label>
        )
    }
}

FormLabel.propTypes={
    for: PropTypes.string,
    txt: PropTypes.string,
}

FormLabel.defaultProps={
    for: '',
    txt: '',
}