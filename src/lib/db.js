import { openDatabase } from "./sqlite.js";

const db = await openDatabase(process.env.SQLITE_DB_PATH || "./data/clients.db");

export function getClients() {
  return db.prepare(`
    SELECT
      id,
      name,
      email,
      address,
      latitude,
      longitude
    FROM clients
    ORDER BY name
  `).all();
}

export default db;