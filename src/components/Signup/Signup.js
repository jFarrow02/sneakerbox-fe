import React, {Component} from 'react';
import './Signup.css';
import {API_URL, APP_ROUTES} from '../../data';
import {httpPost} from '../../services';

export default class Signup extends Component{

    constructor(props){
        super(props);

        this.state ={
            username: '',
            password: '',
        }
    }

    onClick = ()=>{
        const signupUrl = `${API_URL}${APP_ROUTES[5].url}`;
        httpPost(signupUrl, {username: this.state.username, password: this.state.password}, {'Content-Type' : 'application/json'})
            .then((res)=>{

            })
            .catch((err)=>{

            });
    }

    onChange = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name] : value});
    }

    render(){
        return(
            <section>
                <h2>Signup Page</h2>
            </section>
        )
    }
}