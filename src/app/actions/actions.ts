'use server';

import db from '@/lib/db';
import { BookingDB } from '@/types/types';

// Get all bookings
export async function getBookings(): Promise<BookingDB[]> {
  return db.prepare('SELECT * FROM bookings').all() as BookingDB[];
}

// Add a booking
export async function addBooking(booking: BookingDB): Promise<number> {
  const stmt = db.prepare(
    'INSERT INTO bookings (title, start, end) VALUES (?, ?, ?)'
  );
  const result = stmt.run(booking.title, booking.start, booking.end);
  return result.lastInsertRowid as number;
}

// Delete a booking
export async function deleteBooking(id: number): Promise<void> {
  db.prepare('DELETE FROM bookings WHERE id = ?').run(id);
}
