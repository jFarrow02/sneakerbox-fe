import React, {Component} from 'react';
import {Button, FormInput, FormLabel} from '../index';
import './Signup.css';
import {API_URL, APP_ROUTES} from '../../data/index';
import {httpPost} from '../../services/index';

export default class Signup extends Component{

    constructor(props){
        super(props);

        this.state ={
            username: '',
            password: '',
        }
    }

    onClick = ()=>{
        const signupUrl = `${API_URL}${APP_ROUTES[4].url}`;
        const {password, username} = this.state;
        httpPost(signupUrl, {username: username, password: password})
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
                <div className='signupform'>
                    <div className='inputgroup'>
                        <FormLabel
                            for='username'
                            txt='Username'
                        />
                        <FormInput
                            className='right'
                            fieldName='username'
                            onChange={this.onChange}
                            type='text'
                            value={this.state.username}
                        />
                        <FormLabel
                            for='password'
                            txt='Password'
                        />
                        <FormInput
                            className='right'
                            fieldName='password'
                            onChange={this.onChange}
                            type='password'
                            value={this.state.password}
                        />
                    </div>
                   <Button
                    className='signupbutton'
                    onClick={this.onClick}
                    txt='signup'
                    />
                </div>
            </section>
        )
    }
}