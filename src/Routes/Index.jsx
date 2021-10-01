import { Switch, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Shopping from "../Pages/Shopping";
function Routes() {
  return (
    <switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/Login">
        <p>Login</p>
      </Route>
      <Route path="/Shopping">
        <Shopping />
      </Route>
    </switch>
  );
}
export default Routes;
