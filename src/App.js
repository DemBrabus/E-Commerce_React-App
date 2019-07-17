import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';


import Header from './Components/Header/Header';
import HomePage from './Pages/Homepage/HomePage';
import ShopPage from './Pages/Shop/ShopPage';
import RegistrationPage from './Pages/SignIn-SignUp/RegistrationPage';
import { auth } from './Firebase/Firebase.utils';


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }



  render(){
    return (
      <div className="App">

        <Header currentUser={this.state.currentUser}/>

        <Switch>

          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={RegistrationPage} />

        </Switch>


      </div>
    );
  }
}

export default App;
