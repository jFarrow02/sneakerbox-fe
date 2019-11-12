import React, {Component} from 'react';
import {connect} from 'react-redux';
import {httpGet} from '../../services/httpService';
import {API_URL, APP_ROUTES} from '../../data/index';

class MyAccount extends Component{
    static URL = `${API_URL}${APP_ROUTES[2].url}`;
    constructor(props){
        super(props);
    }

    componentDidMount = ()=>{
       httpGet(MyAccount.URL, {'Content-Type': 'application/json', 'Authorization' : `Bearer ${this.props.token}`})
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