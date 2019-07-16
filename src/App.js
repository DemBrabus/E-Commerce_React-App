import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';


import HomePage from './Pages/Homepage/HomePage';
import ShopPage from './Pages/Shop/ShopPage';


function App() {
  return (
    <div className="App">


      <Switch>

        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />


      </Switch>


    </div>
  );
}

export default App;
