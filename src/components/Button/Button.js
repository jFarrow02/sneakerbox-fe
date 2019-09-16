import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component{
    constructor(props){
        super(props);
    }

    render(){

        return(
            <button>
                {this.props.txt}
            </button>
        )
    }
}

Button.propTypes={
    txt: PropTypes.string,
}

Button.defaultProps={
    txt: 'Button',
}