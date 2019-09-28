import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Posts from "./blog/Posts";
import About from "./About";
import ExamplePost from "./blog/ExamplePost";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/blog/Posts">Posts</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
			<Route path="/blog/Posts" component={Posts}/>
            <Route path="/about" component={About}/>
            <Route exact path="/blog/ExamplePost" component={ExamplePost}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
