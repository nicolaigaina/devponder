import { AppProps } from 'next/app';
import Head from 'next/head';
import Providers from '../components/Providers';
import GlobalStyle from '../styles/globalStyles';

const App: React.FC<AppProps> = ({
  Component,
  pageProps,
}: AppProps): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <Providers>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;1,300;1,400;1,500;1,600&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Component {...pageProps} />
      </Providers>
    </>
  );
};

export default App;
