"use client";
// Import Swiper React components
import banner1 from "@/public/banner-img-1.jpg";
import banner2 from "@/public/banner-img-2.jpg";
import banner3 from "@/public/banner-img-3.jpg";
import banner4 from "@/public/banner-img-4.jpg";
import Image from "next/image";
import { useCallback, useRef } from "react";
/*** icons ***/
import { IoCaretForward, IoCaretBack } from "react-icons/io5";
import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

// SWIPER IMPORTS
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
export default function HomeHeroCarousel() {
  const swiperRef = useRef<SwiperType>();

  return (
    <div className="customSwiperContainer relative z-[0]">
      <style global jsx>{`
        span.swiper-pagination-bullet {
          background-color: rgb(0, 0, 0) !important;
          opacity: 0.6 !important;
        }

        span.swiper-pagination-bullet.swiper-pagination-bullet-active {
          background-color: white !important;
          display: inline-block;
          width: 10px !important;
          height: 10px !important;
          border: 2px white solid !important;
        }
      `}</style>
      <Swiper
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        speed={800}
        loop={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper "
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        <SwiperSlide>
          <Image
            src={banner1}
            alt="banner"
            className="w-full h-[220px] sm:h-[420px] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={banner2}
            alt="banner"
            className="w-full h-[220px] sm:h-[420px] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={banner3}
            alt="banner"
            className="w-full h-[220px] sm:h-[420px] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={banner4}
            alt="banner"
            className="w-full h-[220px] sm:h-[420px] object-cover"
          />
        </SwiperSlide>
      </Swiper>
      <div className="btnsContainer  ">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="group  || absolute top-[50%] left-2 z-[999]  
          || bg-gray-300/50 sm:p-2 rounded-full hover:bg-gray-300/80 "
        >
          <GoChevronLeft
            size={30}
            className="text-gray-300 group-hover:text-gray-50"
          />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="group  || absolute top-[50%] right-2 z-[999] 
           || bg-gray-300/50 sm:p-2 rounded-full hover:bg-gray-300/80 "
        >
          <GoChevronRight
            size={30}
            className="text-gray-300 group-hover:text-gray-50"
          />
        </button>
      </div>
      <div></div>
    </div>
  );
}
