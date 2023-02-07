import Link from "next/link";

const NavItem = ({ text }: { text: string }) => {
  return (
    <Link
      className="text-2xl hover:underline hover:decoration-sky-500 hover:decoration-wavy"
      href="/"
    >
      {text}
    </Link>
  );
};

export default NavItem;
