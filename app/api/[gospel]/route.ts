import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";

const prisma = new PrismaClient();

export const GET = async (
  request: Request,
  { params }: { params: { gospel: string } }
) => {
  const parables = await prisma.parable.findMany({
    where: { gospel: params.gospel },
  });

  return NextResponse.json(parables);
};

export const POST = async (
  request: Request,
  { params }: { params: { gospel: string } }
) => {
  const ParableSchema = z.object({
    title: z.string(),
    body: z.string(),
    explanation: z.string(),
    verses: z.string(),
  });

  type Parable = z.infer<typeof ParableSchema>;

  const res: Parable = await request.json();
  const result = ParableSchema.safeParse(res);

  if (!result) {
    throw new Error("please provide all fields required.");
  } else if (!["matthew", "mark", "luke", "john"].includes(params.gospel)) {
    throw new Error("invalid gospel name provided");
  }

  const { title, body, explanation, verses } = res;
  const newParable = await prisma.parable.create({
    data: {
      title,
      body,
      explanation,
      verses,
      gospel: params.gospel,
    },
  });

  return NextResponse.json(newParable);
};
