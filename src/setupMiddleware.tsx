import { combineReducers, Reducer, createStore, applyMiddleware } from "redux"
import { routerMiddleware, RouterState, connectRouter } from "connected-react-router"
import { createBrowserHistory } from "history"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import logger from "redux-logger"

import parseMiddleware from "./parseMiddleware";
import api from "./api";
import { todoReducer } from "./todoreducer";
import { TodoState } from "./types"
import { TodoActions } from "./todoActions";


export interface ApplicationState {
    todo: TodoState | undefined
    router: RouterState
}

export type ApplicationAction = TodoActions 

export const history = createBrowserHistory()

export const rootReducer: Reducer<ApplicationState> = combineReducers({
    todo: todoReducer,
    router: connectRouter(history),
})

const composeMiddleware = () => {
    let middleware;
    if (process.env.NODE_ENV !== "production") {
        middleware = composeWithDevTools(
            applyMiddleware(
                thunk.withExtraArgument({ api }),
                routerMiddleware(history),
                parseMiddleware,
                logger,
            )
        )
    } else {
        middleware = applyMiddleware(
            thunk.withExtraArgument({ api }),
            routerMiddleware(history),
        )
    }
    return middleware
}

// TODO Fix type { dispatch: {}
export const store = createStore<ApplicationState, ApplicationAction, { dispatch: {} }, undefined>(rootReducer, undefined, composeMiddleware())
