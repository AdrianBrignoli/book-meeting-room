'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import useSelectedRooms from '@/app/hooks/useSelectedRooms';
import toggleRoom from '@/app/service/toggleRoom';
import { SlArrowDown } from 'react-icons/sl';

export default function FilterRoom() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  // We pass router to toggleRoom, rule of hooks n all that jazz
  const router = useRouter();
  const selectedRooms = useSelectedRooms();

  return (
    <div className="relative mt-4">
      <div onClick={() => setIsMenuOpen((prev) => !prev)}>
        <button className="relative p-2 border border-gray-400 rounded-full w-1/2">
          {selectedRooms.length ? (
            `${selectedRooms.length} valda rum`
          ) : (
            <>
              <p>Mötesrum</p>
            </>
          )}
        </button>
        <SlArrowDown
          className={`absolute top-3 left-[calc(50%-2em)] ${
            isMenuOpen ? 'rotate-180' : 'rotate-0'
          }`}
        />
      </div>

      {isMenuOpen && (
        <div className="absolute top-12 w-full flex flex-col bg-white border border-gray-400 rounded-lg p-4">
          {[
            'Margret (4)',
            'Steve (6)',
            'Ada (10)',
            'Edmund (10)',
            'Grace (20)',
          ].map((room) => (
            <label className="flex justify-between" key={room}>
              {room}
              <input
                type="checkbox"
                checked={selectedRooms.includes(room)}
                onChange={() => toggleRoom(room, selectedRooms, router)}
              />
            </label>
          ))}
          <div className="flex space-x-2 mt-4">
            <button
              className="bg-black text-white p-2 rounded-full w-1/2"
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              Välj
            </button>
            <button
              className="bg-black text-white p-2 rounded-full w-1/2"
              onClick={() => router.push('?', undefined)}
            >
              Avmarkera alla
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
