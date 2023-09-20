import { GraphQLObjectType } from 'graphql/type';
import user_mutation from './User/user_mutation';

const Mutation = new GraphQLObjectType({
  name: 'Mutataion',
  fields: () => ({
    ...user_mutation,
  }),
});

export default Mutation;
