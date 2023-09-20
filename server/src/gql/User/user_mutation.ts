import { GraphQLNonNull } from 'graphql/type';
import { UserType, UserInput } from './user_types';
import { UserInterface } from '../../interface/interfaces';
import { startSession } from 'mongoose';
import User_Model from '../../models/user_models';

const user_mutation = {
  createUser: {
    type: UserType,
    args: {
      input: { type: new GraphQLNonNull(UserInput) },
    },
    resolve: async (
      src: any,
      args: any,
      context: any
    ): Promise<UserInterface> => {
      let user: UserInterface = {} as any;

      const session = await startSession();

      try {
        await session.startTransaction();

        user = new User_Model({ ...args.input });

        await user.save();

        await session.commitTransaction();
      } catch (err) {
        await session.abortTransaction();

        throw err;
      }

      await session.endSession();

      return user;
    },
  },
};

export default user_mutation;
