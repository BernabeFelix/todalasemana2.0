import {
  GraphQLBoolean,
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString
} from 'graphql';
import fakePromotions from '../../routes/promos/promotions';

// from ~/client/components/common/types.js
const Promotion = new GraphQLObjectType({
  name: 'Promotion',
  fields: () => ({
    id: {
      type: GraphQLInt
    },
    title: {
      type: GraphQLString
    },
    imgUrl: {
      type: GraphQLString
    },
    isActive: {
      type: GraphQLBoolean
    },
    description: {
      type: GraphQLString
    }
  })
});

const promotions = {
  type: GraphQLList(Promotion),
  resolve: () => fakePromotions
};

export default promotions;
