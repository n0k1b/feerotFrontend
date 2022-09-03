import "./App.css";
import Navbar from "./components/Nav/Navbar";
import HomePage from "./Pages/HomePage";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import BrandWShop from "./Pages/BrandWShop";
import BrandShop from "./Pages/BrandShop";
import ProductDetails from "./Pages/ProductDetails";
import Checkout from "./Pages/Checkout";
import SeeMore from "./Pages/SeeMore";

import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <ScrollToTop>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>

            <Route path="/yellow">
              <BrandWShop />
            </Route>

            <Route path="/bata">
              <BrandShop />
            </Route>

            <Route path="/product">
              <ProductDetails />
            </Route>

            <Route path="/checkout">
              <Checkout />
            </Route>

            <Route path="/offers/:title">
              <SeeMore />
            </Route>

            <Route exact path="/offers">
              <Redirect to="/" />
            </Route>
          </Switch>
        </ScrollToTop>
      </div>
    </Router>
  );
}

export default App;
