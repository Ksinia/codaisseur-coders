import React from "react";
// import logo from "./logo.svg";
import DevelopersList from "./components/DevelopersList";
import { Switch, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Toolbar from "./components/Toolbar";
import PostPage from "./components/PostPage";
import LoginPage from "./components/LoginPage";
import PostList from "./components/PostList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Toolbar />
      <Switch>
        {/* свитч выбирает первый подходящиц путь (не exact path), поэтому путь "/" должен быть последним */}
        <Route path="/developers" component={DevelopersList} />
        <Route path="/login" component={LoginPage} />
        <Route path="/read/:id" component={PostPage} />
        <Route path="/read/" component={PostList} />
        <Route path="/" component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
