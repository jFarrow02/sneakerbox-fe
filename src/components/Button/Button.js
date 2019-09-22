import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { nullLiteral } from '@babel/types';

export default class Button extends Component{

    render(){

        return(
            <button
                onClick={()=>{this.props.onClick()}}
            >
                {this.props.txt}
            </button>
        )
    }
}

Button.propTypes={
    onClick: PropTypes.func,
    txt: PropTypes.string,
}

Button.defaultProps={
    onClick: null,
    txt: 'Button',
}