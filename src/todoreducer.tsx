import {TodoState, Todo} from "./types"
import { Reducer } from "react";
import { TodoActions,
    FETCH_SUCCESS_FIND_TODOS,
} from "./todoActions"

export const initialState: TodoState = {
    todos: []
}

export const todoReducer: Reducer<TodoState | undefined, TodoActions> = (state = initialState, action: TodoActions): TodoState => {
    switch(action.type) {
        case FETCH_SUCCESS_FIND_TODOS:
            return {
                ...state,
                ...action.payload,
            }
    }
    return state
}