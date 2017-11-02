/* @flow */
import express from "express";
import cors from "cors";
import morgan from "morgan";
import graphqlHTTP from "express-graphql";

import schema from "./schema";

const __DEV__ = process.env.NODE_ENV !== "production"; // eslint-disable-line no-underscore-dangle

const app = express();

app.use(cors());

app.use(morgan("tiny"));

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: __DEV__,
  }),
);

const port = process.env.PORT || 8081;

app.listen(port, () => {
  console.log(`[graphql] Listening at ${port}`); // eslint-disable-line no-console
});
