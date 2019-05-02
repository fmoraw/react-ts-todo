import {TodoState, Todo} from "./types"
import { Reducer } from "react";
import {TodoActions, SAVE_TODO, SaveTodoAction} from "./todoActions"

export const initialState: TodoState = {
    todos: [{
        id: "1",
        text: "test"
    }]
}

export const todoReducer: Reducer<TodoState | undefined, TodoActions> = (state = initialState, action: SaveTodoAction): TodoState => {
    switch(action.type) {
        case SAVE_TODO:
            return {
                todos: [...state.todos, action.payload]
            }
    }
    return state
}