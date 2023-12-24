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
        className="w-full h-full bg-cover bg-center bg-no-repeat border-2 border-dark-primary border-opacity-25"
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
