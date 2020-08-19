import React from "react";
import NavBar from "./components/NavBar";
import Page2 from "./components/Page2";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Page2" component={Page2} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
