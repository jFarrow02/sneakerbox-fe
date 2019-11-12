import React from 'react';
import {Link} from 'react-router-dom';
import {APP_ROUTES} from '../../data';

export default function SideNav(){
    const config = APP_ROUTES;
    return(
        <nav>
            {
                config.map((c, idx)=><Link key={`link-${idx}`} to={c.url}>{c.txt}</Link>)
            }
        </nav>
    )
}