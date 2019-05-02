import { Todo } from "./types";

export const SAVE_TODO = "todo/SAVE_TODO"

export interface SaveTodoAction {
    type: typeof SAVE_TODO
    payload: Todo
}

export function saveTodo(todo: Todo): SaveTodoAction {
    return {
      type: SAVE_TODO,
      payload: todo
    }
  }

export type TodoActions = SaveTodoAction