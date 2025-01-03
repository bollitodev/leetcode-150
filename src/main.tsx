import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

import './index.css'
import App from './App.tsx'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  headers: {
    Cookie:"LEETCODE_SESSION=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfYXV0aF91c2VyX2lkIjoiNDA4MTA2OCIsIl9hdXRoX3VzZXJfYmFja2VuZCI6ImFsbGF1dGguYWNjb3VudC5hdXRoX2JhY2tlbmRzLkF1dGhlbnRpY2F0aW9uQmFja2VuZCIsIl9hdXRoX3VzZXJfaGFzaCI6IjA3NDZlNzg1YWFmY2IyYzNkMzIxZmQyNzMzNTFjMjc4MThiNjE2MTEzNTM1ZGNhMzU2MDg1OWMwMjI3MGMzZjgiLCJzZXNzaW9uX3V1aWQiOiI2MjRlOTdlNSIsImlkIjo0MDgxMDY4LCJlbWFpbCI6Imx1aXNybXMwNzNAZ21haWwuY29tIiwidXNlcm5hbWUiOiJEYW5pUlIxMCIsInVzZXJfc2x1ZyI6IkRhbmlSUjEwIiwiYXZhdGFyIjoiaHR0cHM6Ly9hc3NldHMubGVldGNvZGUuY29tL3VzZXJzL2x1aXNybXMwNzMvYXZhdGFyXzE2MTY4Nzk1NDcucG5nIiwicmVmcmVzaGVkX2F0IjoxNzM1ODUyMDg4LCJpcCI6IjU0Ljg2LjUwLjEzOSIsImlkZW50aXR5IjoiNmNiM2E3MWZlMWNkZDdmNDkxMjE5MjNhOTM5ODAwNmUiLCJkZXZpY2Vfd2l0aF9pcCI6WyIxMzBmN2RmZTA2MjkzY2YzYjNkMzI1YTM3MDIwYTQ5YyIsIjI4MDY6MjkwOmE4MGE6MWM3MDpkZDQ6NjNhOTo4NDc5Ojk5N2IiXX0.yo3jfYkOeNEZ4NmdEDyKZO4E41TskA0_lcKillr9i5Y; csrftoken=4N29ohoyfxgpwpk8BF4RbXmVENLWYF0yo7tnX5dmlYxejlLn6v6pv7ScxKCndpGR"
  },
  cache: new InMemoryCache(),
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </StrictMode>,
)
