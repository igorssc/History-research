import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_ACCESS_TOKEN}`,
  },
  cache: new InMemoryCache(),
});

// export const client = new ApolloClient({
//   uri: "https://api-sa-east-1.hygraph.com/v2/cl64hbwg97q7x01ukazf4a7t6/master",
//   // headers: {
//   //   Authorization:
//   //     "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NTg5Nzk5MTksImF1ZCI6WyJodHRwczovL2FwaS1zYS1lYXN0LTEuaHlncmFwaC5jb20vdjIvY2w2NGhid2c5N3E3eDAxdWthemY0YTd0Ni9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiYWFmMDQzYmYtNjI0MC00MDFiLWJmMWMtNDkyMTE2YTQ0NWRmIiwianRpIjoiY2w2NGh0NmU4ODJ1aTAxdWtoM3J5OXFmYSJ9.wimVNmLs9HVcRodj-89nLx2NS2iixP3Hau-lg2nlfglBUBZIFlSZddFb72h4nVvQgq-q3xDRQE7U7dCufE01DzkZlE2KMEnOzZA8Sr1Uhy06fqIOn9JcssquXK8KsUzikDW0RwtKCBbYcbGe5Q4D0Un29WPkKY4vCy_Gcj33cAht-614-wCBU-LrwfSR6e2yVplqXIZBi2yGNfYiQK_NTXV4zi6vCB-sJWEcn0pHfR5AGCsOcUzncduBiH82M9YCiOeiQii9aoV2c3u3kufkmyyMyRrbyjNYhdV5P2FZfcTtD9BmMQ77rYcSAULyIEL8bnO9Zob59qkcw-9qEq-uF03xDkxU162K-JWXyAwO_YKtrYtzLoTwOenOeeP5avK-o2ceOax9gnZq2cwYyFkTLNNeAfVN1g4dyx-UPKtTjK0aJoOwkShMUnoTz00vCwdy9G8UV-XnN892aJtOqThOrWsOfFnwSWboH8la_aQaZx97HDCnRBiFaQTuRbDDRQRSfpnwdfJf6tPYATXHtVMotA0AkOs5qv9m3hH34x8PRaFBlZE61Fr85_7W1xTfKUkOsO6j3H4BGKFpYE1GOQ5cpA4nxCaF3Uabeakve4rGyKkAiHGQRte5lm__oYxukSu5OxHw6xpwfabeU_Tyj4UH4wlwBeKwmHyGzEXFMHcAyN8",
//   // },
//   cache: new InMemoryCache(),
// });

// export const client = new ApolloClient({
//   uri: process.env.NEXT_PUBLIC_VITE_API_URL,
//   headers: {
//     Authorization: `Bearer ${process.env.NEXT_PUBLIC_VITE_API_ACCESS_TOKEN}`,
//   },
//   cache: new InMemoryCache(),
// });
