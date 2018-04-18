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

// todo: another function should look at the fields that actually changed not all of them
export const editPromotion = async (id, data) =>
  await database.update(ref + id, data);

export const deletePromotion = async (id) =>
    await database.remove(ref + id);

export const getPromotion = async (id, onSuccess) =>
  await database.get(ref + id, onSuccess);

export const getPromotions = async onSuccess =>
  await database.get(ref, onSuccess);
