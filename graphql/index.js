import graphqlHTTP from 'express-graphql';
import schema from './schemas';


const graphqlApp = graphqlHTTP({
  graphiql: true,
  schema
});

export default graphqlApp;
