import React from 'react';
import './App.css';
import Header from './componets/Header/Header';
import Shop from './componets/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './componets/Review/Review';
import Inventory from './Inventory/Inventory';
import Notfound from './Notfound/Notfound';
import ProductDetails from './componets/ProductDetails/ProductDetails';
import Login from './componets/Login/Login';
import Shipment from './componets/Shipment/Shipment';
import { createContext } from 'react';
import { useState } from 'react';
import PrivateRoute from './componets/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App(props) {
  const [loggedInUser, setLOggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLOggedInUser]}>
      <h2>email: {loggedInUser.email}</h2>
      
      <Router>
      <Header></Header>
        <Switch>
          <Route path="/shop">
          <Shop></Shop>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          <PrivateRoute path="/inventory">
            <Inventory></Inventory>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/shipment">
            <Shipment></Shipment>
          </PrivateRoute>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route path="/product/:productKey">
          <ProductDetails></ProductDetails>
          </Route>
          <Route path="*">
            <Notfound></Notfound>
          </Route>
        </Switch>
      </Router>

    </UserContext.Provider>
  );
}

export default App;
