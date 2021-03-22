import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Destination from './components/Destination/Destination';
import { createContext } from 'react';
import { useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import DestinationDetails from './components/DestinationDetails/DestinationDetails';


export const UserContext = createContext();

function App() {
  const [loggedInUser,setLoggedInUser]= useState({});
  return (
    <UserContext.Provider value ={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path = "/home">
            <Home/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <PrivateRoute path="/destination/:id">
            <Destination/>
          </PrivateRoute>
          <PrivateRoute>
            <DestinationDetails/>
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
