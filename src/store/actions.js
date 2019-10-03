export const GET_TOKEN = 'GET_TOKEN';
export const SET_TOKEN = 'SET_TOKEN';

export const getToken = ()=>{
    return({type: GET_TOKEN});
}

export const setToken = (tokenVal, user)=>{
    return({type: SET_TOKEN, authToken: tokenVal, currentUser: user});
}