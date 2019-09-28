import React, { Component } from "react";
import {
  Route,
  Link,
  HashRouter
} from "react-router-dom";
import './index.css';
import ExamplePost from "./ExamplePost";
 
class Stuff extends Component {
  render() {
    return (
	  
	  <HashRouter>
        <div>
			<h1>Blog Posts</h1>
			<Link exact to="/blog/ExamplePost">Example Post</Link>
			<Route path="/blog/ExamplePost" component={ExamplePost}/>
        </div>
      </HashRouter>
    );
  }
}
 
export default Stuff;
