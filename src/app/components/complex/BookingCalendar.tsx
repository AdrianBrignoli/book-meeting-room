'use client';
import { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const BookingCalendar = () => {
  const [startDate, setStartDate] = useState(new Date());

  const events = [
    {
      title: 'Steve (6)',
      start: new Date(2024, 9, 18, 8, 0),
      end: new Date(2024, 9, 18, 9, 0),
    },
    {
      title: 'Ada (10)',
      start: new Date(2024, 9, 19, 8, 0),
      end: new Date(2024, 9, 19, 9, 0),
    },
    {
      title: 'Margret (4)',
      start: new Date(2024, 9, 20, 10, 0),
      end: new Date(2024, 9, 20, 11, 0),
    },
    {
      title: 'Grace (20)',
      start: new Date(2024, 9, 20, 11, 0),
      end: new Date(2024, 9, 20, 12, 0),
    },
  ];

  return (
    <div>
      <div className="controls">
        <button
          onClick={() =>
            setStartDate(moment(startDate).subtract(3, 'days').toDate())
          }
        >
          ⬅️
        </button>
        <span>
          {moment(startDate).format('DD MMM')} -{' '}
          {moment(startDate).add(2, 'days').format('DD MMM')}
        </span>
        <button
          onClick={() =>
            setStartDate(moment(startDate).add(3, 'days').toDate())
          }
        >
          ➡️
        </button>
      </div>

      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        views={['week']}
        defaultView="week"
        min={new Date(2024, 9, 18, 8, 0)} // Start at 08:00
        max={new Date(2024, 9, 18, 17, 0)} // End at 17:00
        style={{ height: 1000 }}
      />
    </div>
  );
};

export default BookingCalendar;
