
import { useEffect, useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import RatingStars from "../RatingStars";



const getProductImage = (item) => {
  const candidates = [item?.image_url];

  return candidates.find(
    (value) => Boolean(value && String(value).trim())
  );
};

const defaultRenderItem = (item, onAddToCart) => {
  const imageUrl = getProductImage(item);

  return (
    <div className="group flex mt-5 mx-8 h-full flex-col overflow-hidden bg-white cursor-pointer">
      {/* Product Image */}
      <div className="flex h-52 w-full items-center justify-center overflow-hidden border border-gray-400 p-5 sm:h-56 md:h-60">
        {imageUrl && (
          <img
            src={imageUrl}
            alt={item?.name || "Product"}
            className="h-64 w-full object-contain transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />
        )}
      </div>

      {/* Product Info */}
      <div className="flex flex-1 flex-col px-4 py-4 text-center sm:px-5">
        <h4 className="line-clamp-2 min-h-12 text-sm font-roboto-Light leading-6 text-gray-500 hover:text-primary sm:text-base">
          {item?.name || "Product"}
        </h4>

        <p className="mt-2 text-sm font-semibold text-primary sm:text-base">
          {item?.price ?? "Price on request"}$
        </p>
       <RatingStars rating={item?.rating} />
       <button
         type="button"
         onClick={() => onAddToCart?.(item)}
         className="border-none w-fit mx-auto mt-2 text-zinc-900 font-roboto-Regular hover:text-primary cursor-pointer"
       >
         Add to cart
       </button>
      </div>
    </div>
  );
};

const ProductsSlider = ({
  swiperRef,
  items = [],
  renderItem,
  slidesPerView = 3,
  spaceBetween = 30,
  className = "mySwiper",
  slideClassName = "",
  onSwiper,
  onAddToCart,
}) => {
  const localSwiperRef = useRef(null);

  const activeSwiperRef = swiperRef || localSwiperRef;

  useEffect(() => {
    if (activeSwiperRef.current && items.length) {
      activeSwiperRef.current.slideTo(0, 0);
    }
  }, [items, activeSwiperRef]);

  return (
    <Swiper
      onSwiper={(swiper) => {
        activeSwiperRef.current = swiper;

        if (items.length) {
          swiper.slideTo(0, 0);
        }

        onSwiper?.(swiper);
      }}
      slidesPerView={slidesPerView}
      spaceBetween={spaceBetween}
      className={className}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 16,
        },

        480: {
          slidesPerView: 2,
          spaceBetween: 16,
        },

        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },

        1024: {
          slidesPerView: 3,
          spaceBetween: 24,
        },

        1280: {
          slidesPerView: slidesPerView,
          spaceBetween: spaceBetween,
        },
      }}
    >
      {items.map((item, index) => (
        <SwiperSlide
          key={item.id ?? item.name ?? index}
          className={`h-auto ${slideClassName}`}
        >
          {renderItem
            ? renderItem(item, index)
            : defaultRenderItem(item, onAddToCart)}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductsSlider;

