-- AlterTable
ALTER TABLE "posts" ADD COLUMN     "keywords" TEXT[] DEFAULT ARRAY[]::TEXT[];
