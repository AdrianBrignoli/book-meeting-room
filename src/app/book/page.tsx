import BookDynamic from '../components/combined/BookDynamic';

export default function Book() {
  return (
    <section className="flex-grow flex flex-col justify-between w-full p-4">
      <h3 className="text-2xl">Välj en tid</h3>
      <BookDynamic />
    </section>
  );
}
