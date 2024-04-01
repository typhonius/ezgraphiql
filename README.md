Quick GraphiQL
=

The idea of this repository is to be able to quickly spin up a GraphiQL visualiser from any accessible Hasura instance. This includes the capability to generate a page based on any combination of headers to provide different schema for users.

Setup
-
The repository can be easily set up with the following command:

```
npm install
```

Configure
-
The tool may be configured with three options:
* Port: Which local port GraphiQL runs on
* GraphQL Endpoint: The location of the endpoint to retreive a schema from e.g. your Hasura install
* WSS Endpoint: The location of the WS endpoint to connect to for subscriptions
* Headers: Headers to send to Hasura to alter permissions

Each of these may either be defined on the command line as environment variables or entered into a `.env` file.

An example `.env` file has been included at `example.env`. This may be copied into position and altered as needed.


Run
-
The tool can be started with the following command. This will present the user with a URL to click which will show the GraphiQL explorer specific to the headers provided
```
npm start
```

To define environment variables directly on the command line, use the following command:

```
HEADERS_JSON='{ "x-hasura-admin-secret": "myadminsecretkey", "x-hasura-role": "user", "x-hasura-user-id": "7" }' GRAPHQL_URL='http://localhost:8080/v1/graphql' WSS_URL='ws://localhost:8080/v1/graphql' PORT=12235 npm start
```



