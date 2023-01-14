import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import type { AppProps } from "next/app";

import { ThemeProvider } from "@mui/material/styles";
import { CacheProvider, EmotionCache } from "@emotion/react";

import Head from "next/head";
import theme from "@/utilities/common/theme";
import CssBaseline from "@mui/material/CssBaseline";
import createEmotionCache from "@/utilities/common/createEmotionCache";

const clientSideEmotionCache = createEmotionCache();

interface GlobalProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function App(props: GlobalProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />;
      </ThemeProvider>
    </CacheProvider>
  );
}
