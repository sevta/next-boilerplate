import NextNprogress from "nextjs-progressbar";

import "@fontsource/inter";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";
import "@fontsource/inter/900.css";

import "@fontsource/public-sans";
import "@fontsource/public-sans/500.css";
import "@fontsource/public-sans/600.css";
import "@fontsource/public-sans/700.css";
import "@fontsource/public-sans/800.css";
import "@fontsource/public-sans/900.css";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNprogress />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
