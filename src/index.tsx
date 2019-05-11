import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux"
import { ConnectedRouter } from 'connected-react-router';
import { HashRouter, Switch, Route, Redirect, Link } from "react-router-dom"

import { store, history } from "./setupMiddleware"
import ListComponentContainer from './02-ListComponent/ListComponent.container';

ReactDOM.render(
    <Provider store={store}>
    <ConnectedRouter history={history} >
        <HashRouter>
            <Switch>
                <Route exact={true} path="/"><App/></Route>
                <Route path="/123">
                    <div>
                        <Link to={"/0"}><ListComponentContainer /></Link>    
                    </div>
                </Route>
            </Switch>
        </HashRouter>
    </ConnectedRouter>
</Provider>,
document.getElementById('root')
)
