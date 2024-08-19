import '@/styles/globals.css';
import { Analytics } from "@vercel/analytics/react"
import { Montserrat } from 'next/font/google';
import Head from 'next/head';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { AudioProvider } from '../components/AudioContext'; // Adjust the path as needed

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: "--font-mont"
});

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <AudioProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${montserrat.variable} font-mont bg-light w-full min-h-screen`}>
        <NavBar />
        <AnimatePresence mode="wait">
          <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
        <Footer />
      </main>
      <Analytics />
    </AudioProvider>
  );
}
