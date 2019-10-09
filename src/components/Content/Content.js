import React, {Component} from 'react';
import {Nav} from '../index';
import {Route} from 'react-router-dom';
import {Login, MyAccount, Signup} from '../../components';
import './Content.css';

export default class Content extends Component{
   
    render(){
        return(
            <main className='content'>
                <Nav/>
                <Route path='/login' component={Login}/>
                <Route path='/myaccount' component={MyAccount}/>
                <Route path='/signup' component={Signup}/>
            </main>
        );
    }
}