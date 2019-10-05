import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {APP_ROUTES} from '../../data';
import './Nav.css';

export default class Nav extends Component{

    render(){
        return(
            <nav className='nav-parent'>
                <ul className='nav'>
                    {APP_ROUTES.map((current, idx)=>{
                        return(<li key={idx}><NavLink to={current.url}>{current.txt}</NavLink></li>);
                    })}
                </ul>
            </nav>
        );
    }
}
