const Database = require('better-sqlite3');
const path = require('path');

const dbPath = path.join(process.cwd(), 'room_booker.db');

const db = new Database(dbPath);

db.exec(`
  CREATE TABLE IF NOT EXISTS booking (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    start DATETIME NOT NULL,
    end DATETIME NOT NULL,
    booking_slot_id INTEGER,
    FOREIGN KEY (booking_slot_id) REFERENCES booking_slot(id)
  );
`);

db.exec(`
  CREATE TABLE IF NOT EXISTS room (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    capacity INTEGER NOT NULL
  );
`);

db.exec(`
  CREATE TABLE IF NOT EXISTS booking_slot (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    start DATETIME NOT NULL,
    end DATETIME NOT NULL,
    room_id INTEGER,
    FOREIGN KEY (room_id) REFERENCES room(id)
  );
`);

module.exports = db


