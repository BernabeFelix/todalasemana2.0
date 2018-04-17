import { combineReducers } from 'redux';
import customers from './customers/reducer';
import promotions from './promotions/reducer';

const rootReducer = combineReducers({
  promotions,
  customers
});

export default rootReducer;
