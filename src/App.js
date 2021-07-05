import "./App.css";
import CreatePost from "./components/CreatePost";
import Posts from "./components/Posts";

const App = () => {
  return (
    <div className="container-fluid bg-dark App">
      <div className="row">
        <div className="col-md-8 offset-2">
          <CreatePost />
          <Posts />
        </div>
      </div>
    </div>
  );
};

export default App;
