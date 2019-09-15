import React, {Component} from 'react';
import {httpGet} from '../../services';
import {API_URL} from '../../data';

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
                <h2>Content</h2>
                <div>{this.state.msg}</div>
            </main>
        );
    }
}