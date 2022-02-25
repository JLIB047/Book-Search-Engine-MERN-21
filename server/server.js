const express = require('express');
const path = require('path');
//import apollo server 
const { ApolloServer } = require('apollo-server-express');
const db = require('./config/connection');
const routes = require('./routes');
const { typeDefs, resolvers } = require('./schemas')
const {authMiddleware} = require('./utils/auth');

//express server 
const app = express();
const PORT = process.env.PORT || 3001;

//apollo server 
const server = new ApolloServer({
  typeDefs,
  resolvers, 
  context: authMiddleware
})

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});