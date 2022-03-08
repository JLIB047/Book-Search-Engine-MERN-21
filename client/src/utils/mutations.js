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
    mutation saveBook($authors: [String], $description: String, $bookId: String, $forSale: String, $image: String, $link: String, $title: String){
        saveBook(authors: $authors, description: $description, bookId: $bookId, forSale: $forSale, image: $image, link: $link, title: $title){
            _id
            username
            savedBooks {
                authors
                description 
                bookId
                forSale
                image
                link 
                title
            }
        }
    }
`;

export const REMOVE_BOOK = gql `
    mutation removeBook($bookId: String!) {
        removeBook(bookId: $bookId) {
            username
            email
            bookCount
            saveBooks {
                authors 
                description 
                bookId
                image
                link 
                title
            }
        }
    }
`;