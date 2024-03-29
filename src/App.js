import React from "react";
// import logo from "./logo.svg";
import DevelopersList from "./components/DevelopersList";
import { Switch, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Toolbar from "./components/Toolbar";
import PostPage from "./components/PostPage";
import LoginPage from "./components/LoginPage";
import PostList from "./components/PostList";
import SignUpPage from "./components/SignUpPage";
import AccountPage from "./components/AccountPage";
import DeveloperPage from "./components/DeveloperPage";
import "./App.css";
import NewPost from "./components/NewPost";
import SearchPostsResult from "./components/SearchPostsResult";

function App() {
  return (
    <div className="App">
      <Toolbar />
      <Switch>
        {/* свитч выбирает первый подходящиц путь (не exact path), поэтому путь "/" должен быть последним. Или можно просто написать exact path*/}
        <Route exact path="/developers/" component={DevelopersList} />
        <Route path="/developers/:developer" component={DeveloperPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignUpPage} />
        {/* <Route
          path="/search?:searchtype=:keyword"
          component={SearchPostsResult}
        /> */}
        <Route
          path="/search/:searchtype/:keyword"
          component={SearchPostsResult}
        />
        <Route path="/read/:id" component={PostPage} />
        <Route path="/newpost" component={NewPost} />
        <Route path="/read/" component={PostList} />
        <Route path="/account/" component={AccountPage} />
        {/* <Route exact path="/" component={Homepage} /> */}
        <Route path="/" component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
