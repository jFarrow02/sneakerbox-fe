import React, {useState} from 'react';
import {FOOTER_CONFIG} from '../../data';

export default function Footer(){

    const [copyright, setCopyright] = useState(FOOTER_CONFIG.copyright);
    return(
        <div className='footer'>
            <p>Copyright &copy; {copyright} Sneakerbox.co</p>
            <p>All rights reserved.</p>
        </div>
    )
}