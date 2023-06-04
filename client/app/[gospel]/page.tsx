import Card from "../(components)/Card";
import fetchData from "../(utils)/fetchData";
import BackButton from "../(components)/BackButton";

const getParables = async (gospel: Gospels): Promise<ApiResponse[]> => {
  const data = fetchData<ApiResponse[]>(
    `http://localhost:8000/gospels/${gospel}`,
    { cache: "no-store" }
  );

  return data;
};

type Params = {
  params: {
    gospel: Gospels;
  };
};

const Parables = async ({ params }: Params) => {
  const data = await getParables(params.gospel);

  return (
    <>
      <BackButton href="/" />

      <div className="text-center text-4xl my-4 dark:text-white">
        {`The Gospel According to ${
          params.gospel.charAt(0).toUpperCase() + params.gospel.slice(1)
        }`}
      </div>
      <div className="grid place-items-center w-screen overflow-x-hidden">
        <div className="grid place-items-center grid-cols-4 gap-8 max-w-5xl">
          {data.map((parable) => {
            const { _id: id, title } = parable;
            return (
              <Card
                key={id}
                title={title}
                image={`/${id}-thumbnail.jpg`}
                url={`/${params.gospel}/${id}`}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Parables;
