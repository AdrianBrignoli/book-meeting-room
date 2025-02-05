export const PopupSuccess = () => {
  return (
    <div>
      <p>Ditt rum är bokat</p>
      <p>tjohej</p>
    </div>
  );
};

import { LiaSadTearSolid } from 'react-icons/lia';
import { PopupErrorProps } from '@/types/types';
export const PopupError = ({ msg, setError }: PopupErrorProps) => {
  return (
    <section
      className="absolute h-screen w-screen bg-black bg-opacity-50"
      onClick={() => setError(false)}
    >
      <section className="fixed flex flex-col justify-between p-4 left-1/2 top-1/2 h-32 w-full max-w-96 bg-white border border-gray-500 rounded-lg transform -translate-x-1/2 -translate-y-1/2">
        <p className="text-gray-800">{msg}</p>
        <LiaSadTearSolid />
        <button
          className="w-full p-2 bg-black text-white rounded-full"
          onClick={() => setError(false)}
        >
          Stäng
        </button>
      </section>
    </section>
  );
};
