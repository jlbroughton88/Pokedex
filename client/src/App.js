import React from 'react';
import Home from "./components/pages/Home"
import PokeSummary from "./components/pages/PokeSummary"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import './App.css';

const App = () => {

  return (
    <Router>
      <div className="App"></div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/poke/:pokemon" component={PokeSummary} />
      </Switch>

    </Router>
  );
}

export default App;
