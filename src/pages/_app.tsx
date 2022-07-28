import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import { SnackbarProvider } from "notistack";
import { Footer } from "../components/Footer";
import { Menu } from "../components/Menu";
import { ScrollTopButton } from "../components/ScrollTopButton";
import { client } from "../lib/apollo";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ApolloProvider client={client}>
        <SnackbarProvider
          maxSnack={3}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <Menu />
          <Component {...pageProps} />
          <ScrollTopButton />
          <Footer />
        </SnackbarProvider>
      </ApolloProvider>
    </>
  );
}

export default MyApp;
