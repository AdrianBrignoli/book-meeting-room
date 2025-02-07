import Link from 'next/link';
import { HeaderText } from './components/basic/BasicUI';
import BookedSlots from './components/combined/BookedSlots';
import { Suspense } from 'react';
import { Spinner } from './components/basic/BasicUI';
import { use } from 'react';
import { getBookings } from './actions/actions';

const BookedSlotsShell = () => {
  const bookingData = use(getBookings());
  if (!bookingData) return <p>Meh</p>;
  return <BookedSlots bookingData={bookingData} />;
};

export default function Home() {
  return (
    <section className="flex-grow flex flex-col justify-between w-full p-4">
      <h1 className="text-[4em] pt-4">Boka ett rum</h1>
      <Suspense fallback={<Spinner />}>
        <BookedSlotsShell />
      </Suspense>
      <Link className="button" href={'/book'}>
        Boka ett rum
      </Link>
    </section>
  );
}
