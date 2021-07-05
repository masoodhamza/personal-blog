import React from "react";

const Posts = () => {
  return (
    <div className="card p-3 m-3">
      <div className="card-header">
        <h2 className="card-title">This title</h2>
      </div>
      <p className="card-body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus sunt
        facilis, esse nesciunt consequatur adipisci.
      </p>
      <div>
        <small className="text-muted">Created at: Jan 14, 2020</small>
      </div>
    </div>
  );
};

export default Posts;
