import { Metadata } from "next";
import GospelLink from "./(components)/GospelLink";

export const metadata = {
  title: "Home",
} satisfies Metadata;

const HomePage = () => {
  return (
    <div className="w-screen h-dvh dark:text-white grid grid-cols-2">
      <GospelLink
        text="St. Matthew"
        backgroundImage="/stmatthew.jpg"
        href="/matthew"
      />
      <GospelLink text="St. Mark" backgroundImage="/stmark.jpg" href="/mark" />
      <GospelLink text="St. Luke" backgroundImage="/stluke.jpg" href="/luke" />
      <GospelLink text="St. John" backgroundImage="/stjohn.jpg" href="/john" />
    </div>
  );
};

export default HomePage;
