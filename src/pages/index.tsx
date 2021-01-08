import Head from 'next/head';
import LandingPage from 'src/componentes/pages/LandingPage';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LandingPage />
    </div>
  );
}
