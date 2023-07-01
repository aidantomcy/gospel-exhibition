import Link from "next/link";

type Props = { text: string , href: string }

const NavItem = ({ text, href }: Props) => {
  return (
    <Link
      className="text-2xl hover:underline hover:decoration-sky-500 hover:decoration-wavy"
      href={href}
    >
      {text}
    </Link>
  );
};

export default NavItem;
