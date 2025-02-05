import { BookingEvent } from '@/types/types';
import { formatDateGetHour } from '@/app/utils/utils';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

export type BookingEventCardProps = {
  id: number;
  title: string;
  capacity: number;
  start: Date;
  end: Date;
  setChosenSlotId: React.Dispatch<React.SetStateAction<number | undefined>>;
};

export default function BookingEventCard({
  id,
  title,
  start,
  end,
  setChosenSlotId,
}: BookingEventCardProps) {
  return (
    <div
      className="w-full text-gray-500 text-sm border border-green-300 rounded-lg p-2 bg-transparent focus:bg-green-100"
      tabIndex={0}
      onClick={() => setChosenSlotId(id)}
    >
      <p>{title}</p>
      <p>{`${formatDateGetHour(start)} - ${formatDateGetHour(end)}`}</p>
    </div>
  );
}
