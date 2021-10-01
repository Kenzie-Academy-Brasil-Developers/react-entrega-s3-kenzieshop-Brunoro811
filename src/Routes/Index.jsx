import { Switch, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Shopping from "../Pages/Shopping";
function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/Login">
        <p>Login</p>
      </Route>
      <Route path="/Shopping">
        <Shopping />
      </Route>
    </Switch>
  );
}
export default Routes;
