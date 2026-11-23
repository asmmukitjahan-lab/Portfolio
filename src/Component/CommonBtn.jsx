
const CommonBtn = ({ children }) => {
  return (
    <button
      className="btn cursor-pointer text-white text-[15px] font-bold rounded-full py-3.75 px-8.75 flex items-center gap-1.5
    "
    >
      {children}
    </button>
  );
};

export default CommonBtn;
