import React from "react";
import {
  NavLink,
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  Redirect,
} from "react-router-dom";
import Pending from "../../Pages/Pending/Pending";
import Executed from "../../Pages/Executed/Executed";
import ExecutingPage from "../../Pages/Executing/ExecutingPage";
import Completed from "../../Pages/Completed/Completed";
import "./ReqSectionsHeader.css";
const ReqSectionsHeader = () => {
  let { url } = useRouteMatch();

  return (
    <Router>
      <div className="container-div">
        <div id="container">
          <nav>
            <ul>
              <li>
                <NavLink activeClassName="activeclass" to={`${url}/pending`}>
                  Pending
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="activeclass" to={`${url}/executing`}>
                  Executing
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="activeclass" to={`${url}/executed`}>
                  Executed
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="activeclass" to={`${url}/completed`}>
                  Completed
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>

        <Switch>
          <Route exact path={`${url}/pending`}>
            <Pending></Pending>
          </Route>
          <Route exact path={`${url}/executing`}>
            <ExecutingPage></ExecutingPage>
          </Route>
          <Route exact path={`${url}/executed`}>
            <Executed></Executed>
          </Route>
          <Route exact path={`${url}/completed`}>
            <Completed></Completed>
          </Route>
          <Redirect exact from={`${url}`} to={`${url}/executing`} />
        </Switch>
      </div>
    </Router>
  );
};

export default ReqSectionsHeader;
