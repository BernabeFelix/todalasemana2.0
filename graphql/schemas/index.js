import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import promotions from './promotions';

const QueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'Main query object',
  fields: () => ({
    promotions
  })
});

const schema = new GraphQLSchema({
  query: QueryType
});

export default schema;
