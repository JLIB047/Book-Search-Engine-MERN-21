const { gql } = require('apollo-server-express');

const typeDefs = gql `
    type Book { 
        bookId: String
        authors: [String]
        description: String
        image: String
        forSale: String
        title: String 
    }
    type User {
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }

    type Query {
        me: User
        users: [User]
    } 

    type Mutation {
        login(email: String!, password: String!): Auth
        createUser(username: String!, email: String!, password: String!): Auth
        saveBook(authors: [String], description: String, bookId: String, forSale: String, image: String, title: String ): User
        deleteBook(bookId: String!): User
    }
    
    type Auth {
        token: ID!
        user: User
    }
`;

module.exports = typeDefs; 