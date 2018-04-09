import { GraphQLList } from 'graphql';
import fakePromotions from '../../routes/promos/promotions';
import Promotion from '../types/Promotion';

const promotions = {
  type: GraphQLList(Promotion),
  resolve: () => fakePromotions
};

export default promotions;
