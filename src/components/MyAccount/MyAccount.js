import React, {Component} from 'react';
import {connect} from 'react-redux';
//import {httpGet} from '../../services/httpService';
import axios from 'axios';

class MyAccount extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount = ()=>{
        axios(
            {
                method: 'GET',
                url: 'http://localhost:9000/myaccount',
                headers: {
                    'Content-Type'  : 'application/json',
                    'Authorization' :  this.props.token,
                }
            }
        )
        .then((res)=>{
            console.log(res);
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    render(){
        return(
            <div>
                <h2>Hello, {this.props.currentUser}</h2>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {currentUser: state.currentUser, token: state.authToken};
}

export default connect(mapStateToProps)(MyAccount);