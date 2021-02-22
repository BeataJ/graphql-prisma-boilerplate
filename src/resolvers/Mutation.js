import bcryptjs from 'bcryptjs';
import hashPassword from '../utils/hashPassword';
import generateToken from '../utils/generateToken';
import getUserId from '../utils/getUserId';

const Mutation = {
  createUser: async (parent, args, { prisma }, info) => {
    const password = await hashPassword(args.data.password);

    const user = await prisma.mutation.createUser({
      data: {
        ...args.data,
        password,
      },
    });

    return {
      user,
      token: generateToken(user.id),
    };
  },
  loginUser: async (parent, args, { prisma }, info) => {
    const user = await prisma.query.user({
      where: {
        email: args.data.email,
      },
    });

    if (!user) {
      throw new Error('Unable to login');
    }

    const isMatch = await bcryptjs.compare(args.data.password, user.password);

    if (!isMatch) {
      throw new Error('Unable to login');
    }

    return {
      user,
      token: generateToken(user.id),
    };
  },
  deleteUser: async (parent, args, { prisma, request }, info) => {
    const userId = getUserId(request);

    return prisma.mutation.deleteUser(
      {
        where: {
          id: userId,
        },
      },
      info
    );
  },
  updateUser: async (parent, args, { prisma, request }, info) => {
    const userId = getUserId(request);

    if (typeof args.data.password === 'string') {
      args.data.password = await hashPassword(args.data.password);
    }

    return prisma.mutation.updateUser(
      {
        where: {
          id: userId,
        },
        data: args.data,
      },
      info
    );
  },
};

export { Mutation as default };
