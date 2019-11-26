import React from "react";
// import logo from "./logo.svg";
import DevelopersList from "./components/DevelopersList";
import { Switch, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Toolbar from "./components/Toolbar";
import PostPage from "./components/PostPage";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Toolbar />
      <Switch>
        <Route path="/developers" component={DevelopersList} />
        <Route component={Homepage} />
      </Switch>
      <Route path="/read/:id" component={PostPage} />
    </div>
  );
}

export default App;
