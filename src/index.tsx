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
import ListComponent from './01-ListComponent/ListComponent';

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
                <Route path="/01-React-Component"><ListComponent /></Route>
                <Route path="/01-React-Component-Solution"><div>Test</div></Route>
                <Route path="/02-Redux-Container"><ListComponentContainer/></Route>
                <Route path="/02-Redux-Container-Solution"><ListComponentContainer/></Route>
            </Switch>
        </HashRouter>
    </ConnectedRouter>
</Provider>,
document.getElementById('root')
)
