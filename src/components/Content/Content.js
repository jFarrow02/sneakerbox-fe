import React, {Component} from 'react';
import {httpGet} from '../../services';
import {API_URL} from '../../data';
import {Nav} from '../index';

export default class Content extends Component{
    state = {
        msg: '',
    };

    componentDidMount(){
        httpGet(API_URL)
            .then((res)=>{
                this.setState({msg: res.data.msg});
            });
    }

    render(){
        return(
            <main>
                <Nav/>
                <div>{this.state.msg}</div>
            </main>
        );
    }
}