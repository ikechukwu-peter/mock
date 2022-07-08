const { GraphQLObjectType, GraphQLInt, GraphQLString } = require("graphql");

const TransactionType = new GraphQLObjectType({
  name: "transaction",
  fields: () => ({
    id: {
      type: GraphQLInt,
    },
    status: {
      type: GraphQLString,
    },
    name: {
      type: GraphQLString,
    },
    date: {
      type: GraphQLString,
    },
    type: {
      type: GraphQLString,
    },
  }),
});

module.exports = TransactionType;
