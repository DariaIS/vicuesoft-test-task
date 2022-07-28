import React from "react";
import { AppProps } from "next/app";
import "@styles/global.css";
import "@styles/variables.css";

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}

export default MyApp;
