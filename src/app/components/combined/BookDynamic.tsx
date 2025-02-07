'use client';
import CustomCalender from '../complex/CustomCalendar';
import FilterRoom from '../complex/FilterRoom';
import Button from '../basic/Button';
import { Popup } from '../popup/Popup';
import { useState } from 'react';
import { bakeSlots } from '@/app/utils/utils';
import { BookDynamicProps } from '@/types/types';
import SlotCard from '../basic/SlotCard';
import { LiaSadTearSolid } from 'react-icons/lia';

export default function BookDynamic({ slotData }: BookDynamicProps) {
  const [error, setError] = useState<boolean>(false);
  const [chosenSlotId, setChosenSlotId] = useState<number | undefined>(
    undefined
  );

  return (
    <>
      {/* Filtering through query params should suffice, good for sharing the link between colleagues */}
      <FilterRoom />
      {/* Let's render the cards as children, might wanna change out the UI for different purpose */}
      <CustomCalender slotData={slotData}>
        {({ preIndexContent, indexContent, postIndexContent }) => {
          const sections = bakeSlots(
            preIndexContent,
            indexContent,
            postIndexContent
          );

          // Let's tryna keep it DRY
          // Might wanna abstract further, too much fuzz for a main Component container
          return (
            <div className="flex-grow flex divide-x divide-gray-300">
              {sections.map(({ key, data, className }) => (
                <div key={key.toString()} className={className.toString()}>
                  {data.map((c, index) => (
                    <SlotCard
                      key={index}
                      slotId={c.slotId}
                      name={c.roomName}
                      capacity={c.capacity}
                      start={c.start}
                      end={c.end}
                      setChosenSlotId={setChosenSlotId}
                      chosenSlotId={chosenSlotId}
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
        <Popup
          msg="You need to select a slot in order to book it"
          setError={setError}
          Icon={LiaSadTearSolid}
        />
      )}
    </>
  );
}
