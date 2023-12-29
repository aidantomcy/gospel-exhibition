import Link from "next/link";

type Props = { text: string; href: string };

const NavItem = ({ text, href }: Props) => {
  return (
    <Link
      className="font-normal hover:underline hover:decoration-sky-500 hover:decoration-wavy px-2 md:text-xl md:px-4"
      href={href}
    >
      {text}
    </Link>
  );
};

export default NavItem;
