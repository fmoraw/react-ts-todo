import { Todo, TodoState } from "./types";

export const FETCH_REQUEST_FIND_TODOS = "todo/FETCH_REQUEST_FIND_TODOS";
export const FETCH_SUCCESS_FIND_TODOS = "todo/FETCH_SUCCESS_FIND_TODOS";
export const FETCH_REQUEST_CREATE_TODO = "todo/FETCH_REQUEST_CREATE_TODO";
export const FETCH_REQUEST_UPDATE_TODO = "todo/FETCH_REQUEST_UPDATE_TODO";

export interface FindTodosAction {
    type: typeof FETCH_REQUEST_FIND_TODOS,
    payload: {
      objectName: string,
    }
}

export interface CreateTodoAction {
  type: typeof FETCH_REQUEST_CREATE_TODO,
  payload: Todo
}

export interface UpdateTodoAction {
  type: typeof FETCH_REQUEST_UPDATE_TODO,
  payload: Todo
}

export interface SuccessFindTodoAction {
  type: typeof FETCH_SUCCESS_FIND_TODOS,
  payload: TodoState
}

export function fetchRequestFindTodos(): FindTodosAction {
  return {
    type: FETCH_REQUEST_FIND_TODOS,
    payload: {
      objectName: 'Todo',
    }
  }
}

export function fetchRequestCreateTodo(todo: Todo): CreateTodoAction {
  return {
    type: FETCH_REQUEST_CREATE_TODO,
    payload: todo
  }
}

export function fetchRequestUpdateTodo(todo: Todo): UpdateTodoAction {
  return {
    type: FETCH_REQUEST_UPDATE_TODO,
    payload: todo
  }
}

export function fetchSuccessFindTodos(todos: TodoState): SuccessFindTodoAction {
  return {
    type: FETCH_SUCCESS_FIND_TODOS,
    payload: todos,
  }
}

export type TodoActions = FindTodosAction | CreateTodoAction | UpdateTodoAction | SuccessFindTodoAction