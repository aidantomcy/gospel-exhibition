"use client";

import Card from "../(components)/Card";
import BackButton from "../(components)/BackButton";
import useSWR, { Fetcher } from "swr";
import { Metadata } from "next";

export const generateMetadata = ({
  params,
}: {
  params: { gospel: Gospels };
}): Metadata => {
  return {
    title: `The Gospel According to ${
      params.gospel.charAt(0).toUpperCase() + params.gospel.slice(1)
    }`,
  };
};

const Parables = ({ params }: { params: { gospel: Gospels } }) => {
  const fetcher: Fetcher<Parable[], string> = (gospel) =>
    fetch(`/api/${gospel}`).then((res) => res.json());
  const { data, error } = useSWR(params.gospel, fetcher);

  if (error !== undefined) throw new Error(error);

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
          {data?.map((parable) => {
            const { id, title } = parable;
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
