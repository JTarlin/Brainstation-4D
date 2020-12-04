import "./App.css";
import PageOne from "./components/PageOne";
import PageTwo from "./components/PageTwo";
import PageThree from "./components/PageThree";
import PageFour from "./components/PageFour";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={PageOne} />
        <Route path="/pagetwo" component={PageTwo} />
        <Route path="/pagethree" component={PageThree} />
        <Route path="/pagefour" component={PageFour} />
      </Switch>
    </div>
  );
}

export default App;
