import DataBase from './database';

const ref = 'customers/';

export const createCustomer = async data => await DataBase.add(ref, data);
