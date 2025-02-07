import { formatDateGetHour } from '@/app/utils/utils';
import { BsClock } from 'react-icons/bs';
import { BiText } from 'react-icons/bi';
import { SlotCardProps } from '@/types/types';

export default function SlotCard({
  slotId,
  name,
  capacity,
  start,
  end,
  setChosenSlotId,
  chosenSlotId,
}: SlotCardProps) {
  return (
    <div
      className={`w-full text-gray-500 text-sm border-2 border-green-700 border-opacity-30 rounded-lg p-2 bg-transparent focus:bg-green-700 hover:bg-green-100 ${
        chosenSlotId == slotId ? 'bg-green-700 text-white' : ''
      }`}
      tabIndex={0}
      onClick={() => setChosenSlotId(slotId)}
    >
      <div className="flex flex-col space-y-1">
        <div className="flex">
          <BiText className="my-auto mr-2" />
          <p className="mr-1">{name}</p>
          <p>({capacity})</p>
        </div>
        <div className="flex space-x-2">
          <BsClock className="my-auto" />
          <p>{`${formatDateGetHour(start)} - ${formatDateGetHour(end)}`}</p>
        </div>
      </div>
    </div>
  );
}
