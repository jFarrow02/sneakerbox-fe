import React, {Component} from 'react';
import {Nav} from '../index';
import {Route} from 'react-router-dom';
import {Login, Signup} from '../../components';
import './Content.css';

export default class Content extends Component{
   
    render(){
        return(
            <main className='content'>
                <Nav/>
                <Route path='/login' component={Login}/>
                <Route path='/signup' component={Signup}/>
            </main>
        );
    }
}