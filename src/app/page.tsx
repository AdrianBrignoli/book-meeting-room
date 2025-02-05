import Link from 'next/link';

export default function Home() {
  return (
    <section className="flex-grow flex flex-col justify-between w-full p-4">
      <h1 className="text-4xl text-center">Boka ett rum</h1>
      <div className="flex justify-center items-center">
        <Link
          className="bg-black text-white text-2xl text-center w-full max-w-64 p-2 rounded-full"
          href={'/book'}
        >
          Boka ett rum
        </Link>
      </div>
    </section>
  );
}
