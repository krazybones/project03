import React from "react";
//css import
import "./App.css";
//Modules import
import Nav from "./Nav";
import Home from "./Home";
import Todos from "./Todos";
import Contact from "./Contact";
//Router import
import { BrowserRouter, Switch, Route } from "react-router-dom";
//Bootstrap import -- Currently not in use
//import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/todos" component={Todos} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
