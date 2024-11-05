/*
  Warnings:

  - You are about to drop the column `user` on the `Posts` table. All the data in the column will be lost.
  - Added the required column `author` to the `Posts` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Posts" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "author" TEXT NOT NULL
);
INSERT INTO "new_Posts" ("createdAt", "description", "id", "title") SELECT "createdAt", "description", "id", "title" FROM "Posts";
DROP TABLE "Posts";
ALTER TABLE "new_Posts" RENAME TO "Posts";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
