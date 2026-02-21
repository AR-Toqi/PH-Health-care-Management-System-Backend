/*
  Warnings:

  - Added the required column `isDeleted` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('SUPER_ADMIN', 'ADMIN', 'DOCTOR', 'PATIENT');

-- CreateEnum
CREATE TYPE "UserStatus" AS ENUM ('BLOCKED', 'DELETED', 'ACTIVE');

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "deletedAt" TIMESTAMP(3),
ADD COLUMN     "isDeleted" BOOLEAN NOT NULL,
ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'PATIENT',
ADD COLUMN     "status" "UserStatus" NOT NULL DEFAULT 'ACTIVE';
