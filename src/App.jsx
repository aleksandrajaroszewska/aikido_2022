import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./Pages/Main";
import Rodo from "./Pages/Rodo";

import "./App.css";


function App() {
  return (
    <div className="main-wrapper">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/rodo" component={Rodo} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
