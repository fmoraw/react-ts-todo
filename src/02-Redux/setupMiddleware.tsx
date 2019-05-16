import { combineReducers, Reducer, createStore, applyMiddleware, AnyAction, Action } from "redux"
import { routerMiddleware, RouterState, connectRouter, RouterAction, LocationChangeAction } from "connected-react-router"
import { createBrowserHistory } from "history"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import logger from "redux-logger"
import { reducer as formReducer } from "redux-form"

import parseMiddleware from "./parseMiddleware"
import { todoReducer } from "./todoreducer"
import { TodoState } from "./types"
import { TodoActions } from "./todoActions"


export interface ApplicationState {
    todo: TodoState
}

export type ApplicationAction = RouterAction & LocationChangeAction & TodoActions

export const history = createBrowserHistory()

export const rootReducer: Reducer<ApplicationState, ApplicationAction > = combineReducers({
    todo: todoReducer,
})

const composeMiddleware = () => {
    let middleware;
    if (process.env.NODE_ENV !== "production") {
        middleware = composeWithDevTools(
            applyMiddleware(
                thunk,
                routerMiddleware(history),
                parseMiddleware,
                logger,
            )
        )
    } else {
        middleware = applyMiddleware(
            thunk,
            parseMiddleware,
            routerMiddleware(history),
        )
    }
    return middleware
}

// TODO Fix type { dispatch: {}
export const store = createStore<ApplicationState, ApplicationAction, { dispatch: {} }, undefined>(rootReducer, undefined, composeMiddleware())
