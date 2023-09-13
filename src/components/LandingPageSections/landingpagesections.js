import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-creative";

function LandingPageSections() {
  const data = [
    "1111",
    "2222",
    "3333",
    "4444",
    "5555",
    "6666",
    "7777",
    "8888",
    "9999",
  ];

  let responsiveSlide = {
    320: {
      slidesPerView: 3.5,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 3.5,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 3.5,
      spaceBetween: 20,
    },
    700: {
      slidesPerView: 3.5,
      spaceBetween: 40,
    },
    800: {
      slidesPerView: 7.5,
      spaceBetween: 40,
    },
    850: {
      slidesPerView: 7.5,
      spaceBetween: 20,
    },
    1000: {
      slidesPerView: 7.5,
      spaceBetween: 20,
    },
    1800: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  };

  return (
    <div className="row d-flex flex-wrap mt-4">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={10}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loopFillGroupWithBlank={false}
        className="mySwiper"
        breakpoints={responsiveSlide}
      >
        {data?.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div
                key={index}
                style={{ width: "100%" }}
                className="col-lg-2 col-md-2 col-xs-2 col-sm-2 border bg-secondary g-3 text-center pt-3 pb-3 text-light"
              >
                {item}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default LandingPageSections;
