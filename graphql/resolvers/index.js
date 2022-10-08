const { mergeResolvers } = require('@graphql-tools/merge');
const userResolver = require('./userResolver');
const topicResolver = require('./topicResolver');

const resolvers = [userResolver];

module.exports = mergeResolvers(resolvers);
