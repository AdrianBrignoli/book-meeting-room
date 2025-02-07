'use client';
import { useRouter } from 'next/navigation';
import { ButtonProps } from '@/types/types';

export default function Button({ setError, chosenSlotId }: ButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    if (!chosenSlotId) {
      setError(true);
      return;
    }

    router.push(`/confirm?slotId=${chosenSlotId}`);
  };

  return (
    <>
      <button onClick={handleClick} className="button">
        Boka
      </button>
    </>
  );
}
