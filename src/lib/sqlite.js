import { mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";

export async function openDatabase(databasePath = "./data/clients.db") {
  const resolvedPath = resolve(process.cwd(), databasePath);
  mkdirSync(dirname(resolvedPath), { recursive: true });

  if (typeof Bun !== "undefined") {
    const { default: Database } = await import("bun:sqlite");
    return new Database(resolvedPath);
  }

  const { DatabaseSync } = await import("node:sqlite");
  return new DatabaseSync(resolvedPath);
}
