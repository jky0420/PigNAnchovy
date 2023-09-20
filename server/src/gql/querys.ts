import { GraphQLObjectType } from 'graphql/type';
import user_query from './User/user_query';

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    ...user_query,
  }),
});

export default Query;
