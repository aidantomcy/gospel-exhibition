import Image from "next/image";
import Link from "next/link";

type CardProps = {
  title: string;
  image: string;
  url: string;
  priority?: boolean;
};

const Card = ({ title, image, url, priority }: CardProps) => {
  return (
    <Link
      href={url}
      className="my-6 bg-gray-200 p-4 rounded-xl grid place-items-center select-none h-80 w-52 mx-40 hover:-translate-y-1 hover:cursor-pointer hover:shadow-lg hover:duration-150 dark:bg-dark-secondary dark:text-white"
    >
      <Image
        src={image}
        alt="image cannot be loaded"
        width={150}
        height={150}
        className="rounded-2xl w-40 h-52 object-cover"
        priority
      />
      <div className="text-center py-2">{title}</div>
    </Link>
  );
};

export default Card;
