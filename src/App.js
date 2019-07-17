import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';


import Header from './Components/Header/Header';
import HomePage from './Pages/Homepage/HomePage';
import ShopPage from './Pages/Shop/ShopPage';
import RegistrationPage from './Pages/SignIn-SignUp/RegistrationPage';


function App() {
  return (
    <div className="App">

      <Header />

      <Switch>

        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={RegistrationPage} />

      </Switch>


    </div>
  );
}

export default App;
