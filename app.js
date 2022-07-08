const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./Schema");

dotenv.config({ path: "./.env" });

const app = express();
const PORT = process.env.PORT || 6896;

//helps to avoid typing console.log
function print(value) {
  console.log(value);
}

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  print("Server is running on port " + PORT);
});
