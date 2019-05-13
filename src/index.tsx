import React from 'react';
import ReactDOM from 'react-dom';
import * as Parse from 'parse';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css'; 
import { Provider } from "react-redux"
import { ConnectedRouter } from 'connected-react-router';
import { HashRouter, Switch, Route, Redirect, Link } from "react-router-dom"
import SandboxHeader from './SandBoxHeader';

import { store, history } from "./02-ListComponent/setupMiddleware"
import ListComponentContainer from './02-ListComponent/ListComponent.container';
import BackendContainer from './backend/ListComponent.container';
import FormContainer from './forms/ListComponent.container';
import From0ToReactContainer from './from0toReact/ListComponent.container';

const initializeParse = () => {
    Parse.initialize('myAppId');
    (Parse as any).serverURL = 'https://fulda-dev-meetup.herokuapp.com/parse';
  };
  
  initializeParse();

ReactDOM.render(
    <Provider store={store}>
    <SandboxHeader />
    <ConnectedRouter history={history} >
        <HashRouter>
            <Switch>
                <Route path="/0"><ListComponentContainer/></Route>
                <Route path="/from0ToReact"><From0ToReactContainer/></Route>
                <Route path="/backend"><BackendContainer/></Route>
                <Route path="/forms"><FormContainer/></Route>
                <Route path="/1"><div>Test</div></Route>
            </Switch>
        </HashRouter>
    </ConnectedRouter>
</Provider>,
document.getElementById('root')
)
