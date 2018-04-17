import React from 'react';
import NewEditPromotion from './NewEditPromotion';
import { addPromotion } from '../../api/database/promotions';

const NewPromotion = () => <NewEditPromotion onSubmit={addPromotion} />;

export default NewPromotion;
