'use client';
import { BiArrowBack } from 'react-icons/bi';
import { IoArrowForward } from 'react-icons/io5';
import { useState } from 'react';
import { addDay, subDay } from '@/app/utils/utils';
import { useEffect, useMemo } from 'react';
import { BookingEvent } from '@/types/types';
import BookingEventCard from '../basic/BookingEventCard';
import { formatDate } from '@/app/utils/utils';
import { bookingEventsTest } from '@/app/utils/utils';
import { useSearchParams } from 'next/navigation';
import { CustomCalenderProps } from '@/types/types';

export default function CustomCalender({ children }: CustomCalenderProps) {
  const [indexDay, setIndexDay] = useState<Date>(new Date());
  const [bookingEvents, setBookingEvents] =
    useState<BookingEvent[]>(bookingEventsTest);

  const [indexContent, setIndexContent] = useState<BookingEvent[]>([]);
  const [preIndexContent, setPreIndexContent] = useState<BookingEvent[]>([]);
  const [postIndexContent, setPostIndexContent] = useState<BookingEvent[]>([]);

  const searchParams = useSearchParams();
  const selectedRooms = useMemo(
    () => searchParams.get('rooms')?.split(',') || [],
    [searchParams.get('rooms')]
  );

  const handleBackwards = () => {
    setIndexDay(subDay(indexDay));
  };

  const handleForward = () => {
    setIndexDay(addDay(indexDay));
  };

  useEffect(() => {
    const preIndex = subDay(indexDay);
    const postIndex = addDay(indexDay);

    setIndexContent([]);
    setPreIndexContent([]);
    setPostIndexContent([]);

    bookingEvents.forEach((bookingEvent) => {
      if (!selectedRooms.includes(bookingEvent.title)) {
        return;
      }

      if (formatDate(bookingEvent.start) === formatDate(preIndex)) {
        setPreIndexContent((prevContent) => [...prevContent, bookingEvent]);
      } else if (formatDate(bookingEvent.start) === formatDate(indexDay)) {
        setIndexContent((prevContent) => [...prevContent, bookingEvent]);
      } else if (formatDate(bookingEvent.start) === formatDate(postIndex)) {
        setPostIndexContent((prevContent) => [...prevContent, bookingEvent]);
      }
    });
  }, [indexDay, selectedRooms]);

  return (
    <section className="flex-grow flex flex-col w-full my-4">
      <div className="flex justify-between p-2">
        <div className="border border-gray-400 rounded-full p-1">
          <BiArrowBack onClick={handleBackwards} />
        </div>
        <p className="text-gray-700">{`${formatDate(
          addDay(indexDay)
        )} - ${formatDate(subDay(indexDay))}`}</p>
        <div className="border border-gray-400 rounded-full p-1">
          <IoArrowForward onClick={handleForward} />
        </div>
      </div>
      <div className="flex-grow flex flex-col h-full divide-y divide-gray-300 border border-gray-300 rounded-lg">
        <div className="flex justify-evenly text-center p-4">
          <p className="w-1/3">{formatDate(subDay(indexDay))}</p>
          <p className="w-1/3 ">{formatDate(indexDay)}</p>
          <p className="w-1/3">{formatDate(addDay(indexDay))}</p>
        </div>
        {children({ indexContent, preIndexContent, postIndexContent })}
      </div>
    </section>
  );
}
