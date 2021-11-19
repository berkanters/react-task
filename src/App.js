import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavBar } from "./components";
import { HOME_SCREEN, STARED_REPOS_SCREEN } from "./constants/navigations";
import { HomeScreen, StaredReposScreen } from "./screens";

const App = () => {
  return (
    <Router>
      <StaredReposScreen />
    </Router>
  );
};

export default App;
