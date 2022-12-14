import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-around py-4 bg-slate-100">
      <Link
        className="text-2xl hover:underline hover:decoration-sky-500 hover:decoration-wavy"
        href="/"
      >
        Home
      </Link>
      <Link
        className="text-2xl hover:underline hover:decoration-sky-500 hover:decoration-wavy"
        href="/foo"
      >
        Contact
      </Link>
      <Link
        className="text-2xl hover:underline hover:decoration-sky-500 hover:decoration-wavy"
        href="https://aidantomcy.github.io"
      >
        About the creator
      </Link>
    </nav>
  );
};

export default Navbar;
