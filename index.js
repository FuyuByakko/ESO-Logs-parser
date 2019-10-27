/**
 ********************************DEPENDENCIES********************************
 ****************************************************************************
 */

//Create a config file to connect to the database
const config = require("./config");

// initialize a connection to the database, and pass this
const knex = require("knex")(config.db);

// express server
const express = require("express");
const app = express();

//setup GraphQL
const graphqlHTTP = require("express-graphql");
const { buildSchema } = require("graphql");
//get schema and resolvers
const schema = require("./models/schema");
const graphqlSchema = buildSchema(schema);
const resolvers = require("./models/resolvers")(knex);

/**
 ********************************SERVER SETUP********************************
 ****************************************************************************
 */

// If the requests begin with '/graphQL', hand them off to the graphQL resolvers
app.use(
  "/graphql",
  graphqlHTTP({
    schema: graphqlSchema,
    rootValue: resolvers,
    graphiql: true,
  })
);
app.use(express.static(`./public`)); // otherwise load the client app

// 5. Catch unhandled errors
// eslint-disable-next-line no-unused-vars
app.use((_err, _req, res, _next) => {
  return res.status(500).send("Internal Error.");
});

/**
 ********************************START SERVER********************************
 ****************************************************************************
 */

app.listen(config.express.port, () => {
  console.log(`Server up and listening on port ${config.express.port}`);
});
