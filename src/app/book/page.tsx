import BookDynamic from '../components/combined/BookDynamic';
import { getSlots } from '../actions/actions';
import { Suspense } from 'react';
import { use } from 'react';
import SpinnerAndButton from '../components/combined/SpinnerAndButton';
import { HeaderText } from '../components/basic/BasicUI';

const BookDynamicShell = () => {
  const slotData = use(getSlots());
  if (!slotData) return <p>Meh</p>;
  return <BookDynamic slotData={slotData} />;
};

export default function Book() {
  return (
    <section className="flex-grow flex flex-col justify-between w-full p-4">
      <HeaderText text="Välj en tid" />
      <Suspense fallback={<SpinnerAndButton />}>
        <BookDynamicShell />
      </Suspense>
    </section>
  );
}
