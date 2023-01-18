import Link from "next/link";
import ThemeButton from "./ThemeButton";

const Navbar = () => {
  return (
    <nav className="flex justify-around py-4 bg-slate-100 h-16 items-center">
      <Link
        className="text-2xl hover:underline hover:decoration-sky-500 hover:decoration-wavy"
        href="/"
      >
        Home
      </Link>
      <Link
        className="text-2xl hover:underline hover:decoration-sky-500 hover:decoration-wavy"
        href="/contact"
      >
        Contact
      </Link>
      <Link
        className="text-2xl hover:underline hover:decoration-sky-500 hover:decoration-wavy"
        href="https://aidantomcy.github.io"
      >
        About the creator
      </Link>
      <ThemeButton />
    </nav>
  );
};

export default Navbar;
