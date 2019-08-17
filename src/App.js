import React, {Component} from 'react';
import {BrowserRouter as Router, Route ,Switch} from 'react-router-dom';

import Navbar from './components/Navbar.js';
import PrivateRoute from './components/PrivateRoute.js';
import AnonRoute from './components/AnonRoute.js';

import Countries from './pages/Countries';
import Signup from './pages/Signup';
import Login from './pages/Login';
import CountryDetails from './pages/CountryDetails';
import NotFound from './pages/NotFound';

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
              <AnonRoute path="/signup" exact component={Signup} />
              <AnonRoute path="/login" exact component={Login} />
              <PrivateRoute path="/countries" exact component={Countries} />
              <PrivateRoute path="/countries/:id" exact component={CountryDetails} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </AuthProvider>
      </Router>
    )
  }
}

export default App;
