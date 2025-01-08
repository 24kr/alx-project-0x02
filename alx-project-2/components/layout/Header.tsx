import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-800 p-4">
      <nav className="container mx-auto flex justify-between">
        <Link href="/pages/home"
           className="text-white">Home
        </Link>
        <Link href="/pages/about"
          className="text-white">About
        </Link>
        <Link href="/pages/posts"
           className="text-white">Posts
        </Link>
      </nav>
    </header>
  );
};

export default Header;
