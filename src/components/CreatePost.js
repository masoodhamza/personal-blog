import { useState } from "react";

const CreatePost = (props) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const id = Math.random();
    const time = new Date();

    props.createPost(id, title, body, time.toString());

    setTitle("");
    setBody("");
  };

  return (
    <>
      <div className="card bg-secondary m-3 p-3">
        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Post title
            </label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              className="form-control"
              id="title"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="body" className="form-label">
              Body
            </label>
            <textarea
              className="form-control"
              id="body"
              onChange={(e) => setBody(e.target.value)}
              value={body}
              required
            ></textarea>
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
