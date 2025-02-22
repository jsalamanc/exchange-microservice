/*
  Warnings:

  - You are about to drop the `Product` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Product";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Exchange" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "from_currency" TEXT NOT NULL,
    "to_currency" TEXT NOT NULL,
    "amount" REAL NOT NULL,
    "amount_exchanged" REAL NOT NULL,
    "exchange_date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
