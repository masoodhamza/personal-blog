import "./App.css";
import Posts from "./components/Posts";

function App() {
  return (
    <div className="container-fluid bg-dark App">
      <div className="row">
        <div className="col-md-8 offset-2">
          <Posts />
        </div>
      </div>
    </div>
  );
}

export default App;
