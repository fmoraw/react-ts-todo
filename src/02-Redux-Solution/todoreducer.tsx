import {TodoState, Todo} from "./types"
import { Reducer } from "react";
import { TodoActions,
    FETCH_SUCCESS_FIND_TODOS,
    SUCCESS_CREATE_TODO,
} from "./todoActions"


export const initialState: TodoState = {
    todos: []
}

export const todoReducer: Reducer<any, TodoActions> = (state: TodoState = initialState, action: TodoActions): TodoState => {
    switch(action.type) {
        case FETCH_SUCCESS_FIND_TODOS:
            return {
                todos: action.payload,
                ...state,
            }
        case SUCCESS_CREATE_TODO:
            return state
        default:
            return state
    }
}