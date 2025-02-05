'use client';
import CustomCalender from '../complex/CustomCalendar';
import FilterRoom from '../complex/FilterRoom';
import Button from '../basic/Button';
import { PopupError } from '../popups/Popups';
import { useState } from 'react';
import { BookingEvent } from '@/types/types';
import BookingEventCard from '../basic/BookingEventCard';
import { bakeSlots } from '@/app/utils/utils';

export default function BookDynamic() {
  const [error, setError] = useState<boolean>(false);
  const [chosenSlotId, setChosenSlotId] = useState<number | undefined>(
    undefined
  );

  return (
    <>
      {/* Filtering through query params should suffice, good for sharing the link between coleagues */}
      <FilterRoom />
      <CustomCalender>
        {({ preIndexContent, indexContent, postIndexContent }) => {
          const sections = bakeSlots(
            preIndexContent,
            indexContent,
            postIndexContent
          );

          // Let's tryna keep it DRY
          // Might wanna abstract further, too much fuzz for a main Component container
          return (
            <div className="flex h-full">
              {sections.map(({ key, data, className }) => (
                <div key={key.toString()} className={className.toString()}>
                  {data.map((c, index) => (
                    <BookingEventCard
                      key={index}
                      id={c.id}
                      title={c.title}
                      capacity={c.capacity}
                      start={c.start}
                      end={c.end}
                      setChosenSlotId={setChosenSlotId}
                    />
                  ))}
                </div>
              ))}
            </div>
          );
        }}
      </CustomCalender>
      <Button setError={setError} chosenSlotId={chosenSlotId} />
      {error && (
        <PopupError
          msg="You need to select a slot in order to book it"
          setError={setError}
        />
      )}
    </>
  );
}
