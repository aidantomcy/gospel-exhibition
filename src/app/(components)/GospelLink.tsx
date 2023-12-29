import Link from "next/link";

type Props = {
  text: string;
  backgroundImage: string;
  href: string;
};

const GospelLink = ({ text, backgroundImage, href }: Props) => {
  return (
    <Link href={href}>
      <div
        className="w-full h-full bg-cover bg-center bg-no-repeat hover:scale-[1.02] transition-all"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <span className="lg:text-4xl md:text-2xl sm:text-xl font-semibold">
          {text}
        </span>
      </div>
    </Link>
  );
};

export default GospelLink;
