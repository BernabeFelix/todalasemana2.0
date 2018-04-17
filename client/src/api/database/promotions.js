import database from './database';
import r from '../../routes';

const defaultImage = 'https://placebear.com/200/300';

const ref = 'promotions/';

// todo: add userId as parameter
// Check types/Promotion for reference
export const addPromotion = async ({
  title,
  description,
  isActive = true,
  imgUrl = defaultImage
}) =>
  await database.add(ref, {
    title,
    isActive,
    description,
    imgUrl
  });

export const editPromotion = async ({
  title,
  description,
  isActive = true,
  imgUrl = defaultImage
}) =>
  await database.update(ref, {
    title,
    isActive,
    description,
    imgUrl
  });

export const getPromotion = async (id, onSuccess) =>
  await database.get(`${ref}${id}`, onSuccess);

export const getPromotions = async onSuccess =>
  await database.get(ref, onSuccess);
