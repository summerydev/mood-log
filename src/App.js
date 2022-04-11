import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Output from "./components/Output";
import Loading from "./components/Loading";
import Upload from "./components/Upload";
import EmptyPage from "./components/EmptyPage";
import Share from "./components/Share";

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

            <Route path="/upload">
              <Upload />
            </Route>

            <Route path="/loading">
              <Loading />
            </Route>

            <Route path="/output">
              <Output />
              <Share />
            </Route>

            <Route>
              <EmptyPage />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
