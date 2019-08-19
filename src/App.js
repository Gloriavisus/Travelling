import React, {Component} from 'react';
import {BrowserRouter as Router, Route ,Switch} from 'react-router-dom';

import Navbar from './components/Navbar.js';
import PrivateRoute from './components/PrivateRoute.js';
import AnonRoute from './components/AnonRoute.js';

import Trip from './pages/Trip';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Countries from './pages/Countries';
import MyProfile from './pages/MyProfile';
import CountryDetails from './pages/CountryDetails';
import MyProfileForm from './pages/MyProfileForm';


import AuthProvider from './contexts/auth-context.js';

import './App.css';
import 'milligram';


class App extends Component {
  render() {
    return (
      <Router>
        <AuthProvider>
          <header>
            <Navbar />
          </header>
            <div className="container">
            {/* <h1>Travelling</h1>  */}
            <Switch>
              <Route path='/' exact component={Home} />
              <AnonRoute path="/signup" exact component={Signup} />
              <AnonRoute path="/login" exact component={Login} />
              <PrivateRoute path="/countries" exact component={Countries} />
              <PrivateRoute path="/countries/:id" exact component={CountryDetails} />
              <PrivateRoute path="/trip" exact component={Trip}/>
              <PrivateRoute path="/myprofile" exact component={MyProfile}/>
              <PrivateRoute path="/myprofile/edit" exact component={MyProfileForm}/>
              <Route component={NotFound} />
            </Switch>
          </div>
        </AuthProvider>
      </Router>
    )
  }
}

export default App;
