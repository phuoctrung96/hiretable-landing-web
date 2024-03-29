import type { AppProps } from 'next/app';
import { Manrope } from '@next/font/google';
import { CommonContextProvider } from 'contexts/CommonContext';
import '../styles/globals.css';
import '../styles/infinitelooper.css';

const manrope = Manrope({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CommonContextProvider>
      <main className={manrope.className}>
        <Component {...pageProps} />
      </main>
    </CommonContextProvider>
  );
}
