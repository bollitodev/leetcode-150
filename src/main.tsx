import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { ApolloProvider, ApolloClient, InMemoryCache, HttpLink} from "@apollo/client";

import './index.css'
import App from './App.tsx'

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://localhost:4000/graphql',
    credentials: 'same-origin',
  }),
  cache: new InMemoryCache(),
})


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </StrictMode>,
)
