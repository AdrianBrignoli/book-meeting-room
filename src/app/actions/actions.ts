'use server';
import { createDbInstance } from '../service/createDbInstance';
import { BookingData } from '@/types/types';
import { BookingSlotData } from '@/types/types';

// Let's handle the Db instance creation in /service
// I'll provide the db w populated rows through git as well, no need for an init db situation
const db = createDbInstance();

export async function getSlot(
  slotId: number
): Promise<BookingSlotData | undefined> {
  try {
    return db
      .prepare(
        `SELECT bs.id as slotId, bs.start, bs.end, bs.room_id as roomId, r.name as roomName, r.capacity 
        FROM booking_slot bs 
        LEFT JOIN room r ON bs.room_id = r.id
        WHERE bs.slotId = ?
        `
      )
      .get(slotId) as BookingSlotData;
  } catch (e) {
    console.log('getSlot failed');
  }
}

export async function getSlots(): Promise<BookingSlotData[] | undefined> {
  try {
    return db
      .prepare(
        `SELECT bs.id as slotId, bs.start, bs.end, bs.room_id as roomId, r.name as roomName, r.capacity 
        FROM booking_slot bs 
        LEFT JOIN room r ON bs.room_id = r.id
        LEFT JOIN booking b ON bs.id = b.booking_slot_id
        WHERE b.booking_slot_id IS NULL
        `
      )
      .all() as BookingSlotData[];
  } catch (e) {
    console.log('getSlots failed');
  }
}

// Get all bookings (with booking slot details)
export async function getBookings(): Promise<BookingData[] | undefined> {
  // Let's pretend we're fetching data from elsewhere to show my gorgeous, slightly crocked, Spinner
  await new Promise((resolve) => setTimeout(resolve, 2000));

  try {
    return db
      .prepare(
        `
    SELECT b.id, b.room_name as roomName, b.user, b.start, b.end, b.booking_slot_id as bookingSlotId 
    FROM booking b
  `
      )
      .all() as BookingData[];
  } catch (e) {
    console.log('getBookings failed');
  }
}

// Get specific booking (with booking slot details)
export async function getBooking(
  slotid: number
): Promise<BookingData[] | undefined> {
  try {
    return db
      .prepare(
        `
    SELECT booking.* 
    FROM booking
    WHERE booking.booking_slot_id = ?
  `
      )
      .all(slotid) as BookingData[];
  } catch (e) {
    console.log('getBooking failed');
  }
}

// Alright, let's do some initial checks before inserting the new booking
export async function addBooking(
  prevState: any,
  formData: FormData
): Promise<any> {
  const user = formData.get('user') as string;
  const slotId = Number(formData.get('slotId'));

  if (!user) return { success: false, msg: 'You need to provide a name' };
  if (!slotId) return { success: false, msg: 'Nice try' };

  // Let's make sure someone hasn't already booked this spot
  const booking = await getBooking(slotId);

  if (!booking) {
    return { success: false, msg: 'DB issue' };
  }

  if (booking.length) {
    return { success: false, msg: 'this room has already been booked' };
  }

  // Ok all goodie, now let's insert the booking with the booking_slot_id reference
  try {
    db.prepare(
      `
    INSERT INTO booking (room_name, user, start, end, booking_slot_id)
    SELECT r.name, ?, bs.start, bs.end, bs.id 
    FROM room r
    JOIN booking_slot bs ON r.id = bs.room_id
    WHERE bs.id = ?;
  `
    ).run(user, slotId);
  } catch (e) {
    return { success: false, msg: 'DB issue' };
  }
  return { success: true, msg: 'You booked a room, hurray' };
}

// Nuke it
export async function deleteBooking(id: number): Promise<void> {
  try {
    db.prepare('DELETE FROM booking WHERE id = ?').run(id);
  } catch (e) {
    console.log('deleteBooking failed');
  }
}
