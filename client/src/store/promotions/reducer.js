import { handleActions } from 'redux-actions';
import { receivePromotions } from './actions-creators';

const initialState = {
  data: []
};

const reducer = handleActions(
  {
    [receivePromotions]: (state, { payload }) => ({
      ...state,
      data: payload
    })
  },
  initialState
);

export default reducer;
