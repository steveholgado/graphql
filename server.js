const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const { importSchema } = require('graphql-import')

const typeDefs = importSchema('./schema.graphql')
const resolvers = require('./resolvers')

const server = new ApolloServer({ typeDefs, resolvers, debug: false })

const app = express()
server.applyMiddleware({ app })

app.listen({ port: 4000 }, () =>
  console.log(`🚀  Server ready at http://localhost:4000${server.graphqlPath}`)
)
