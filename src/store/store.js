import {createStore} from 'redux';
import {sneakerboxApp} from './reducers';

const store = createStore(sneakerboxApp);
console.log(store.getState());
export default store;