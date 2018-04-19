export const objToArrOfObj = obj =>
  Object.keys(obj).map(id => ({ ...obj[id], id }));
