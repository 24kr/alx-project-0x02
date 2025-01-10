import type { NextPage } from 'next';
import Head from 'next/head';
import Header from './../components/layout/Header';

const Index: NextPage = () => {
  return (
    <>
      <Header/>
      <Head>
        <title>Welcome to Alx Project</title>
      </Head>
    <div className="container mx-auto px-4 py-40 h-full">
      <h1 className="text-4xl font-bold text-center">Welcome to Alx Project</h1>
      <p className="mt-4 text-center">This is a sample project using Next.js with TypeScript and Tailwind CSS.</p>
    </div>
    </>
  );
};

export default Index;
