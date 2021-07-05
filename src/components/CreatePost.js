import React from "react";

const CreatePost = () => {
  return (
    <>
      <div className="card create-post bg-secondary m-3 p-3">
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Post title
            </label>
            <input type="text" className="form-control" id="title" />
          </div>
          <div className="mb-3">
            <label htmlFor="body" className="form-label">
              Body
            </label>
            <textarea className="form-control" id="body"></textarea>
          </div>

          <button type="submit" className="btn btn-primary">
            Add post
          </button>
        </form>
      </div>
    </>
  );
};

export default CreatePost;
