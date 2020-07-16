import React, { Component } from "react";
import "./components/PostList";
import "./App.css";
import PostList from "./components/PostList";
import axios from "axios";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      error: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
        this.setState({ posts: response.data });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errorMsg: "Error retreiving data" });
      });
  }

  render() {
    const { posts, errorMsg } = this.state;
    return (
      <div className="App">
        List of Posts
        {posts.length
          ? posts.map((post) => <div key={post.id}>{post.title}</div>)
          : null}
        {errorMsg ? <div>{errorMsg}</div> : null}
      </div>
    );
  }
}
