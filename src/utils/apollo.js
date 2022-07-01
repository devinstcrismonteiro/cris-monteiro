import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'

import { removeLastTrailingSlash } from './index'

let client

/**
 * getApolloClient
 */

export function getApolloClient() {
  if (!client) {
    client = _createApolloClient()
  }
  return client
}

/**
 * createApolloClient
 */

export function _createApolloClient() {
  const endpoint = process.env.WORDPRESS_GRAPHQL_ENDPOINT || 'https://wp.institutocrismonteiro.com.br/graphql'
  
  return new ApolloClient({
    link: new HttpLink({
      uri: removeLastTrailingSlash(endpoint),
    }),
    cache: new InMemoryCache(),
  })
}
