const path = require('path');
const { mergeTypeDefs } = require('@graphql-tools/merge');
const userTypes = require('./userTypes');

const typesArray = [userTypes];

module.exports = mergeTypeDefs(typesArray);
