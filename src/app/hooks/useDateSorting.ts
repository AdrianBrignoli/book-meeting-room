import { useEffect, useState } from 'react';
import { BookingSlotData } from '@/types/types';
import { subDay, addDay, formatDate } from '../utils/utils';

export default function useDateSorting(
  slotData: BookingSlotData[],
  selectedRooms: string[],
  indexDay: Date
) {
  const [indexContent, setIndexContent] = useState<BookingSlotData[]>([]);
  const [preIndexContent, setPreIndexContent] = useState<BookingSlotData[]>([]);
  const [postIndexContent, setPostIndexContent] = useState<BookingSlotData[]>(
    []
  );

  useEffect(() => {
    const preIndex = subDay(indexDay);
    const postIndex = addDay(indexDay);

    setIndexContent([]);
    setPreIndexContent([]);
    setPostIndexContent([]);

    slotData.forEach((bookingEvent) => {
      // Meh solution, should be different prop for capacity
      if (
        !selectedRooms.includes(
          `${bookingEvent.roomName} (${bookingEvent.capacity})`
        )
      ) {
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
  }, [indexDay, selectedRooms, slotData]);

  return { preIndexContent, indexContent, postIndexContent };
}
