import gql from 'graphql-tag';

export const LOGIN_USER = gql `
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password){
            token
            user {
                _id 
                username
            }
        }
    }
`;

export const CREATE_USER = gql `
    mutation createUser($username: String!, $email: String!, $password: String!) {
        createUser(username: $username, email: $email, password: $password){
            token
            user {
                _id
                username
            }
        }
    }
`;

export const SAVE_BOOK = gql `
    mutation savedBook($bookId: String, $authors: [String], $description: String, $image: String, $title: String){
        savedBook(bookId: $bookId, authors: $authors, description: $description, image: $image, title: $title){
            _id
            username
            savedBooks {
                bookId
                authors 
                description 
                image 
                title
            }
        }
    }
`;

export const REMOVE_BOOK = gql `
    mutation deleteBook($bookId: ID!) {
        deleteBook(bookId: $bookId) {
            username
            email
            savedBooks {
                bookId
                authors 
                description 
                image 
                title
            }
        }
    }
`;