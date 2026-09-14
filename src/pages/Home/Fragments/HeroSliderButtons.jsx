import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import { useSwiper } from "swiper/react";

const HeroSliderButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="absolute bottom-4 left-4 z-10 flex gap-1 rounded-full border border-white/40 bg-black/20 p-1 shadow-lg backdrop-blur-md sm:bottom-6 sm:left-6">
      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => swiper.slidePrev()}
        className="flex size-10 cursor-pointer items-center justify-center rounded-full border border-white/70 bg-white/90 text-lg text-neutral-800 shadow-sm transition-all duration-200 hover:border-primary hover:bg-primary hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-90 sm:size-11"
      >
        <FaChevronLeft />
      </button>

      <button
        type="button"
        aria-label="Next slide"
        onClick={() => swiper.slideNext()}
        className="flex size-10 cursor-pointer items-center justify-center rounded-full border border-white/70 bg-white/90 text-lg text-neutral-800 shadow-sm transition-all duration-200 hover:border-primary hover:bg-primary hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-90 sm:size-11"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default HeroSliderButtons;