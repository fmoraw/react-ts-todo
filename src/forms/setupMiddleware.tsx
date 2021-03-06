import { combineReducers, Reducer, createStore, applyMiddleware } from "redux"
import { routerMiddleware, RouterState, connectRouter } from "connected-react-router"
import { createBrowserHistory } from "history"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import logger from "redux-logger"

import parseMiddleware from "./parseMiddleware"
import { todoReducer } from "./todoreducer"
import { TodoState } from "./types"
import { TodoActions } from "./todoActions"

// Step 1-1: install redux-form
// Step 1-2 add reducer -> form for redux-form 
// Step 1-3 add type to ApplicationState

export interface ApplicationState {
    todo: TodoState
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
