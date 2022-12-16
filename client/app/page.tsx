import Card from "./Card";

const HomePage = () => {
  return (
    <div className="grid place-items-center">
      <div className="grid max-w-3xl place-items-center grid-cols-2">
        <Card
          title="Matthew the Evangelist"
          image="/stmatthew.jpg"
          description=""
        />
        <Card title="Mark the Evangelist" image="/stmark.jpg" description="" />
        <Card title="Luke the Evangelist" image="/stluke.jpg" description="" />
        <Card title="John the Evangelist" image="/stjohn.jpg" description="" />
      </div>
    </div>
  );
};

export default HomePage;
