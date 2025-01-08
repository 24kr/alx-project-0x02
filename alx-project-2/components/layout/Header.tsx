import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-800 p-4">
      <nav className="container mx-auto flex justify-between">
        <Link href="/home">
          <a className="text-white">Home</a>
        </Link>
        <Link href="/about">
          <a className="text-white">About</a>
        </Link>
        <Link href="/posts">
          <a className="text-white">Posts</a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
