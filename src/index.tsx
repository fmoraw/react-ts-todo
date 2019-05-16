import React from "react";
import ReactDOM from "react-dom";
import * as Parse from "parse";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { HashRouter, Switch, Route, Redirect, Link } from "react-router-dom";
import SandboxHeader from "./SandBoxHeader";

import { store, history } from "./02-ListComponent/setupMiddleware";
import ListComponentContainer from "./02-Redux/ListComponent.container"

import * as LC2 from "./02-Redux-Solution/ListComponent.container";

import GettingStartedComponent from "./getting-started/MyFirstComponent";
import Backend from "./backend/TodoList";
import BackendSolution from "./backend-solution/TodoList";
import Forms from "./forms/ListComponent.container";
import FormsSolution from "./forms-solution/ListComponent.container";

import * as LC1 from "./01-ListComponent/ListComponent.container";
import * as LC1Solution from "./01-ListComponent-solution/ListComponent.container";

const initializeParse = () => {
  Parse.initialize("myAppId");
  (Parse as any).serverURL = "https://fulda-dev-meetup.herokuapp.com/parse";
};
initializeParse();

ReactDOM.render(
  <Provider store={store}>
    <SandboxHeader />
    <ConnectedRouter history={history}>
      <HashRouter>
        <Switch>
          <Route path="/getting-started">
            <GettingStartedComponent />
          </Route>
          <Route path="/01-React-Component">
            <LC1.default />
          </Route>
          <Route path="/01-React-Component-Solution">
            <LC1Solution.default />
          </Route>
          <Route path="/02-Redux">
            <ListComponentContainer />
          </Route>
          <Route path="/02-Redux-Solution">
            <LC2.default />
          </Route>
          <Route path="/forms">
            <Forms />
          </Route>
          <Route path="/forms-solution">
            <FormsSolution />
          </Route>
          <Route path="/backend">
            <Backend />
          </Route>
          <Route path="/backend-solution">
            <BackendSolution />
          </Route>
        </Switch>
      </HashRouter>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
