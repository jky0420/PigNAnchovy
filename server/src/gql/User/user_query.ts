import { GraphQLList, GraphQLNonNull, GraphQLID } from 'graphql/type';
import { UserType } from './user_types';
import { UserInterface } from '../../interface/interfaces';
import User_Model from '../../models/user_models';

const user_query = {
  users: {
    type: new GraphQLList(UserType),
    resolve: async (
      src: any,
      args: any,
      context: any
    ): Promise<Array<UserInterface>> => {
      let users: Array<UserInterface> = [];

      try {
        users = await User_Model.find();
      } catch (err) {
        throw err;
      }

      return users;
    },
  },
  user: {
    type: UserType,
    args: { _id: { type: new GraphQLNonNull(GraphQLID) } },
    resolve: async (
      src: any,
      args: any,
      context: any
    ): Promise<UserInterface> => {
      let user: UserInterface;
      try {
        user = (await User_Model.findById(args._id)) || ({} as any);
      } catch (err) {
        throw err;
      }
      return user;
    },
  },
};

export default user_query;
