import React, {Component} from 'react';
import {httpGet} from '../../services';
import {API_URL, LOGIN_CONFIG,} from '../../data';
import {Button, FormInput, FormLabel} from '../index';
import './Login.css';

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
            <section className='loginsection'>
                <h2>Login Page</h2>
                <form className='loginform'>
                   {LOGIN_CONFIG.map((current, idx)=>{
                    return(
                        <div className='inputgroup'
                            key={`inputgroup-${idx}`}
                        >
                            <FormLabel
                                for={current.name}
                                txt={current.txt}
                                key={`label-${idx}`}
                            />
                            <FormInput
                                className='right'
                                type={current.type}
                                name={current.name}
                                key={`input-${idx}`}
                            />
                        </div>
                    );
                   })}
                   <Button
                    className='loginbutton'
                    txt='Login'
                    />
                </form>
            </section>
        );
    }
}