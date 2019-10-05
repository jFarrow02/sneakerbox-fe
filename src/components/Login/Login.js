import React, {Component} from 'react';
import {httpGet, httpPost} from '../../services';
import {API_URL, APP_ROUTES} from '../../data';
import {Button, FormInput, FormLabel} from '../index';
import './Login.css';

export default class Login extends Component{
    constructor(props){
        super(props);
    }

    state = {
        password: '',
        username: '',
    };

    onClick = ()=>{
        const loginUrl = `${API_URL}${APP_ROUTES[0].url}`;
        const {password, username} = this.state;
        httpPost(loginUrl, {username: username, password: password})
            .then((res)=>{
                /**
                 * Get auth token from response upon successful
                 * authentication and save to redux store
                 */
                let token = res.token;
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
            <section className='loginsection'>
                <h2>Login Page</h2>
                <div className='loginform'>
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
                    className='loginbutton'
                    onClick={this.onClick}
                    txt='Login'
                    />
                </div>
            </section>
        );
    }
}