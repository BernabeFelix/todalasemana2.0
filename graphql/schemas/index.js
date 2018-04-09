import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import promotions from './promotions';
import promotion from './promotion';

const QueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'Main query object',
  fields: () => ({
    promotions,
    promotion
  })
});

const schema = new GraphQLSchema({
  query: QueryType
});

export default schema;
