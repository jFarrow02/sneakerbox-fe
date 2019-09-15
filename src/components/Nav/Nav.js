import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './Nav.css';

export default class Nav extends Component{

    render(){
        return(
                 <nav >
                    <ul className='nav'>
                        <li><NavLink to="/login">Login</NavLink></li>
                    </ul>
                </nav>
           
        );
    }
}
