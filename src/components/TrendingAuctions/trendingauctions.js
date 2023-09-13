import React from "react";
import { BagCheckFill } from "react-bootstrap-icons";
import Productcard from "../Cards/ProductCard/productcard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-creative";

function TrendingAuctions({ title }) {
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
      slidesPerView: 2.1,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 2.1,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    700: {
      slidesPerView: 4,
      spaceBetween: 10,
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
    <div className="mt-4 row" style={{ display: "flex" }}>
      <div className="d-flex flex-row justify-content-between  align-items-center mt-4 mb-4">
        <div className="col-lg-6 col-sm-5 col-xs-5">{title}</div>
        <div className="col-lg-6 col-sm-5 col-xs-5">View All</div>
      </div>
      <div className="text-secondary">
        See what's popular across thousands of Products
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
        {data?.map((item, index) => {
          return (
            <SwiperSlide key={index} className="col-lg-3 col-sm-4">
              <Productcard data={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default TrendingAuctions;
