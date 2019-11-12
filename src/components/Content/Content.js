import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {
    Banner,
    Footer,
    Login,
    Main,
    MyAccount,
    SideNav,
    Signup
} from '../../components';
import './Content.css';

export default class Content extends Component{
   
    render(){
        return(
            <main className='content'>
                <Route path='/login' component={Login}/>
                <Route path='/myaccount' component={MyAccount}/>
                <Route path='/signup' component={Signup}/>
                <Banner/>
                <SideNav/>
                <Main/>
                <Footer/>
            </main>
        );
    }
}