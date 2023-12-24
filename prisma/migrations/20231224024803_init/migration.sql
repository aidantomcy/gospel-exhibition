/*
  Warnings:

  - Added the required column `slug` to the `Parable` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Parable" ADD COLUMN     "slug" TEXT NOT NULL;
