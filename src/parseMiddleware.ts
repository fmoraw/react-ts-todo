import Parse from 'parse'
import { Action } from 'redux';
import { FindTodosAction, CreateTodoAction, UpdateTodoAction, SuccessCreateTodoAction, fetchSuccessCreateTodo, fetchSuccessUpdateTodo, SuccessFindTodoAction, fetchSuccessFindTodos, fetchRequestFindTodos } from './todoActions';
import { Todo } from './types';
import { parse } from 'path';

const findAPI = (dispatch: any) => {
  const parseTodo = Parse.Object.extend("todo");
  const query = new Parse.Query(parseTodo)
  query.containedIn("status", ["active"]);
  return query.find()
    .then(result => dispatch(fetchSuccessFindTodos(result.map(parseTodo => convertTodoFromParse(parseTodo)))))
    .catch(error => console.error(error.message))
}

const convertTodoFromParse = (parseTodo: any) => {
  return {
    id: parseTodo.id,
    text: parseTodo.get("text"),
    status: parseTodo.get("status")
  }
}

const createAPI = (dispatch: any, action: CreateTodoAction) => {

  const todo: Todo = action.payload

  const NewObject = Parse.Object.extend("todo")
  const object = new NewObject()

  object.set("text", todo.text)
  object.set("status", "active")

  return object.save()
    .then((result: any) => {
      findAPI(dispatch)
      dispatch(fetchSuccessCreateTodo())
    })
    .catch((error: any) => console.error(error.message))
};

const updateAPI = (dispatch: any, action: UpdateTodoAction) => {

  const todo: Todo = action.payload

  const NewObject = Parse.Object.extend("todo")
  const object = new NewObject()
  object.set("id", todo.id)
  object.set("text", todo.text)
  object.set("status", todo.status)

  return object.save()
    .then((result: any) => {
      findAPI(dispatch)
      dispatch(fetchSuccessUpdateTodo())
    })
    .catch((error: any) => console.error(error.message))
};

const choseAPI = (store: any, action: parseMiddlewareActions | any) => {

  switch(action.method) {
    case 'find': 
      return findAPI(
        store.dispatch,
    //   action.payload.id
      )
    case 'update':
        return updateAPI(
          store.dispatch,
          action
        )
    case 'create':
      return createAPI(
        store.dispatch,
        action,
      )
  }
    

  // if (action.method === 'find') {
  //   return findAPI(
  //     store.dispatch,
  //  //   action.payload.id
  //   );
  // }
  if (action.method === 'create') {
    // return createAPI(
    //   store.dispatch,
    //   action,
    // );
  }
  // if (action.payload && action.method === 'update') {
  //   return updateAPI(
  //     store.dispatch,
  //     action.payload.formData,
  //     action.payload.object,
  //     action.successAction,
  //   );
  // }
  return Promise.resolve(() => console.log('error'));
};

type parseMiddlewareActions = FindTodosAction | CreateTodoAction | UpdateTodoAction

const parseMiddleware = (store: any) => (next: any) => (action: parseMiddlewareActions) => {
  if (action.type && action.type.includes('FETCH_REQUEST')) {
    if (/*action.payload &&*/ action.method) {
      next(action);
      return choseAPI(store, action);
    }
  }
  next(action);
};

export default parseMiddleware;
