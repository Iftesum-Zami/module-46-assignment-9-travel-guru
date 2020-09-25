import React, { createContext, useState } from 'react';
import './App.css';
import Login from './Components/Login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import 'bootstrap/dist/css/bootstrap.css';
import Destination from './Components/Destination/Destination';
import Booking from './Components/Booking/Booking';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Header from './Components/Header/Header';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
      <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            <Login></Login>
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/booking">
            <Booking></Booking>
          </Route>

          <PrivateRoute path="/destination">
            <Destination></Destination>
          </PrivateRoute>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
    </UserContext.Provider>
    
  );
}

export default App;
