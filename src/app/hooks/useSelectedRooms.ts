import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';

export default function useSelectedRooms() {
  const searchParams = useSearchParams();
  const selectedRooms = useMemo(
    () => searchParams.get('rooms')?.split(',') || [],
    [searchParams.get('rooms')]
  );

  return selectedRooms;
}
