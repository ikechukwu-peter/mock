const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLSchema,
  GraphQLInt,
} = require("graphql");
const TransactionType = require("./TypeDefs/TransactionType");
const transactionData = require("../data/MOCK_DATA.json");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    transactions: {
      type: new GraphQLList(TransactionType),
      args: { id: { type: GraphQLInt } },
      resolve(parent, args) {
        return transactionData;
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
