import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./Component/NavBar";
import "./styles.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./Component/Dashbord";
import PokemonDetail from "./Component/PokemonDetail";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route
              exact
              path="/component/:pokemonIndex"
              component={PokemonDetail}
            />
            <PokemonDetail />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
