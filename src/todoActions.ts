import { Todo, TodoState } from "./types";
import { todoReducer } from "./todoreducer";

export const FETCH_REQUEST_FIND_TODOS = "todo/FETCH_REQUEST_FIND_TODOS";
export const FETCH_SUCCESS_FIND_TODOS = "todo/FETCH_SUCCESS_FIND_TODOS";
export const FETCH_REQUEST_CREATE_TODO = "todo/FETCH_REQUEST_CREATE_TODO";
export const FETCH_REQUEST_UPDATE_TODO = "todo/FETCH_REQUEST_UPDATE_TODO";

export const SUCCESS_CREATE_TODO = "todo/CREATE_SUCCESS";
export const SUCCESS_UPDATE_TODO = "todo/UPDATE_SUCCESS";

export interface FindTodosAction {
    type: typeof FETCH_REQUEST_FIND_TODOS,
    method: string,
    successAction: (result: any) => void,
    // payload: {
    //   id: string,
    // }
}

export interface CreateTodoAction {
  type: typeof FETCH_REQUEST_CREATE_TODO,
  successAction: () => void,
  payload: Todo,
  method: string,
 // successAction: SuccessCreateTodo
}

export interface SuccessCreateTodo {
  type: typeof SUCCESS_CREATE_TODO
}

export interface UpdateTodoAction {
  type: typeof FETCH_REQUEST_UPDATE_TODO,
  successAction: () => void,
  payload: Todo
  method: string,
}

export interface SuccessFindTodoAction {
  type: typeof FETCH_SUCCESS_FIND_TODOS,
  payload: TodoState
}

export function fetchRequestFindTodos(): FindTodosAction {
  return {
    type: FETCH_REQUEST_FIND_TODOS,
    successAction: result => fetchSuccessFindTodos(result),
    // payload: {
    //   objectName: 'Todo',
    // },
    method: 'find',
  }
}

export function fetchRequestCreateTodo(todo: Todo): CreateTodoAction {
  return {
    type: FETCH_REQUEST_CREATE_TODO,
    successAction: () => fetchRequestFindTodos(),
    payload: todo,
    method: 'create'
  }
}

export function fetchRequestUpdateTodo(todo: Todo): UpdateTodoAction {
  return {
    type: FETCH_REQUEST_UPDATE_TODO,
    successAction: () => fetchRequestFindTodos(),
    payload: todo,
    method: 'update',
  }
}

export function fetchSuccessFindTodos(todos: any/*TodoState*/): any/*SuccessFindTodoAction*/ {
  return {
    type: FETCH_SUCCESS_FIND_TODOS,
    payload: todos,
  }
}

export function fetchSuccessCreateTodo(result: any) {
  return {
    type: SUCCESS_CREATE_TODO,
    payload: result
  }
}

export function fetchSuccessUpdateTodo(result: any) {
  return {
    type: SUCCESS_UPDATE_TODO,
    payload: result
  }
}

export type TodoActions = FindTodosAction | SuccessCreateTodo | UpdateTodoAction | SuccessFindTodoAction