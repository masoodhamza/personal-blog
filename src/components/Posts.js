import React from "react";

const Posts = ({ posts }) => {
  return (
    <>
      {posts.map((post) => (
        <div className="card p-3 m-3" key={post.id}>
          <div className="card-header">
            <h2 className="card-title">{post.title}</h2>
          </div>
          <p className="card-body">{post.body}</p>
          <div>
            <div className="card-footer">
              <small className="text-muted">Created at: {post.date}</small>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Posts;
