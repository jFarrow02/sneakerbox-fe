import {SET_TOKEN, SET_USER} from './actions';

//1. Specify initial application state
const initialState = {
    authToken: false,
    currentUser: false,
}

//2. Create reducer functions

const authToken = (state=initialState.authToken, action)=>{
    switch(action.type){
        case SET_TOKEN:
            //return(Object.assign({}, state, {authToken: action.authToken}));
            return action.authToken;
        default:
           return state;
    }
}

const currentUser = (state=initialState.currentUser, action)=>{
    switch(action.type){
        case SET_USER:
            //return(Object.assign({}, state, action.currentUser));
            return action.currentUser;
        default:
            return state;
    }
}

//Combine reducers into single object
export const sneakerboxApp = (state={}, action)=>{
    return{
        authToken: authToken(state.authToken, action),  //Give each reducer a PIECE of the overall state to manage
        currentUser: currentUser(state.currentUser, action),
    }
}