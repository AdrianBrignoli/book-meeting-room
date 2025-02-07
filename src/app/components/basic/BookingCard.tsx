import { MdRoom } from 'react-icons/md';
import { BiUser } from 'react-icons/bi';
import { BsClock } from 'react-icons/bs';
import { BookCardProps } from '@/types/types';

export default function BookingCard({
  id,
  roomName,
  user,
  start,
  end,
  bookingSlotId,
  onDelete,
}: BookCardProps) {
  return (
    <div className="flex sm:flex-row flex-col justify-between border border-gray-400 rounded-lg p-4 text-gray-700 bg-white hover:border-gray-600">
      <div className="sm:mb-0 mb-2">
        <div className="flex space-x-4">
          <MdRoom />
          <p>{roomName}</p>
        </div>
        <div className="flex space-x-4">
          <BiUser />
          <p>{user}</p>
        </div>
        <div className="flex space-x-4">
          <BsClock />
          <p>{start}</p>
        </div>
        <div className="flex space-x-4">
          <BsClock />
          <p>{end}</p>
        </div>
      </div>
      <button
        className="p-2 bg-red-500 rounded-full text-white max-h-10 my-auto"
        onClick={() => onDelete(id)}
      >
        Radera bokning
      </button>
    </div>
  );
}
