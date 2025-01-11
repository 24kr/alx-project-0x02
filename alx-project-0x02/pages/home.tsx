import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/layout/Header';
import Card from '../components/common/Card';
import PostModal from '../components/common/PostModal';
import { useState } from 'react';

const Home: NextPage = () => {
  const [posts, setPosts] = useState<{ title: string; content: string }[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSavePost = (title: string, content: string) => {
    setPosts([...posts, { title, content }]);
  };

  return (
    <>
      <Header />
    <div className="container mx-auto px-4 py-10 min-w-full">
      <Head>
        <title>Home</title>
      </Head>
      <h1 className="text-5xl font-serif font-bold text-center mb-8">Home Page</h1>
      <div className="container mx-auto px-4 py-10 flex justify-center">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-500 hover:bg-blue-700 text-2xl font-serif hover:text-gray-200 text-white font-bold py-2 px-4 mt-3 rounded items-center"
        >
          Add New Post
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post, index) => (
          <Card key={index} title={post.title} content={post.content} />
        ))}
      </div>
      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSavePost}
      />
    </div>
    </>
  );
};

export default Home;
