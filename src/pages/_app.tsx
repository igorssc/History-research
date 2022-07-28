import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import { Footer } from "../components/Footer";
import { Menu } from "../components/Menu";
import { client } from "../lib/apollo";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Menu />
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
      <Footer />
    </>
  );
}

export default MyApp;
