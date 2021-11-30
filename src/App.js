import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { NavBar } from "./components";
import { HOME_SCREEN, STARED_REPOS_SCREEN } from "./constants/navigations";
import { HomeScreen, StaredReposScreen } from "./screens";

const App = () => {
  return (
    <Router >
        <NavBar />

        <Switch >
          <Route exact path={`${STARED_REPOS_SCREEN}`}>
            <StaredReposScreen />
          </Route>
          <Route exact path={`${HOME_SCREEN}`}>
            <HomeScreen />
          </Route>
        </Switch>
    </Router>
  );
};

export default App;
