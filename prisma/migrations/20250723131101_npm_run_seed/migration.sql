/*
  Warnings:

  - You are about to drop the column `profile_id` on the `districts` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `districts` DROP FOREIGN KEY `districts_profile_id_fkey`;

-- DropIndex
DROP INDEX `districts_profile_id_fkey` ON `districts`;

-- AlterTable
ALTER TABLE `ProfileUser` ADD COLUMN `districtId` INTEGER NULL;

-- AlterTable
ALTER TABLE `districts` DROP COLUMN `profile_id`;

-- AddForeignKey
ALTER TABLE `ProfileUser` ADD CONSTRAINT `ProfileUser_districtId_fkey` FOREIGN KEY (`districtId`) REFERENCES `districts`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
