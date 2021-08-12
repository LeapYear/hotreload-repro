Minimal repro for hot reload bug.

To repro:

1. check out this repo & cd into it
2. `npm i`
3. `npm run start:dev`
4. open your local GraphQL Playground at [`http://localhost:3000/graphql`](http://localhost:3000/graphql)
5. execute the query:

```graphql
query {
  users {
    name
  }
}
```

6. edit `src/user.resolver.ts` to return different data
7. back in the GraphQL Playground, re-run the query

Result:

```
Error: Cannot execute GraphQL operations after the server has stopped.
  at ApolloServer.<anonymous> (/Users/davidgolightly/dev/hotreload/.yarn/__virtual__/apollo-server-core-virtual-4a38e28045/0/cache/apollo-server-core-npm-2.25.2-17277a84d0-9470fd40eb.zip/node_modules/apollo-server-core/dist/ApolloServer.js:306:31)
  at Generator.next (<anonymous>)
  at /Users/davidgolightly/dev/hotreload/.yarn/__virtual__/apollo-server-core-virtual-4a38e28045/0/cache/apollo-server-core-npm-2.25.2-17277a84d0-9470fd40eb.zip/node_modules/apollo-server-core/dist/ApolloServer.js:8:71
  at new Promise (<anonymous>)
  at __awaiter (/Users/davidgolightly/dev/hotreload/.yarn/__virtual__/apollo-server-core-virtual-4a38e28045/0/cache/apollo-server-core-npm-2.25.2-17277a84d0-9470fd40eb.zip/node_modules/apollo-server-core/dist/ApolloServer.js:4:12)
  at ApolloServer.ensureStarted (/Users/davidgolightly/dev/hotreload/.yarn/__virtual__/apollo-server-core-virtual-4a38e28045/0/cache/apollo-server-core-npm-2.25.2-17277a84d0-9470fd40eb.zip/node_modules/apollo-server-core/dist/ApolloServer.js:283:16)
  at ApolloServer.<anonymous> (/Users/davidgolightly/dev/hotreload/.yarn/__virtual__/apollo-server-core-virtual-4a38e28045/0/cache/apollo-server-core-npm-2.25.2-17277a84d0-9470fd40eb.zip/node_modules/apollo-server-core/dist/ApolloServer.js:661:83)
  at Generator.next (<anonymous>)
  at /Users/davidgolightly/dev/hotreload/.yarn/__virtual__/apollo-server-core-virtual-4a38e28045/0/cache/apollo-server-core-npm-2.25.2-17277a84d0-9470fd40eb.zip/node_modules/apollo-server-core/dist/ApolloServer.js:8:71
  at new Promise (<anonymous>)
```