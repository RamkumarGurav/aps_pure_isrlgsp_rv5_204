"use client";
// Import Swiper React components
import gowriImg from "@/public/topper/gowri.png";
import ayeshaImg from "@/public/topper/ayesha.png";
import yeshImg from "@/public/topper/yesh.png";
import sumaImg from "@/public/topper/suma-1.png";
import amithaImg from "@/public/topper/amitha.png";
import Image from "next/image";
import { IoCaretForward, IoCaretBack } from "react-icons/io5";
// SWIPER IMPORTS
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useCallback, useRef } from "react";
import { Roboto } from "next/font/google";
const font = Roboto({ weight: "400", subsets: ["latin"], display: "swap" });

export default function ToppersCarousel() {
  const swiperRef = useRef<SwiperType>();

  return (
    <div
      className={`customSwiperContainer relative mx-4 z-[0] ${font.className}`}
    >
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
        slidesPerView={1}
        loop={true}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },

          // when window width is >= 640px
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
        modules={[Navigation, Autoplay]}
        className="mySwiper "
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        <SwiperSlide>
          <div className="group mx-auto || text-center  w-[240px] sm:w-[260px]  py-4   || flex justify-center    ">
            <div className="topperCard rounded bg-[#F8F5E4]   shadow-lg pb-2   || grid place-content-center">
              <div className="px-2 overflow-hidden">
                <div
                  id="image-container"
                  className="relative h-[280px] w-[230px] sm:w-[240px] overflow-hidden   ||  flex justify-center items-end  
                  || hover:scale-[1.2]   transition-all duration-700 ease-in-out"
                >
                  <Image
                    src={sumaImg}
                    alt="Sumedha"
                    fill
                    sizes="500px"
                    className="object-cover "
                  />
                </div>
              </div>
              <p className="mt-2 text-lg font-semibold group mx-auto-hover:text-red-600 transition-all duration-300">
                Sumedha Kulkarni
              </p>
              <p className="mb-1 text-gray-900 font-sans text-medium">
                (98.8%)
              </p>
              <p className="mb-1 text-gray-900 font-sans text-medium">
                His/Civ - 100
              </p>
              <p className="mb-1 text-gray-900 font-sans text-medium">
                Biology - 100
              </p>
              <p className="mb-1 text-gray-900 font-sans text-medium">
                Computers - 100
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="group mx-auto || text-center  w-[240px] sm:w-[260px]  py-4   || flex justify-center   ">
            <div className="topperCard rounded bg-[#F8F5E4]   shadow-lg pb-2   || grid place-content-center">
              <div className="px-2 overflow-hidden">
                <div
                  id="image-container"
                  className="relative h-[280px]  w-[230px] sm:w-[240px] overflow-hidden   ||  flex justify-center items-end  
                  || hover:scale-[1.2]   transition-all duration-700 ease-in-out"
                >
                  <Image
                    src={amithaImg}
                    alt="amitha"
                    fill
                    sizes="500px"
                    className="object-cover "
                  />
                </div>
              </div>
              <p className="mt-2 text-lg font-semibold group mx-auto-hover:text-red-600 transition-all duration-300">
                Amith P
              </p>
              <p className="mb-1 text-gray-900 font-sans text-medium">
                (95.6%)
              </p>
              <p className="mb-1 text-gray-900 font-sans text-medium">
                His/Civ - 100
              </p>
              <p className="mb-1 text-gray-900 font-sans text-medium">
                Computers - 100
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="group mx-auto || text-center  w-[240px] sm:w-[260px]  py-4   || flex justify-center   ">
            <div className="topperCard rounded bg-[#F8F5E4]   shadow-lg pb-2   || grid place-content-center">
              <div className="px-2 overflow-hidden">
                <div
                  id="image-container"
                  className="relative h-[280px]  w-[230px] sm:w-[240px] overflow-hidden   ||  flex justify-center items-end  
                  || hover:scale-[1.2]   transition-all duration-700 ease-in-out"
                >
                  <Image
                    src={gowriImg}
                    alt="Gowri"
                    fill
                    sizes="500px"
                    className="object-cover "
                  />
                </div>
              </div>
              <p className="mt-2 text-lg font-semibold group mx-auto-hover:text-red-600 transition-all duration-300">
                Gowri T.R
              </p>
              <p className="mb-1 text-gray-900 font-sans text-medium">
                (95.6%)
              </p>
              <p className="mb-1 text-gray-900 font-sans text-medium">
                Computers - 100
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="group mx-auto || text-center  w-[240px] sm:w-[260px]  py-4   || flex justify-center   ">
            <div className="topperCard rounded bg-[#F8F5E4]   shadow-lg pb-2   || grid place-content-center">
              <div className="px-2 overflow-hidden">
                <div
                  id="image-container"
                  className="relative h-[280px]  w-[230px] sm:w-[240px] overflow-hidden   ||  flex justify-center items-end  
                  || hover:scale-[1.2]   transition-all duration-700 ease-in-out"
                >
                  <Image
                    src={ayeshaImg}
                    alt="Ayesha"
                    fill
                    sizes="500px"
                    className="object-cover "
                  />
                </div>
              </div>
              <p className="mt-2 text-lg font-semibold group mx-auto-hover:text-red-600 transition-all duration-300">
                Aayesha Tasleema
              </p>
              <p className="mb-1 text-gray-900 font-sans text-medium">
                (94.0%)
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="group mx-auto || text-center  w-[240px] sm:w-[260px]  py-4   || flex justify-center   ">
            <div className="topperCard rounded bg-[#F8F5E4]   shadow-lg pb-2   || grid place-content-center">
              <div className="px-2 overflow-hidden">
                <div
                  id="image-container"
                  className="relative h-[280px]  w-[230px] sm:w-[240px] overflow-hidden   ||  flex justify-center items-end  
                  || hover:scale-[1.2]   transition-all duration-700 ease-in-out"
                >
                  <Image
                    src={yeshImg}
                    alt="Yesh"
                    fill
                    sizes="500px"
                    className="object-cover "
                  />
                </div>
              </div>
              <p className="mt-2 text-lg font-semibold group mx-auto-hover:text-red-600 transition-all duration-300">
                Yeshwant C.M
              </p>
              <p className="mb-1 text-gray-900 font-sans text-medium">
                (91.4%)
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="btnsContainer  ">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="absolute top-[50%] left-[-25px] z-[999] text-gray-600 hover:text-red-500 "
        >
          <IoCaretBack size={30} className=" " />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="absolute top-[50%] right-[-25px] z-[999] text-gray-600 hover:text-red-500"
        >
          <IoCaretForward size={30} />
        </button>
      </div>
      <div></div>
    </div>
  );
}
