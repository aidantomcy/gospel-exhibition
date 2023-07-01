/*
  Warnings:

  - Changed the type of `gospel` on the `Parable` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Parable" DROP COLUMN "gospel",
ADD COLUMN     "gospel" TEXT NOT NULL;

-- DropEnum
DROP TYPE "Gospels";
