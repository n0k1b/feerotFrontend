import "./App.css";
import Navbar from "./components/Nav/Navbar";
import HomePage from "./Pages/HomePage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BrandWShop from "./Pages/BrandWShop";
import BrandShop from "./Pages/BrandShop";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
