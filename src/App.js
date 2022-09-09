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
import Cart from "./Pages/Cart";
import Footer from "./components/footer/Footer";
import { useEffect } from "react";
import axios from "axios";

let firstLoad = true;

function App() {
  useEffect(() => {
    const homePageContentFetch = async () => {
      console.log("working1");
      // const response = await fetch(
      //   "http://admin.feerot.com/api/get_homepage_content"
      // );

      // console.log("working2");

      // if (!response.ok) {
      //   console.log("working3");
      //   return;
      // }

      // const data = await response.json();

      // console.log(data);

      try {
        const response = await axios.get(
          "http://admin.feerot.com/api/get_homepage_content",
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Credentials": "true",
              "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
              "Access-Control-Allow-Headers": "X-Requested-With",
            },
          }
        );
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    };

    {
      firstLoad && homePageContentFetch().catch((err) => console.log(err));
    }

    firstLoad = false;
  }, []);

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

            <Route path="/cart">
              <Cart />
            </Route>
          </Switch>
        </ScrollToTop>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
