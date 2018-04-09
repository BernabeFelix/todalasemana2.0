// from ~/client/components/common/types.js
import {
  GraphQLBoolean,
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString
} from 'graphql';

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

export default Promotion;
