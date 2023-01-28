/*
  Warnings:

  - You are about to drop the column `business_id` on the `warehouse` table. All the data in the column will be lost.
  - You are about to drop the `_itemtowarehouse` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_itemtowarehouse` DROP FOREIGN KEY `_ItemToWarehouse_A_fkey`;

-- DropForeignKey
ALTER TABLE `_itemtowarehouse` DROP FOREIGN KEY `_ItemToWarehouse_B_fkey`;

-- AlterTable
ALTER TABLE `warehouse` DROP COLUMN `business_id`;

-- DropTable
DROP TABLE `_itemtowarehouse`;
