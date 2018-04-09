import { GraphQLInt, GraphQLNonNull } from 'graphql';
import fakePromotions from '../../routes/promos/promotions';
import Promotion from '../types/Promotion';

const promotion = {
  type: Promotion,
  args: {
    id: { type: new GraphQLNonNull(GraphQLInt) }
  },
  resolve: (root, { id }) => fakePromotions.find(promo => promo.id === id)
};

export default promotion;
