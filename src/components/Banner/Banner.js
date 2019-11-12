import React, {useState} from 'react';
import './Banner.css';

export default function Banner(){

    const [title, setTitle] = useState('Sneakerbox');

    return(
        <div className='banner'>
            <h1>{title}</h1>
        </div>
    )
}