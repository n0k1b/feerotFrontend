import classes from "./App.module.css";
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
import { useDispatch, useSelector } from "react-redux";
import { homepageContentActions } from "./redux/homepage-content-slice";

import { RotatingLines } from "react-loader-spinner";

let firstLoad = true;

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const homePageContentFetch = async () => {
      dispatch(homepageContentActions.setIsLoading(true));
      const response = await fetch(
        "https://admin.feerot.com/api/get_homepage_content"
      );

      if (!response.ok) {
        return;
      }

      const data = await response.json();

      console.log(data.data);

      dispatch(homepageContentActions.setBanner(data.banner));
      dispatch(homepageContentActions.setSections(data.data));

      data.data.forEach((data) =>
        dispatch(homepageContentActions.setSectionTitles(data.section_name))
      );

      dispatch(homepageContentActions.setIsLoading(false));
    };

    {
      firstLoad && homePageContentFetch().catch((err) => console.log(err));
    }

    firstLoad = false;
  }, [dispatch]);

  const isLoading = useSelector((state) => state.homepageContent.isLoading);

  return (
    <Router>
      <div className="App">
        <Navbar />
        {isLoading && (
          <div className={classes.spinner}>
            <RotatingLines
              strokeColor="#195e73"
              strokeWidth="3"
              animationDuration="0.75"
              width="70"
              visible={true}
            />
          </div>
        )}
        <ScrollToTop>
          {!isLoading && (
            <>
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
              <Footer />
            </>
          )}
        </ScrollToTop>
      </div>
    </Router>
  );
}

export default App;
