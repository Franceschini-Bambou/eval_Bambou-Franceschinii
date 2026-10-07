import { openDatabase } from "../src/lib/sqlite.js";

const db = await openDatabase("./data/clients.db");

db.exec(`
  CREATE TABLE IF NOT EXISTS clients (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT,
    address TEXT,
    latitude REAL NOT NULL,
    longitude REAL NOT NULL
  );
`);

console.log("Base SQLite initialisée : data/clients.db");
if (typeof db.close === "function") {
  db.close();
}