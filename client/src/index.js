import React from 'react';
import ReactDOM from 'react-dom';

import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://localhost:4000/graphql' }),
  cache: new InMemoryCache()
})

import './index.css';
import App from './components/App';

import gql from 'graphql-tag'

client.query({ query: gql` {
  collection {
    id
    desc
    products {
      id
      name
      price
    }
  }
}
`}).then(console.log)

ReactDOM.render(
  <ApolloProvider client={client} >
    <App />
  </ApolloProvider>, 
  document.getElementById('root')
)

