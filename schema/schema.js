var { graphql, buildSchema } = require('graphql');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const typeDefs = require('../graphql/types');
const resolvers = require('../graphql/resolvers');

const schema = makeExecutableSchema({
  resolvers,
  typeDefs,
});

module.exports = {
  schema,
};
