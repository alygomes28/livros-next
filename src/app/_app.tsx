import 'bootstrap/dist/css/bootstrap.min.css';
import 'global.css';
// Importe o componente App do Next.js
import { AppProps } from 'next/app';
import Head from 'next/head';

// Defina o componente App personalizado
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

// Exporte o componente App personalizado
export default MyApp;
