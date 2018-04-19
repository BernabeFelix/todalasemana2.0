import { handleActions } from 'redux-actions';
import { receiveCustomers } from './actions-creators';

const initialState = {
  data: []
};

const reducer = handleActions(
  {
    [receiveCustomers]: (state, { payload }) => ({
      ...state,
      data: payload
    })
  },
  initialState
);

export default reducer;
