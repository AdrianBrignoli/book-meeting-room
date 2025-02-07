'use client';
import { BiArrowBack } from 'react-icons/bi';
import { IoArrowForward } from 'react-icons/io5';
import { useState } from 'react';
import { addDay, subDay } from '@/app/utils/utils';
import { formatDate } from '@/app/utils/utils';
import { CustomCalenderProps } from '@/types/types';
import useDateSorting from '@/app/hooks/useDateSorting';
import useSelectedRooms from '@/app/hooks/useSelectedRooms';

export default function CustomCalender({
  children,
  slotData,
}: CustomCalenderProps) {
  // Silly me set the month to January for w/e reason.
  // Should implement a "move to first available date" fn
  const [indexDay, setIndexDay] = useState<Date>(new Date('2025-01-19'));

  // FIlter on selected rooms
  const selectedRooms = useSelectedRooms();

  // Let's use selectedRooms as we sort the slotData in one of three date columns.
  const { preIndexContent, indexContent, postIndexContent } = useDateSorting(
    slotData,
    selectedRooms,
    indexDay
  );

  return (
    <section className="flex-grow flex flex-col w-full my-4">
      <div className="flex justify-between p-2">
        <div
          className="border border-gray-400 rounded-full p-1"
          onClick={() => setIndexDay(subDay(indexDay))}
        >
          <BiArrowBack />
        </div>
        <p className="text-gray-700">{`${formatDate(
          addDay(indexDay)
        )} - ${formatDate(subDay(indexDay))}`}</p>
        <div
          className="border border-gray-400 rounded-full p-1"
          onClick={() => setIndexDay(addDay(indexDay))}
        >
          <IoArrowForward />
        </div>
      </div>
      <div className="flex-grow flex flex-col h-full divide-y divide-gray-300 border border-gray-300 rounded-lg">
        <div className="flex justify-evenly text-center divide-x divide-gray-300 font-bold">
          <p className="w-1/3 p-4">{formatDate(subDay(indexDay))}</p>
          <p className="w-1/3 p-4">{formatDate(indexDay)}</p>
          <p className="w-1/3 p-4">{formatDate(addDay(indexDay))}</p>
        </div>
        {children({ indexContent, preIndexContent, postIndexContent })}
      </div>
    </section>
  );
}
