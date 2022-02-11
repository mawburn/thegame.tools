import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: process.env.GQL_ENDPOINT,
  headers: {
    'x-hasura-admin-secret': process.env.GQL_KEY!,
  },
  cache: new InMemoryCache(),
})

export default client
