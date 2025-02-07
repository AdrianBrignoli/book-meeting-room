import { PopupErrorProps } from '@/types/types';
export const Popup = ({ msg, setError, Icon }: PopupErrorProps) => {
  return (
    <section
      className="fixed inset-0 h-screen w-screen bg-black bg-opacity-50"
      onClick={() => setError(false)}
    >
      <section className="fixed flex flex-col justify-between space-y-2 p-8 left-1/2 top-1/2 h-44 w-full max-w-96 bg-white border border-gray-500 rounded-2xl transform -translate-x-1/2 -translate-y-1/2">
        <p className="text-gray-800 text-center">{msg}</p>
        <div className="mx-auto text-lg">
          <Icon />
        </div>
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
