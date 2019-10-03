import {GET_TOKEN, SET_TOKEN} from './index';
import {combineReducers} from 'react-redux';

//1. Specify initial application state
const initialState = {
    authToken: null,
    currentUser: null,
}

const getState = (state=initialState)=>{
    return state;
}

const handleTokens = (state=initialState, action)=>{
    switch(action.type){
        case GET_TOKEN:
            return(state.authToken);
        case SET_TOKEN:
            return(Object.assign({}, state, {authToken: action.authToken, currentUser: action.currentUser}));
        default:
            getState();
    }
}

const sneakerboxApp = combineReducers(
    {
        getState,
        handleTokens,
    }
);

export default sneakerboxApp;