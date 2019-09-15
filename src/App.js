import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import {Content, Login} from './components';

function App() {
  return (
    <div className="App">
      <h1>Sneakerbox</h1>
      <Route path='/login' component={Login}/>
      <Content/>
    </div>
  );
}

export default App;
