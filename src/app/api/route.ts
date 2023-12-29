import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    gospels: ["matthew", "mark", "luke", "john"],
  });
};
