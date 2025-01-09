import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-800 p-4">
      <nav className="container flex justify-around">
        <Link href="/home"
           className="text-white font-bold font-serif">Home
        </Link>
        <Link href="/about"
          className="text-white font-bold font-serif">About
        </Link>
        <Link href="/posts"
           className="text-white font-bold font-serif">Posts
        </Link>
        <Link href="/users"
           className="text-white font-bold font-serif">Users
        </Link>
      </nav>
    </header>
  );
};

export default Header;
