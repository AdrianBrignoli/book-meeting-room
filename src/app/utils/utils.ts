import moment from 'moment';
import { BookingEvent } from '@/types/types';

export const addDay = (date: Date) => {
  return moment(date).add(1, 'day').toDate();
};

export const subDay = (date: Date) => {
  return moment(date).subtract(1, 'day').toDate();
};

export const formatDate = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'short',
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
};

export const formatDateGetHour = (date: Date) => {
  return moment(date).hour();
};

export const bakeSlots = (
  preIndexContent: BookingEvent[],
  indexContent: BookingEvent[],
  postIndexContent: BookingEvent[]
) => {
  return [
    {
      key: 'preIndexContent',
      data: preIndexContent,
      className: 'w-1/3 h-full flex flex-col space-y-1 p-2',
    },
    {
      key: 'indexContent',
      data: indexContent,
      className: 'w-1/3 h-full border-x border-gray-400 space-y-1 p-2',
    },
    {
      key: 'postIndexContent',
      data: postIndexContent,
      className: 'w-1/3 h-full space-y-1 p-2',
    },
  ];
};

export const bookingEventsTest = (): BookingEvent[] => {
  return [
    {
      id: 1,
      title: 'Steve',
      capacity: 6,
      start: new Date(2025, 1, 18, 8, 0),
      end: new Date(2025, 1, 18, 9, 0),
    },
    {
      id: 2,
      title: 'Ada',
      capacity: 10,
      start: new Date(2025, 1, 18, 8, 0),
      end: new Date(2025, 1, 18, 9, 0),
    },
    {
      id: 3,
      title: 'Margret',
      capacity: 4,
      start: new Date(2025, 1, 18, 10, 0),
      end: new Date(2025, 1, 18, 11, 0),
    },
    {
      id: 3,
      title: 'Grace',
      capacity: 20,
      start: new Date(2025, 1, 18, 11, 0),
      end: new Date(2025, 1, 18, 12, 0),
    },
    {
      id: 4,
      title: 'Ada',
      capacity: 10,
      start: new Date(2025, 1, 18, 14, 0),
      end: new Date(2025, 1, 18, 15, 0),
    },
    {
      id: 5,
      title: 'Steve',
      capacity: 6,
      start: new Date(2025, 1, 18, 14, 0),
      end: new Date(2025, 1, 18, 15, 0),
    },
    {
      id: 6,
      title: 'Margret',
      capacity: 4,
      start: new Date(2025, 1, 19, 8, 0),
      end: new Date(2025, 1, 19, 9, 0),
    },
    {
      id: 7,
      title: 'Steve',
      capacity: 6,
      start: new Date(2025, 1, 19, 10, 0),
      end: new Date(2025, 1, 19, 11, 0),
    },
    {
      id: 8,
      title: 'Margret',
      capacity: 4,
      start: new Date(2025, 1, 19, 11, 0),
      end: new Date(2025, 1, 19, 12, 0),
    },
    {
      id: 9,
      title: 'Ada',
      capacity: 10,
      start: new Date(2025, 1, 19, 13, 0),
      end: new Date(2025, 1, 19, 14, 0),
    },
    {
      id: 10,
      title: 'Edmund',
      capacity: 10,
      start: new Date(2025, 1, 19, 14, 0),
      end: new Date(2025, 1, 19, 15, 0),
    },
    {
      id: 11,
      title: 'Ada',
      capacity: 10,
      start: new Date(2025, 1, 20, 8, 0),
      end: new Date(2025, 1, 20, 9, 0),
    },
    {
      id: 12,
      title: 'Edmund',
      capacity: 10,
      start: new Date(2025, 1, 20, 9, 0),
      end: new Date(2025, 1, 20, 10, 0),
    },
    {
      id: 13,
      title: 'Grace',
      capacity: 20,
      start: new Date(2025, 1, 20, 11, 0),
      end: new Date(2025, 1, 20, 12, 0),
    },
    {
      id: 14,
      title: 'Steve',
      capacity: 6,
      start: new Date(2025, 1, 20, 11, 0),
      end: new Date(2025, 1, 20, 12, 0),
    },
    {
      id: 15,
      title: 'Margret',
      capacity: 4,
      start: new Date(2025, 1, 20, 14, 0),
      end: new Date(2025, 1, 20, 15, 0),
    },
    {
      id: 16,
      title: 'Grace',
      capacity: 20,
      start: new Date(2025, 1, 20, 16, 0),
      end: new Date(2025, 1, 20, 17, 0),
    },
  ];
};
