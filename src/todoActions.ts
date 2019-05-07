import { Todo, TodoState } from "./types";

export const FETCH_REQUEST_FIND_TODOS = "todo/FETCH_REQUEST_FIND_TODOS";
export const FETCH_SUCCESS_FIND_TODOS = "todo/FETCH_SUCCESS_FIND_TODOS";
export const FETCH_REQUEST_CREATE_TODO = "todo/FETCH_REQUEST_CREATE_TODO";
export const FETCH_REQUEST_UPDATE_TODO = "todo/FETCH_REQUEST_UPDATE_TODO";

export interface FindTodosAction {
    type: typeof FETCH_REQUEST_FIND_TODOS,
    method: 'find',
    successAction: (result: any) => void,
    payload: {
      objectName: string,
    }
}

export interface CreateTodoAction {
  type: typeof FETCH_REQUEST_CREATE_TODO,
  successAction: () => void,
  payload: Todo,
  method: 'create',
}

export interface UpdateTodoAction {
  type: typeof FETCH_REQUEST_UPDATE_TODO,
  successAction: () => void,
  payload: Todo
  method: 'update',
}

export interface SuccessFindTodoAction {
  type: typeof FETCH_SUCCESS_FIND_TODOS,
  payload: TodoState
}

export function fetchRequestFindTodos(): FindTodosAction {
  return {
    type: FETCH_REQUEST_FIND_TODOS,
    successAction: result => fetchSuccessFindTodos(result),
    payload: {
      objectName: 'Todo',
    },
    method: 'find',
  }
}

export function fetchRequestCreateTodo(todo: Todo): CreateTodoAction {
  return {
    type: FETCH_REQUEST_CREATE_TODO,
    successAction: () => fetchRequestFindTodos(),
    payload: todo,
    method: 'create',
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

export function fetchSuccessFindTodos(todos: TodoState): SuccessFindTodoAction {
  return {
    type: FETCH_SUCCESS_FIND_TODOS,
    payload: todos,
  }
}

export type TodoActions = FindTodosAction | CreateTodoAction | UpdateTodoAction | SuccessFindTodoAction