import { Route, Switch } from "react-router-dom";
//Components
import Landing from "./Landing";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Projects from "./Projects";
import Technologies from "./Technologies";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Landing />
      </Route>
      <Route path="/technologies" exact>
        <Technologies />
      </Route>
      <Route path="/aboutme" exact>
        <AboutMe />
      </Route>
      <Route path="/contact" exact>
        <Contact />
      </Route>
      <Route path="/projects" exact>
        <Projects />
      </Route>
    </Switch>
  );
}

export default App;
