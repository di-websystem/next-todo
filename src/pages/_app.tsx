import { Provider } from 'next-auth/client';
import { AppProps } from 'next/app';
import Head from 'next/head';
import Main from '../components/atoms/Main';
import Background from '../components/atoms/background/Background';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <>
    <Head>
      <title key="title">next.js-app</title>
      <link rel="manifest" href="/manifest.json" />
      <meta
        key="viewport"
        name="viewport"
        content="width=device-width,initial-scale=1.0,viewport-fit=cover"
      />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" href="/android-chrome-256x256.png" />
    </Head>

    <Provider session={pageProps.session}>
      <Background />
      <Main>
        <Component {...pageProps} />
      </Main>
    </Provider>
  </>
);

export default MyApp;
