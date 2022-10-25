import type { AppProps } from "next/app";
import Head from "next/head";
import { Fragment } from "react";
import "../styles/main.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <title>Local Mechanic</title>
        <meta name="description" content="PEasyMechTech" />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
