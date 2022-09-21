import { ApolloClient, InMemoryCache } from "@apollo/client";

const isDevelopment = process.env.NODE_ENV === "development";

export const client = new ApolloClient({
  uri: !isDevelopment
    ? process.env.NEXT_PUBLIC_API_URL
    : "http://localhost:8080",
  ...(!isDevelopment && {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_ACCESS_TOKEN}`,
    },
  }),
  cache: new InMemoryCache(),
});
