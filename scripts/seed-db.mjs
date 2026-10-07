import { openDatabase } from "../src/lib/sqlite.js";

const db = await openDatabase("./data/clients.db");

db.exec(`
  DELETE FROM clients;

  INSERT INTO clients (name, email, address, latitude, longitude) VALUES
    ('Client Besançon', 'besancon@example.com', 'Besançon', 47.237829, 6.024053),
    ('Client Montbéliard', 'montbeliard@example.com', 'Montbéliard', 47.510238, 6.798819),
    ('Client Belfort', 'belfort@example.com', 'Belfort', 47.639674, 6.863849),
    ('Client Lyon', 'lyon@example.com', 'Lyon', 45.764043, 4.835659);
`);

console.log("Données de démonstration insérées.");
if (typeof db.close === "function") {
  db.close();
}