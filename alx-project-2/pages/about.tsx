import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/layout/Header';
import Button from '../components/common/Button';

const About: NextPage = () => {
  return (
    <>
      <Header />
    <div className="container mx-auto px-4 py-8">
      <Head>
        <title>About</title>
      </Head>
      <h1 className="text-4xl font-bold text-center mb-8">About Page</h1>
      <div className="flex justify-center space-x-4">
        <Button size="small" shape="rounded-sm" onClick={() => alert('Small Button Clicked')}>
          Small Button
        </Button>
        <Button size="medium" shape="rounded-md" onClick={() => alert('Medium Button Clicked')}>
          Medium Button
        </Button>
        <Button size="large" shape="rounded-full" onClick={() => alert('Large Button Clicked')}>
          Large Button
        </Button>
      </div>
    </div>
    </>
  );
};

export default About;
