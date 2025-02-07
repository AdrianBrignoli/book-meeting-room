import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

export default function toggleRoom(
  room: string,
  selectedRooms: string[],
  router: AppRouterInstance
) {
  const updatedRooms = selectedRooms.includes(room)
    ? selectedRooms.filter((r) => r !== room)
    : [...selectedRooms, room];

  const params = new URLSearchParams();
  if (updatedRooms.length > 0) {
    params.set('rooms', updatedRooms.join(','));
  }

  router.push(`?${params.toString()}`, undefined);
}
