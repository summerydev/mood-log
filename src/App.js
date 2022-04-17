import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Output from "./components/Output";
import Upload from "./components/Upload";
import EmptyPage from "./components/EmptyPage";

function App() {
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
