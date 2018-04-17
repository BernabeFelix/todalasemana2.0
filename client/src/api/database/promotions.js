import database from './database';

const defaultImage = 'https://placebear.com/200/300';

const ref = 'promotions/';

// todo: add userId as parameter
export const addPromotion = ({ title, description, imageUrl = defaultImage }) =>
  database.add(ref, {
    title,
    description,
    imageUrl
  });
