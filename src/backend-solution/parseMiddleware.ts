import Parse from 'parse'
import { 
  FindTodosAction,
  CreateTodoAction,
  UpdateTodoAction,
  fetchSuccessCreateTodo,
  fetchSuccessUpdateTodo,
  fetchSuccessFindTodos,
} from './todoActions';
import { Todo } from './types';
import { Dispatch } from 'redux';

const convertTodoFromParse = (parseTodo: any) => {
  return {
    id: parseTodo.id,
    text: parseTodo.get("text"),
    status: parseTodo.get("status")
  }
}

const findAPI = (dispatch: Dispatch) => {
  const parseTodo = Parse.Object.extend("todo");
  const query = new Parse.Query(parseTodo)
  query.containedIn("status", ["active"]);
  return query.find()
    .then(result => dispatch(fetchSuccessFindTodos(result.map(parseTodo => convertTodoFromParse(parseTodo)))))
    .catch(error => console.error(error.message))
}

const createAPI = (dispatch: Dispatch, action: CreateTodoAction) => {
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

const updateAPI = (dispatch: Dispatch, action: UpdateTodoAction) => {
  const todo: Todo = action.payload
  const NewObject = Parse.Object.extend("todo")
  const object = new NewObject()
  object.set("id", todo.id)
  object.set("text", todo.text)
  object.set("status", "done")
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
    default:
      return Promise.resolve(() => console.log('error'));
  }
};

type parseMiddlewareActions = FindTodosAction | CreateTodoAction | UpdateTodoAction

const parseMiddleware = (store: any) => (next: any) => (action: parseMiddlewareActions) => {
  if (action.type && action.type.includes('FETCH_REQUEST')) {
    if (action.method) {
      next(action);
      return choseAPI(store, action);
    }
  }
  next(action);
};

export default parseMiddleware;
