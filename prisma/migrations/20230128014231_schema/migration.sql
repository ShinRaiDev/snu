/*
  Warnings:

  - You are about to drop the `itemsinwarehouse` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `warehouseid` to the `Item` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `itemsinwarehouse` DROP FOREIGN KEY `ItemsInWarehouse_itemId_fkey`;

-- DropForeignKey
ALTER TABLE `itemsinwarehouse` DROP FOREIGN KEY `ItemsInWarehouse_warehouseId_fkey`;

-- AlterTable
ALTER TABLE `item` ADD COLUMN `warehouseid` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `itemsinwarehouse`;

-- AddForeignKey
ALTER TABLE `Item` ADD CONSTRAINT `Item_warehouseid_fkey` FOREIGN KEY (`warehouseid`) REFERENCES `Warehouse`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
