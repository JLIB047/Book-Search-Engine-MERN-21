const express = require('express');
const path = require('path');
//import apollo server 
const { ApolloServer } = require('apollo-server-express');
//const routes = require('./routes');
const {authMiddleware} = require('./utils/auth');

const { typeDefs, resolvers } = require('./schemas')
const db = require('./config/connection');
//express server 
const PORT = process.env.PORT || 3001;
const app = express();

//apollo server 
const startServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers, 
    context: authMiddleware
  });

  await server.start();

//apply apollo server with express app
  server.applyMiddleware({ app });

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

// if we're in production, serve client/build as static assets
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
  }

  //app.use(routes);

//get all
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    });
  });
};

startServer();