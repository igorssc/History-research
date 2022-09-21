import { ApolloClient, InMemoryCache } from "@apollo/client";

const isDevelopment = process.env.NODE_ENV === "development";

export const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_ACCESS_TOKEN}`,
  },

  cache: new InMemoryCache(),
});
