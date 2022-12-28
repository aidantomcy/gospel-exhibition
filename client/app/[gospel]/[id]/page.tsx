import Image from "next/image";
import Link from "next/link";

const getParableData = async (
  gospel: Gospels,
  id: string
): Promise<ApiResponse> => {
  const response = await fetch(
    `http://localhost:8000/gospels/${gospel}/${id}`,
    {
      cache: "no-store",
    }
  );
  const data: Promise<ApiResponse> = await response.json();

  return data;
};

const Parable = async ({
  params,
}: {
  params: { gospel: Gospels; id: string };
}) => {
  const {
    _id: id,
    title,
    verses,
    body,
    explanation,
  } = await getParableData(params.gospel, params.id);

  return (
    <>
      <Link
        href={`/${params.gospel}`}
        className="text-xl flex items-center justify-center w-20 bg-slate-100 m-6 p-2 rounded-md hover:bg-slate-200 hover:shadow-sm"
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
          src={`/${id}.jpg`}
          alt="failed to load image"
          width={650}
          height={650}
          className="rounded-2xl w-96 object-cover"
          priority
        />
        <div className="px-4">
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
