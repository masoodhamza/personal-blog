import { useState } from "react";
import "./App.css";
import CreatePost from "./components/CreatePost";
import Posts from "./components/Posts";

const App = () => {
  const [post, setPost] = useState([
    {
      id: Math.random(),
      title: "post title 1",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus sunt facilis, esse nesciunt consequatur adipisci.",
      date: "Jun 15, 2021",
    },
    {
      id: Math.random(),
      title: "post title 2",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus sunt facilis, esse nesciunt consequatur adipisci.",
      date: "Jul 15, 2021",
    },
  ]);

  const createPostHandler = (id, title, body, date) => {
    setPost((prevPost) => {
      return [{ id, title, body, date }, ...prevPost];
    });
  };

  return (
    <div className="container-fluid bg-dark App">
      <div className="row">
        <div className="col-md-4">
          <CreatePost createPost={createPostHandler} />
        </div>
        <div className="col-md-8">
          <Posts posts={post} />
        </div>
      </div>
    </div>
  );
};

export default App;
