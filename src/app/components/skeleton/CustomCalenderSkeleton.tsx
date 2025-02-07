import { BiArrowBack } from 'react-icons/bi';
import { IoArrowForward } from 'react-icons/io5';

export default function CustomCalenderSkeleton() {
  return (
    <section className="flex-grow flex flex-col w-full my-4">
      <div className="flex justify-between p-2">
        <div className="border border-gray-400 rounded-full p-1">
          <BiArrowBack />
        </div>
        <p className="text-gray-700">...</p>
        <div className="border border-gray-400 rounded-full p-1">
          <IoArrowForward />
        </div>
      </div>
      <div className="flex-grow flex flex-col h-full divide-y divide-gray-300 border border-gray-300 rounded-lg">
        <div className="flex justify-evenly text-center p-4">
          <p className="w-1/3">...</p>
          <p className="w-1/3 ">...</p>
          <p className="w-1/3">...</p>
        </div>
      </div>
    </section>
  );
}
