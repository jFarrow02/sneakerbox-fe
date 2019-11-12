import React from 'react';
import {Link} from 'react-router-dom';
import {APP_ROUTES} from '../../data';
import './SideNav.css';

export default function SideNav(){
    const config = APP_ROUTES;
    return(
        <nav className='sidenav'>
            {
                config.map((c, idx)=><Link className='sidenav--link' key={`link-${idx}`} to={c.url}>{c.txt}</Link>)
            }
        </nav>
    )
}