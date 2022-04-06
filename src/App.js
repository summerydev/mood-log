import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Loading from "./components/Loading";
import Output from "./components/Output";
import Upload from "./components/Upload";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="card">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/upload">
              <Upload />
            </Route>
            <Route exact path="/loading">
              <Loading />
            </Route>
            <Route path="/output">
              <Output />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
