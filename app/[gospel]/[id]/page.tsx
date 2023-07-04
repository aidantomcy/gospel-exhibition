"use client";

import Image from "next/image";
import BackButton from "../../(components)/BackButton";
import useSWR, { Fetcher } from "swr";
import { Metadata } from "next";

// TODO: work on generating metadata

// export const generateMetadata = async ({
//   params,
// }: Params): Promise<Metadata> => {
//   const { title } = await getParableData(params.gospel, params.id);

//   return {
//     title,
//   };
// };

const Parable = ({ params }: { params: { gospel: Gospels; id: string } }) => {
  const fetcher: Fetcher<Parable, { gospel: string; id: string }> = ({
    gospel,
    id,
  }) => fetch(`/api/${gospel}/${id}`).then((res) => res.json());
  const { data, error } = useSWR({ ...params }, fetcher);

  if (error !== undefined) throw new Error(error);

  return (
    <>
      <BackButton href={`/${params.gospel}`} />

      <div className="flex px-4 my-12">
        <Image
          src={`/${data?.id}.jpg`}
          alt="failed to load image"
          width={650}
          height={650}
          className="rounded-2xl w-96 object-cover"
          priority
        />
        <div className="px-4 dark:text-white">
          <h1 className="text-4xl">{data?.title}</h1>
          <p className="pt-4 text-xl">{data?.verses}</p>
          <p className="pt-2">{data?.body}</p>
          <p className="pt-4 text-xl">Explanation</p>
          <p className="pt-2">{data?.explanation}</p>
        </div>
      </div>
    </>
  );
};

export default Parable;
