import moment from 'moment';

export const addDay = (date: Date) => {
  return moment(date).add(1, 'day').toDate();
};

export const subDay = (date: Date) => {
  return moment(date).subtract(1, 'day').toDate();
};

// Apparently SQLite stores Date objects as strings. Come to think of it maybe that's standard..?
// Anyways, additonal conversion before formatting needed compared to previous dummy JSobj data
export const formatDate = (date: string | Date) => {
  const dateAsDate = date instanceof Date ? date : new Date(date + 'Z');
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'short',
  };
  return new Intl.DateTimeFormat('en-US', options).format(dateAsDate);
};

export const formatDateGetHour = (date: Date) => {
  return moment(date).hour();
};

import { BookingSlotData } from '@/types/types';
export const bakeSlots = (
  preIndexContent: BookingSlotData[],
  indexContent: BookingSlotData[],
  postIndexContent: BookingSlotData[]
) => {
  return [
    {
      key: 'preIndexContent',
      data: preIndexContent,
      className: 'w-1/3 space-y-1 p-2',
    },
    {
      key: 'indexContent',
      data: indexContent,
      className: 'w-1/3 space-y-1 p-2',
    },
    {
      key: 'postIndexContent',
      data: postIndexContent,
      className: 'w-1/3 space-y-1 p-2',
    },
  ];
};
