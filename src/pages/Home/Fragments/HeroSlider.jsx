

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import { Autoplay} from 'swiper/modules';

import HeroSliderButtons from './HeroSliderButtons';

const banner = [
    {title:"banner-1" , src:"/assets/static/main-banner-1.jpg"},
    {title:"banner-2" , src:"/assets/static/main-banner-2.jpg"},
    {title:"banner-3" , src:"/assets/static/main-banner-3.jpg"},
]

const HeroSlider = () => {
  return (
     <>
      <Swiper
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        modules={[Autoplay]}
        className="mySwiper !hidden w-full overflow-hidden md:!block"
      >
        {banner.map((item) => (
          <SwiperSlide key={item.src}>
            <img className="block h-auto w-full" src={item.src} alt={item.title} />
          </SwiperSlide>
        ))}
        <HeroSliderButtons/>
      </Swiper>
    </>
  )
}

export default HeroSlider