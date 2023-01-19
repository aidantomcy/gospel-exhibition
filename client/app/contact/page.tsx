import Link from "next/link";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="">
      <Link
        href="/"
        className="text-xl flex items-center justify-center w-20 bg-slate-100 m-6 p-2 rounded-md hover:bg-slate-200 hover:shadow-sm dark:bg-secondary dark:text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
        Back
      </Link>
      <div className="flex px-4 my-12">
        <Image
          src="/contact.jpg"
          alt="failed to load image"
          width={650}
          height={650}
          className="rounded-2xl"
          priority
        />
        <div className="px-4 dark:text-white">
          <div className="text-4xl">Contact</div>
          <div className="text-xl">
            <div className="mt-8">
              If you need further information, please don&#39;t hesitate to
              contact:
            </div>
            <div className="mt-4 font-semibold">Aidan Tomcy</div>
            <div>Email: aidantomcy@gmail.com</div>
            <div>Phone: +91 98203 57944</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
