import React from "react";
import { Link } from "react-router-dom";

const PostDetails = (props) => {
  return (
    <div className="panel panel-warning">
      <div className="panel-heading">
        <h2>Welcome to {props.match.params.topic}</h2>
      </div>
      <div className="panel-body">
        <p>This {props.match.params.topic} is amazing</p>
        <Link to="/post">Back</Link>
      </div>
    </div>
  );
};
export default PostDetails;
