import React, {Component} from 'react';
import {httpGet} from '../../services';
import {API_URL} from '../../data';

export default class Login extends Component{
    state = {
        msg: '',
    };

    componentDidMount(){
        httpGet(API_URL)
            .then((res)=>{
                this.setState({msg: res.data.msg});
            });
    }

    render(){
        return(
            <section>
                <h2>Login Page</h2>
                <div>{this.state.msg}</div>
            </section>
        )
    }
}