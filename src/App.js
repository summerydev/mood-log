import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Output from "./pages/Output";
import Upload from "./pages/Upload";
import EmptyPage from "./pages/EmptyPage";
import firebaseInit from "./firebaseInit";

function App() {
  console.log(firebaseInit);
  return (
    <BrowserRouter>
      <div className="App">
        <div className="card">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/upload" component={Upload} />
            <Route path="/output" component={Output} />
            <Route component={EmptyPage} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
