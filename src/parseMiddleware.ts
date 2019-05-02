import Parse from 'parse';

const findAPI = (dispatch: any, objectName: any, successAction: any) => {
  const query = new Parse.Query(Parse.Object.extend(objectName));
  return query.find()
    .then(result => dispatch(successAction(result)))
    .catch(error => console.error(error.message));
};

const createAPI = (dispatch: any, formData: any, objectName: any, successAction: any) => {
  const NewObject = Parse.Object.extend(objectName);
  const object = new NewObject();
  const keys = Object.keys(formData);
  keys.map(key => object.set(key, formData[key]));
  return object.save()
    .then((result: any) => dispatch(successAction(result)))
    .catch((error: any) => console.error(error.message));
};

const updateAPI = (dispatch: any, formData: any, object: any, successAction: any) => {
  const keys = Object.keys(formData);
  keys.map(key => object.set(key, formData[key]));
  return object.save()
    .then((result: any) => dispatch(successAction(result)))
    .catch((error: any) => console.error(error.message));
};

const choseAPI = (store: any, action: any) => {
  if (action.payload && action.payload.method === 'find') {
    return findAPI(
      store.dispatch,
      action.payload.objectName,
      action.payload.successAction,
    );
  }
  if (action.payload && action.payload.method === 'create') {
    return createAPI(
      store.dispatch,
      action.payload.formData,
      action.payload.objectName,
      action.payload.successAction,
    );
  }
  if (action.payload && action.payload.method === 'update') {
    return updateAPI(
      store.dispatch,
      action.payload.formData,
      action.payload.object,
      action.payload.successAction,
    );
  }
  return Promise.resolve(() => console.log('error'));
};

const parseMiddleware = (store: any) => (next: any) => (action: any) => {
  if (action.type && action.type.substring(0, 13) === 'FETCH_REQUEST') {
    if (action.payload && action.payload.method) {
      next(action);
      return choseAPI(store, action);
    }
  }
  next(action);
};

export default parseMiddleware;
