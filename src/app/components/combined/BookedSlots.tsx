'use client';
import { BookingData } from '@/types/types';
import BookingCard from '../basic/BookingCard';
import { useState } from 'react';
import { deleteBooking } from '@/app/actions/actions';
import { BookedSlotsProps } from '@/types/types';

export default function BookedSlots({ bookingData }: BookedSlotsProps) {
  const [bookings, setBookings] = useState<BookingData[]>(bookingData);

  const onDelete = (id: number) => {
    deleteBooking(id);
    setBookings((prev) => prev.filter((booking) => booking.id !== id));
  };

  return (
    <div className="flex flex-col space-y-4 w-full my-8">
      {bookings.map((bd, i) => (
        <BookingCard
          key={i}
          id={bd.id}
          roomName={bd.roomName}
          user={bd.user}
          start={bd.start}
          end={bd.end}
          bookingSlotId={bd.bookingSlotId}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
