import logo from "./logo.svg";
import "./App.css";
import PageOne from "./components/PageOne";
import PageTwo from "./components/PageTwo";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={PageOne} />
        <Route path="/pagetwo" component={PageTwo} />
      </Switch>
    </div>
  );
}

export default App;
