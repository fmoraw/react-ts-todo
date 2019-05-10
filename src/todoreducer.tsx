import {TodoState, Todo} from "./types"
import { Reducer } from "react";
import { TodoActions,
    FETCH_SUCCESS_FIND_TODOS,
    SUCCESS_CREATE_TODO,
} from "./todoActions"
import TodoListComponent from "./02-ListComponent/TodoList";


export const initialState: TodoState = {
    todos: []
}

export const todoReducer: Reducer<any, TodoActions> = (state = initialState, action: TodoActions): TodoState => {
    switch(action.type) {
        case FETCH_SUCCESS_FIND_TODOS:
            return {
                ...state,
                todos: action.payload,
            }
        case SUCCESS_CREATE_TODO:
            return state
    }
    return state
}