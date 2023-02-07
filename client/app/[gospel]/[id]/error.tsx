"use client";

import { useEffect } from "react";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="grid place-items-center">
      <div className="text-3xl mt-16 dark:text-white">
        Something went wrong 💀
      </div>
      <button
        onClick={() => reset()}
        className="bg-slate-100 p-2 rounded-md mt-4 dark:bg-secondary dark:text-white"
      >
        Reset error boundary
      </button>
    </div>
  );
};

export default Error;
