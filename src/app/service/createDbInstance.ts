import Database from 'better-sqlite3';
import path from 'path';

export const createDbInstance = () => {
  const dbPath = path.join(process.cwd(), 'src', 'lib', 'room_booker.db');
  console.log('db path', dbPath);
  const db = new Database(dbPath, { verbose: console.log });

  return db;
};
