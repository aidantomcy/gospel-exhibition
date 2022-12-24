import Card from "../Card";

const getParables = async (gospel: Gospels): Promise<ApiResponse[]> => {
  const response = await fetch(`http://localhost:8000/gospels/${gospel}`, {
    cache: "no-store",
  });
  const data: Promise<ApiResponse[]> = await response.json();

  return data;
};

const Parables = async ({ params }: { params: { gospel: Gospels } }) => {
  const data = await getParables(params.gospel);

  return (
    <div className="grid place-items-center w-screen">
      <div className="grid place-items-center grid-cols-4 gap-8 max-w-5xl">
        {data.map((parable) => {
          const { _id: id, title } = parable;
          return (
            <Card
              key={id}
              title={title}
              image={`/${id}-thumbnail.jpg`}
              url={`/${params.gospel}/${id}`}
              description=""
            />
          );
        })}
      </div>
    </div>
  );
};

export default Parables;
