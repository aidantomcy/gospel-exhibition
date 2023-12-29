import Image from "next/image";
import BackButton from "../(components)/BackButton";

export const generateMetadata = async () => {
  return {
    title: "Contact",
  };
};

const Contact = () => {
  return (
    <div className="">
      <BackButton href="/" />

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
