import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Head>
        <title>Welcome to ALX Project</title>
      </Head>
      <h1 className="text-4xl font-bold text-center">Welcome to ALX Project</h1>
      <p className="mt-4 text-center">This is a sample project using Next.js with TypeScript and Tailwind CSS.</p>
    </div>
  );
};

export default Home;
