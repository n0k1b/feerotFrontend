import "./App.css";
import Navbar from "./components/Nav/Navbar";
import HomePage from "./Pages/HomePage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DetailedProduct from "./Pages/DetailedProduct";

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
            <DetailedProduct />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
