'use client';
import { useState } from 'react';
import { LiaSadTearSolid } from 'react-icons/lia';
import { Popup } from '../components/popup/Popup';
import { IoHappySharp } from 'react-icons/io5';
import { HeaderText } from '../components/basic/BasicUI';
import Form from '../components/complex/Form';

export default function Confirm() {
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [state, setState] = useState<{ success: string; msg: string }>({
    success: '',
    msg: '',
  });

  return (
    <section className="flex-grow flex flex-col justify-between w-full p-4 space-y-4">
      {showPopup &&
        (state.success ? (
          <Popup msg={state.msg} setError={setShowPopup} Icon={IoHappySharp} />
        ) : (
          <Popup
            msg={state.msg}
            setError={setShowPopup}
            Icon={LiaSadTearSolid}
          />
        ))}
      <HeaderText text="Vem bokar?" />
      <Form setShowPopup={setShowPopup} setState={setState} />
    </section>
  );
}
