var prisma = require('../../prisma/connection');

module.exports = {
  Query: {
    users: async () => {
      const users = await prisma.user.findMany({});
      console.log(users);
      return users;
    },
    user: async (parents, args) => {
      const user = await prisma.user.findUnique({
        where: {
          id: args.id,
        },
      });
      console.log(user);
      return user;
    },
    topics: async () => {
      const users = await prisma.topic.findMany({});
      // console.log(users);
      return users;
    },
    topic: async (parents, args) => {
      const user = await prisma.topic.findUnique({
        where: {
          id: args.id,
        },
      });
      console.log(user);
      return user;
    },
  },

  Topic: {
    author: async (parents, args) => {
      const user = await prisma.user.findUnique({
        where: {
          id: parents.authorId,
        },
      });
      console.log(parents, 'gaga');
      return user;
    },
  },
  User: {
    Topics: async (parents) => {
      const topics = await prisma.topic.findMany({
        where: {
          authorId: parents.id,
        },
      });
      console.log(topics);
      return topics;
    },
  },
};
