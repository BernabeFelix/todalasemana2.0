import DataBase from './database';

const ref = 'customers/';

export const createCustomer = async data => {
  const newCustomer = { ...data, dateCreated: Date.now() };

  await DataBase.add(ref, newCustomer);
};

export const getAllCustomers = async () => await DataBase.get(ref);

export const getCustomer = async id => await DataBase.get(ref + id);
