import Database from 'better-sqlite3';
import path from 'path';

const dbPath = path.join(process.cwd(), 'bookings.db');
const db = new Database(dbPath);

db.exec(`
  CREATE TABLE IF NOT EXISTS bookings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    start DATETIME NOT NULL,
    end DATETIME NOT NULL
  );
`);

export default db;

/*
  Room

*/
