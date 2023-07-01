import Link from "next/link";
import Back from "./_icons/Back";

const BackButton = ({ href }: { href: string }) => {
  return (
    <Link
      href={href}
      className="text-xl flex items-center justify-center w-20 bg-slate-100 m-6 p-2 rounded-md hover:bg-slate-200 hover:shadow-sm dark:bg-secondary dark:text-white"
    >
      <Back />
      Back
    </Link>
  );
};

export default BackButton;
