import Link from "next/link";
import Card from "../(components)/Card";
import fetchData from "../(utils)/fetchData";

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
      <Link
        href="/"
        className="text-xl flex items-center justify-center w-20 bg-slate-100 ml-36 mt-6 p-2 rounded-md hover:bg-slate-200 hover:shadow-sm dark:bg-secondary dark:text-white"
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
