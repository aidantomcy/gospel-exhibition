import Card from "./(components)/Card";
import { Metadata } from "next";

export const metadata = {
  title: "Home",
} satisfies Metadata;

const HomePage = () => {
  return (
    <div className="grid place-items-center">
      <div className="grid max-w-3xl place-items-center grid-cols-2">
        <Card
          title="Matthew the Evangelist"
          image="/stmatthew.jpg"
          url="/matthew"
          priority
        />
        <Card
          title="Mark the Evangelist"
          image="/stmark.jpg"
          url="/mark"
          priority
        />
        <Card
          title="Luke the Evangelist"
          image="/stluke.jpg"
          url="/luke"
          priority
        />
        <Card
          title="John the Evangelist"
          image="/stjohn.jpg"
          url="/john"
          priority
        />
      </div>
    </div>
  );
};

export default HomePage;
