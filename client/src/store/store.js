import { createStore } from 'redux';
import reducer from './root-reducer';

const configureStore = () => {
  const store = createStore(reducer);

  return store;
};

export default configureStore;
