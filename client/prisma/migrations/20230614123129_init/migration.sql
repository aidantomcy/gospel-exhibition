-- CreateEnum
CREATE TYPE "Gospels" AS ENUM ('MATTHEW', 'MARK', 'LUKE', 'JOHN');

-- CreateTable
CREATE TABLE "Parable" (
    "id" TEXT NOT NULL,
    "gospel" "Gospels" NOT NULL,
    "title" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "explanation" TEXT NOT NULL,
    "verses" TEXT NOT NULL,

    CONSTRAINT "Parable_pkey" PRIMARY KEY ("id")
);
