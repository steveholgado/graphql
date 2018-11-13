const api = require('./api')

module.exports = {
  Book: {
    author: (parent) => api.get(`/authors/${parent.authorId}`)
  },
  Author: {
    fullName: (parent) => `${parent.firstName} ${parent.lastName}`,
    books:    (parent) => api.get(`/authors/${parent.id}/books`)
  },
  Query: {
    books:   (parent, args) => api.get(`/books`),
    book:    (parent, args) => api.get(`/books/${args.id}`),
    authors: (parent, args) => api.get(`/authors`),
    author:  (parent, args) => api.get(`/authors/${args.id}`)
  },
  Mutation: {
    createBook:   (parent, args) => api.post(`/books`, args),
    updateBook:   (parent, args) => api.patch(`/books/${args.id}`, args),
    deleteBook:   (parent, args) => api.delete(`/books/${args.id}`),
    createAuthor: (parent, args) => api.post(`/authors`, args),
    updateAuthor: (parent, args) => api.patch(`/authors/${args.id}`, args),
    deleteAuthor: (parent, args) => api.delete(`/authors/${args.id}`)
  }
}
