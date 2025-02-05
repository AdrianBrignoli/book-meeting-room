'use client';
import { useSearchParams } from 'next/navigation';

export const Form = () => {
  return (
    <>
      <h1 className="text-3xl">Vem bokar?</h1>
      <form className="flex flex-col">
        <label className="text-gray-500">Förnamn & Efternamn</label>
        <input className="border border-gray-200 rounded-lg p-1"></input>
      </form>
    </>
  );
};

export default function Confirm() {
  const searchParams = useSearchParams();
  const id = searchParams.get('slotId');

  const clickHandler = () => {
    //addBooking();
  };

  return (
    <div>
      <Form />
      <button
        className="bg-black rounded-full p-2 w-full text-white"
        onClick={clickHandler}
      >
        Boka
      </button>
    </div>
  );
}
