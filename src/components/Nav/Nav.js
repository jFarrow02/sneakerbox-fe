import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {APP_ROUTES} from '../../data';
import './Nav.css';

export default class Nav extends Component{

    render(){
        return(
                 <nav className='nav-parent'>
                    <ul className='nav'>
                        <li><NavLink to={APP_ROUTES.login}>Login</NavLink></li>
                        <li><NavLink to={APP_ROUTES.signup}>Signup</NavLink></li>
                    </ul>
                </nav>
           
        );
    }
}
