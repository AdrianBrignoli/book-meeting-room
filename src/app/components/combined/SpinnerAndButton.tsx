import { Spinner } from '../basic/BasicUI';
import CustomCalenderSkeleton from '../skeleton/CustomCalenderSkeleton';

export default function SpinnerAndButton() {
  return (
    <section className="flex-grow flex flex-col justify-between items-center w-full p-4">
      <CustomCalenderSkeleton />
      <Spinner />
      <button className="button">Boka</button>
    </section>
  );
}
