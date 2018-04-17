import { createAction } from 'redux-actions';
import { getPromotions } from '../../api/database/promotions';

export const receivePromotions = createAction(
  'RECEIVE_PROMOTIONS',
  promotions => promotions
);

const objToArrOfObj = obj => Object.keys(obj).map(id => ({ ...obj[id], id }));

export const fetchPromotions = () => async dispatch => {
  let promotions = await getPromotions();
  promotions = objToArrOfObj(promotions.val());

  dispatch(receivePromotions(promotions));
};
