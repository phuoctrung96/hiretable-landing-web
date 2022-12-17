import type { AppProps } from 'next/app';
import { Manrope } from '@next/font/google';
import { TabContentProvider } from 'contexts/TabContentProvider';
import '../styles/globals.css';
import '../styles/infinitelooper.css';

const manrope = Manrope({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <TabContentProvider>
      <main className={manrope.className}>
        <Component {...pageProps} />
      </main>
    </TabContentProvider>
  );
}
