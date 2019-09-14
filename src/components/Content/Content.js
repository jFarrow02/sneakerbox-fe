import React, {Component} from 'react';
import {httpGet} from '../../services';

export default class Content extends Component{
    state = {
        msg: '',
    };

    componentDidMount(){
        httpGet('http://localhost:8080/')
            .then((res)=>{
                this.setState({msg: res.data.msg});
            });
    }

    render(){
        return(
            <main>
                <h2>Content</h2>
                <div>{this.state.msg}</div>
            </main>
        );
    }
}