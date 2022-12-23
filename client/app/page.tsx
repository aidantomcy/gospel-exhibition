import Card from "./Card";

const HomePage = () => {
  return (
    <div className="grid place-items-center">
      <div className="grid max-w-3xl place-items-center grid-cols-2">
        <Card
          title="Matthew the Evangelist"
          image="/stmatthew.jpg"
          url="/matthew"
          description=""
        />
        <Card
          title="Mark the Evangelist"
          image="/stmark.jpg"
          url="/mark"
          description=""
        />
        <Card
          title="Luke the Evangelist"
          image="/stluke.jpg"
          url="/luke"
          description=""
        />
        <Card
          title="John the Evangelist"
          image="/stjohn.jpg"
          url="/john"
          description=""
        />
      </div>
    </div>
  );
};

export default HomePage;
