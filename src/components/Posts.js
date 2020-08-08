import React from "react";
import { Link } from "react-router-dom";

const Posts = () => {
  return (
    <div className="panel panel-success">
      <div className="panel-heading">
        <h2>Posts</h2>
      </div>
      <div className="panel-body">
        <p>Welcome to posts</p>
        <h3>JavaScript</h3>
        <Link to="/post/JavaScript">Details</Link>
        <h3>BootStrap</h3>
        <Link to="/post/BootStrap">Details</Link>
        <h3>Reactjs</h3>
        <Link to="/post/ReactJs">Details</Link>
      </div>
    </div>
  );
};
export default Posts;
