import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';


import Header from './Components/Header/Header';
import HomePage from './Pages/Homepage/HomePage';
import ShopPage from './Pages/Shop/ShopPage';
import RegistrationPage from './Pages/SignIn-SignUp/RegistrationPage';
import { auth, createUserProfileDocument } from './Firebase/Firebase.utils';
import { create } from 'domain';


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id, 
              ...snapShot.data()
            }
          });
          console.log(this.state)
        });
      } else {
        this.setState({ currentUser: userAuth });
      }

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
