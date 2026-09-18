import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const TabButton = ({ onPrev, onNext }) => {
  return (
    <div className="*:bg-primary flex gap-x-1 sm:gap-x-2 *:text-base sm:*:text-xl *:text-white *:hover:bg-white *:hover:text-primary *:hover:cursor-pointer transition-all">
      <button type="button" onClick={onPrev} className="p-1 sm:p-2" aria-label="Previous tab">
        <IoIosArrowBack />
      </button>

      <button type="button" onClick={onNext} className="p-1 sm:p-2" aria-label="Next tab">
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default TabButton;