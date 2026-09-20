import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import reviews from "../../lib/data/reviews.js";

import BestSelling from "../../components/Templates/Home/NewProducts/NewProducts.jsx";
import Button from "../../components/Common/Button.jsx";
import TabTitle from "../../components/Common/TabsSlider/TabTitle.jsx";
import SectionBox from "../../components/Common/SectionBox/SectionBox.jsx";

import Features from "./Fragments/Features.jsx";
import HeroSlider from "./Fragments/HeroSlider.jsx";
import Blogs from "./Fragments/Blogs.jsx";

const HomePage = () => {
  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <HeroSlider />

      {/* Features Section */}
      <Features />

      {/* Best Selling Products */}
      <BestSelling />

      {/* Discount Banner */}
      <section className="relative mt-8 min-h-70 w-full overflow-hidden bg-[url('/assets/static/offbox-bg.png')] bg-cover bg-center bg-no-repeat sm:min-h-80 md:min-h-90">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Banner Content */}
        <div className="relative z-10 flex min-h-70 flex-col items-center justify-center px-5 text-center sm:min-h-80 md:min-h-90 md:items-start md:px-10 lg:px-16">
          <h1 className="font-roboto-Regular text-2xl uppercase leading-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
            All Leather Product <span className="text-second">30% Off</span>
          </h1>

          <p className="mt-4 max-w-2xl text-xs leading-6 text-white/90 sm:text-sm md:max-w-xl md:text-base md:leading-7">
            Belt made of real leather, vegetable tanned belt, chrome free
            tanning in Germany, also available in plus sizes.
          </p>

          <Button className="mt-6 cursor-pointer rounded-md px-6 py-2.5 font-roboto-Light text-sm uppercase transition-all duration-300 hover:scale-105">
            View Collection
          </Button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mt-10 w-full px-4 sm:px-6 md:px-8 lg:px-10">
        <SectionBox>
          <TabTitle>Testimonial</TabTitle>
        </SectionBox>
        <div className="mt-6">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="w-full"
          >
            {reviews.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className="h-auto">
                <div className="flex h-full flex-col items-center rounded-lg p-5 text-center sm:p-6 md:p-7">
                  {/* Testimonial Avatar */}
                  <img
                    src={testimonial.avatar}
                    alt={`${testimonial.name} avatar`}
                    loading="lazy"
                    className="h-20 w-20 rounded-full border-4 border-primary object-cover sm:h-24 sm:w-24"
                  />

                  {/* Testimonial Content */}
                  <div className="mt-4 w-full">
                    <p className="line-clamp-4 text-xs leading-6 text-gray-400 font-roboto-Light sm:text-sm">
                      {testimonial.comment}
                    </p>

                    <h3 className="mt-3 text-sm text-primary font-roboto-Bold sm:text-base">
                      {testimonial.name}
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Features Section */}
      <Features />

      {/* Blogs Section */}
      <Blogs />
    </div>
  );
};

export default HomePage;
