import { Switch, Route } from "react-router-dom";
import Shopping from "../Pages/Shopping";
function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Shopping />
      </Route>
    </Switch>
  );
}
export default Routes;
