export const HeaderText = ({ text }: { text: string }) => {
  return <h1 className="text-4xl mt-4">{text}</h1>;
};

export const Spinner = () => {
  return <div className="spinner"></div>;
};
