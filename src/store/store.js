import {createStore} from 'redux';
import {sneakerboxApp} from './reducers';

export const store = createStore(sneakerboxApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
