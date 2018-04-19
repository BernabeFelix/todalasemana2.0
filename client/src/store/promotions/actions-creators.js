import { createAction } from 'redux-actions';
import { getPromotions } from '../../api/database/promotions';
import { objToArrOfObj } from '../../utils/object';

export const receivePromotions = createAction(
  'RECEIVE_PROMOTIONS',
  promotions => promotions
);

export const fetchPromotions = () => async dispatch => {
  let promotions = await getPromotions();
  promotions = objToArrOfObj(promotions.val());

  dispatch(receivePromotions(promotions));
};
