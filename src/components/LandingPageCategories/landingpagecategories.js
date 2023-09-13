import React from "react";
import { BagCheckFill } from "react-bootstrap-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-creative";

function LandingPageCategories() {
  const data = [
    { title: "abc", icon: <BagCheckFill /> },
    { title: "abc", icon: <BagCheckFill /> },
    { title: "abc", icon: <BagCheckFill /> },
    { title: "abc", icon: <BagCheckFill /> },
    { title: "abc", icon: <BagCheckFill /> },
    { title: "abc", icon: <BagCheckFill /> },
    { title: "abc", icon: <BagCheckFill /> },
    { title: "abc", icon: <BagCheckFill /> },
    { title: "abc", icon: <BagCheckFill /> },
    { title: "abc", icon: <BagCheckFill /> },
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
    <div className="row mt-4">
      <div className="d-flex flex-row justify-content-between  align-items-center mt-4 mb-4">
        <div className="">Explore Popular Categories</div>
        <div className="">View All</div>
      </div>
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
        {data?.map(({ icon, title }, index) => {
          return (
            <SwiperSlide key={index}>
              <div
                style={{ width: "100%" }}
                key={index}
                className="col-lg-1  border p-4 bg-secondary"
              >
                <div className="d-flex justify-content-center">{icon}</div>
                <div className="d-flex justify-content-center">{title}</div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default LandingPageCategories;
