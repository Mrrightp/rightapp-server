module.exports = {
  Query: {
    Topics: async () => {
      const users = await prisma.topic.findMany({});
      console.log(users);
      return users;
    },
    Topic: async (parents, args) => {
      const user = await prisma.topic.findUnique({
        where: {
          id: args.id,
        },
      });
      console.log(user);
      return user;
    },
  },
};
