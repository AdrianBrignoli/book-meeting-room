import { useSearchParams } from 'next/navigation';
import { useEffect, useState, useActionState } from 'react';
import { addBooking } from '@/app/actions/actions';

export default function Form({
  setShowPopup,
  setState,
}: {
  setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
  setState: React.Dispatch<
    React.SetStateAction<{ success: string; msg: string }>
  >;
}) {
  const searchParams = useSearchParams();
  const slotId = searchParams.get('slotId');
  const [userName, setUserName] = useState<string>('');
  const [state, formAction] = useActionState(addBooking, {
    success: false,
    msg: '',
  });

  if (!slotId) return; //(!)

  useEffect(() => {
    if (state.msg) {
      setState(state);
      setShowPopup(true);
    }
  }, [state]);

  return (
    <>
      <form
        className="flex-1 flex flex-col justify-between"
        action={formAction}
      >
        <div className="flex flex-col">
          <label className="text-gray-500">Förnamn & Efternamn</label>
          <input
            className="border border-gray-200 rounded-lg p-4"
            name="user"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Skriv ditt namn här"
          ></input>
          <input type="hidden" name="slotId" value={slotId}></input>
        </div>
        <button className="button" type="submit">
          Boka
        </button>
      </form>
    </>
  );
}
