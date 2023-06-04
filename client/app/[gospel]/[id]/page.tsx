import Image from "next/image";
import fetchData from "../../(utils)/fetchData";
import BackButton from "../../(components)/BackButton";

const getParableData = async (
  gospel: Gospels,
  id: string
): Promise<ApiResponse> => {
  const data = fetchData<ApiResponse>(
    `http://localhost:8000/gospels/${gospel}/${id}`,
    { cache: "no-store" }
  );

  return data;
};

type Params = {
  params: {
    gospel: Gospels;
    id: string;
  };
};

const Parable = async ({ params }: Params) => {
  const {
    _id: id,
    title,
    verses,
    body,
    explanation,
  } = await getParableData(params.gospel, params.id);

  return (
    <>
      <BackButton href={`/${params.gospel}`} />

      <div className="flex px-4 my-12">
        <Image
          src={`/${id}.jpg`}
          alt="failed to load image"
          width={650}
          height={650}
          className="rounded-2xl w-96 object-cover"
          priority
        />
        <div className="px-4 dark:text-white">
          <h1 className="text-4xl">{title}</h1>
          <p className="pt-4 text-xl">{verses}</p>
          <p className="pt-2">{body}</p>
          <p className="pt-4 text-xl">Explanation</p>
          <p className="pt-2">{explanation}</p>
        </div>
      </div>
    </>
  );
};

export default Parable;
