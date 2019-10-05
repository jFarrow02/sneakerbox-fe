//Action constants
export const SET_TOKEN = 'SET_TOKEN';
export const SET_USER = 'SET_USER';

//Action Creator functions
//use like: dispatch(setToken('foo', 'superUser123'))
//OR dispatch an action using a 'bound creator':
/**
 * const setToken = (tokenVal, user) =>dispatch({type: SET_TOKEN, authToken: tokenVal, currentUser: user});
 * setToken('foo', 'superUser123');
 */

export const setToken = (tokenVal)=>{
    return({type: SET_TOKEN, authToken: tokenVal});
}

export const setUser = (user)=>{
    return({type: SET_USER, currentUser: user});
}