'use client';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function FilterRoom() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const searchParams = useSearchParams();
  const router = useRouter();

  // Convert existing search params into an object
  const getSelectedRooms = () => {
    const rooms = searchParams.get('rooms');
    return rooms ? rooms.split(',') : [];
  };

  const selectedRooms = getSelectedRooms();

  const toggleRoom = (room: string) => {
    const updatedRooms = selectedRooms.includes(room)
      ? selectedRooms.filter((r) => r !== room) // Remove room
      : [...selectedRooms, room]; // Add room

    // Update the URL with new room filters
    const params = new URLSearchParams();
    if (updatedRooms.length > 0) {
      params.set('rooms', updatedRooms.join(','));
    }

    router.push(`?${params.toString()}`, undefined);
  };

  return (
    <div className="relative">
      <button
        className="p-2 border border-gray-400 rounded-full min-w-36"
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        Välj rum
      </button>

      {isMenuOpen && (
        <div className="absolute top-12 w-full flex flex-col bg-white border border-gray-400 rounded-lg p-4">
          {['Margret', 'Steve', 'Ada', 'Edmund', 'Grace'].map((room) => (
            <label className="flex justify-between" key={room}>
              {room}
              <input
                type="checkbox"
                checked={selectedRooms.includes(room)}
                onChange={() => toggleRoom(room)}
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
