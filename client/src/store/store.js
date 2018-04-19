import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducer from './root-reducer';

const configureStore = () => {
  const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
  );

  return store;
};

export default configureStore;
