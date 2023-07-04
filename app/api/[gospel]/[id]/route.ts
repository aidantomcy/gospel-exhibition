import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const GET = async (
  request: Request,
  { params }: { params: { gospel: string; id: string } }
) => {
  const parable = await prisma.parable.findUnique({
    where: { id: params.id },
  });

  return NextResponse.json(parable);
};

export const DELETE = async (
  request: Request,
  { params }: { params: { gospel: string; id: string } }
) => {
  const parable = await prisma.parable.delete({
    where: { id: params.id },
  });

  return NextResponse.json(parable);
};
