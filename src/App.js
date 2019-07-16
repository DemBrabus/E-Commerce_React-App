import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';


import HomePage from './Pages/Homepage/HomePage';
import HatsPage from './Pages/Hatspage/HatsPage';

function App() {
  return (
    <div className="App">


      <Switch>

        <Route exact path='/' component={HomePage} />
        <Route path='/shop/hats' component={HatsPage} />


      </Switch>


    </div>
  );
}

export default App;
