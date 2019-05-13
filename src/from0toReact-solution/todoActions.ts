import { Todo } from "./types";

export const FETCH_REQUEST_FIND_TODOS = "todo/FETCH_REQUEST_FIND_TODOS";
export const FETCH_SUCCESS_FIND_TODOS = "todo/FETCH_SUCCESS_FIND_TODOS";
export const FETCH_REQUEST_CREATE_TODO = "todo/FETCH_REQUEST_CREATE_TODO";
export const FETCH_REQUEST_UPDATE_TODO = "todo/FETCH_REQUEST_UPDATE_TODO";

export const SUCCESS_CREATE_TODO = "todo/CREATE_SUCCESS";
export const SUCCESS_UPDATE_TODO = "todo/UPDATE_SUCCESS";

export interface FindTodosAction {
    type: typeof FETCH_REQUEST_FIND_TODOS,
    method: string,
}

export interface CreateTodoAction {
  type: typeof FETCH_REQUEST_CREATE_TODO,
  payload: Todo,
  method: string,
}

export interface SuccessCreateTodoAction {
  type: typeof SUCCESS_CREATE_TODO
}

export interface UpdateTodoAction {
  type: typeof FETCH_REQUEST_UPDATE_TODO,
  payload: Todo
  method: string,
}

export interface SuccessFindTodoAction {
  type: typeof FETCH_SUCCESS_FIND_TODOS,
  payload: Array<any>
}

export function fetchRequestFindTodos(): FindTodosAction {
  return {
    type: FETCH_REQUEST_FIND_TODOS,
    method: 'find',
  }
}

export function fetchRequestCreateTodo(todo: Todo): CreateTodoAction {
  return {
    type: FETCH_REQUEST_CREATE_TODO,
    payload: todo,
    method: 'create'
  }
}

export function fetchRequestUpdateTodo(todo: Todo): UpdateTodoAction {
  return {
    type: FETCH_REQUEST_UPDATE_TODO,
    payload: todo,
    method: 'update',
  }
}

export function fetchSuccessFindTodos(todos: Array<any>): SuccessFindTodoAction {
  return {
    type: FETCH_SUCCESS_FIND_TODOS,
    payload: todos,
  }
}

export function fetchSuccessCreateTodo() {
  return {
    type: SUCCESS_CREATE_TODO,
  }
}

export function fetchSuccessUpdateTodo() {
  return {
    type: SUCCESS_UPDATE_TODO,
  }
}

export type TodoActions = FindTodosAction | SuccessCreateTodoAction | UpdateTodoAction | SuccessFindTodoAction