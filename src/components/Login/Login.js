import React, {Component} from 'react';
import {httpPost} from '../../services';
import {API_URL, APP_ROUTES} from '../../data';
import './Login.css';
import {connect} from 'react-redux';
import {store} from '../../store/store';
import {setToken, setUser} from '../../store/index';

class Login extends Component{
    constructor(props){
        super(props);
    }

    state = {
        password: '',
        username: '',
    };

    onClick = ()=>{
        const loginUrl = `${API_URL}${APP_ROUTES[0].url}`;
        const {password, username} = this.state;
        httpPost(loginUrl, {username: username, password: password}, {'Content-Type' : 'application/json'})
            .then((res)=>{
                /**
                 * Get auth token from response upon successful
                 * authentication and save to redux store
                 */
                let token = res.data.token,
                    currentUser = res.data.currentUser;
                store.dispatch(setToken(token));
                store.dispatch(setUser(currentUser));
            })
            .catch((err)=>{
                console.log(err);
            });
    }

    onChange = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name] : value});
    }

    render(){
        return(
            <section className='loginsection'>
                <h2>Login Page</h2>
            </section>
        );
    }
}

function mapStateToProps(state){
    return {authToken: state.authToken, currentUser: state.currentUser}
};

export default connect(mapStateToProps)(Login);