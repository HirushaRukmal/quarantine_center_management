import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

//common navigation components

import Header from "./components/Common/Navigation/Header";
import Footer from "./components/Common/Navigation/Footer";
import AllFood from "../../webclient/src/pages/FoodManagement/AllFood";
import FoodAdmin from "../../webclient/src/pages/FoodManagement/FoodAdmin";

import FoodCart from "../../webclient/src/pages/FoodManagement/FoodCart";
import AllOrders from "../../webclient/src/pages/FoodManagement/AllOrders";
import OrderAdmin from "../../webclient/src/pages/FoodManagement/OrderAdmin";
import Favourites from "../../webclient/src/pages/FoodManagement/Favourites";

//pages
import Login from "./pages/Common/Loginexaple";

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <div class="content">
          <div class="container-fluid">
            <Switch>
              {/* Janith */}
              <Route path="/login" exact component={Login} />
              {/* Chamodh */}
              <Route path="/allFood" exact component={AllFood} />
              <Route path="/foodadmin" exact component={FoodAdmin} />
              <Route path="/allOrders" exact component={AllOrders} />
              <Route path="/foodCart" exact component={FoodCart} />
              <Route path="/orderAdmin" exact component={OrderAdmin} />
              <Route path="/favourites" exact component={Favourites} />
            </Switch>
          </div>
        </div>
        <Footer />
      </Router>
    );
  }
}

export default App;
