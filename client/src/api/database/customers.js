import DataBase from './database';

const ref = 'customers/';

export const createCustomer = async data => {
  const newCustomer = { ...data, dateCreated: Date.now() };

  await DataBase.add(ref, newCustomer);
};

export const getCustomerByEmail = async (email, onSuccess) => {
  const refObj = DataBase.getRef(ref);
  const res = await refObj
    .orderByChild('email')
    .equalTo(email)
    .once('value', onSuccess);
  return res;
};

export const getAllCustomers = async () => await DataBase.get(ref);
