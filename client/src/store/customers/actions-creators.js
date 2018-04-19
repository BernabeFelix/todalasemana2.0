import { createAction } from 'redux-actions';
import { objToArrOfObj } from '../../utils/object';
import { getAllCustomers } from '../../api/database/customers';

export const receiveCustomers = createAction(
  'RECEIVE_CUSTOMERS',
  customers => customers
);

export const fetchCustomers = () => async dispatch => {
  let customers = await getAllCustomers();
  customers = objToArrOfObj(customers.val());

  dispatch(receiveCustomers(customers));
};
