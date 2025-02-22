-- CreateTable
CREATE TABLE "Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "from_currency" TEXT NOT NULL,
    "to_currency" TEXT NOT NULL,
    "amount" REAL NOT NULL,
    "amount_exchanged" REAL NOT NULL,
    "exchange_date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
