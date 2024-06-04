"use client";
/*** nextjs ***/
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
/*** icons ***/
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
/*** images ***/
import infra1 from "@/public/infrastructure/1.jpg";
import infra2 from "@/public/infrastructure/2.jpg";
import infra3 from "@/public/events-img-1.jpg";
import infra4 from "@/public/events-img-2.jpg";
import infra5 from "@/public/events-img-3.jpg";
import infra6 from "@/public/events-img-4.jpg";
import infra7 from "@/public/sports/2.jpg";
import infra8 from "@/public/sports/1.jpg";
import knowledgeCentre1 from "@/public/knowledge-center/1.jpg";
import knowledgeCentre2 from "@/public/knowledge-center/2.jpg";
import scienceLab1 from "@/public/science-lab/5.jpg";
import scienceLab2 from "@/public/science-lab/6.jpg";
import scienceLab3 from "@/public/science-lab/01.jpg";
import scienceLab4 from "@/public/science-lab/02.jpg";
import scienceLab5 from "@/public/science-lab/03.jpg";
import scienceLab6 from "@/public/science-lab/4.jpg";
import sports1 from "@/public/sports/1.jpg";
import sports2 from "@/public/sports/2.jpg";
import sports3 from "@/public/sports/3.jpg";
import transport1 from "@/public/transport/1.jpg";
import transport2 from "@/public/transport/2.jpg";
import transport3 from "@/public/transport/3.jpg";

/*****************************************************
           component
*****************************************************/
export default function Carousel({
  autoPlay = false,
  interval = 3000,
  currentIndex,
}: {
  autoPlay?: boolean;
  interval?: number;
  currentIndex: number;
}) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(currentIndex);
  const totalSlidesNum = 22;

  // console.log(currentIndex ?? currentIndex);

  const handleNext = useCallback(
    () =>
      setCurrentSlideIndex(
        currentSlideIndex === totalSlidesNum - 1 ? 0 : currentSlideIndex + 1
      ),
    [currentSlideIndex, totalSlidesNum]
  );

  const handlePrev = () =>
    setCurrentSlideIndex(
      currentSlideIndex === 0 ? totalSlidesNum - 1 : currentSlideIndex - 1
    );

  useEffect(() => {
    if (!autoPlay) return;

    const intervalId = setInterval(() => handleNext(), interval);

    return () => clearInterval(intervalId);
  }, [autoPlay, interval, handleNext]);

  return (
    <>
      <div>
        <div
          id="carousel-container"
          className="overflow-hidden  ||  relative bg-black/70   border-solid border-4 border-gray-100 shadow-2xl rounded-lg"
        >
          <div
            id="slides-container"
            className={`  z-[99999]  flex  transition-transform duration-700 ease-in-out 
    `}
            // whenever you want to add transform effect do it using style attribute instead of tailwindcss it will work correctly
            style={{ transform: `translateX(-${currentSlideIndex * 100}%)` }}
          >
            <Image
              src={infra1}
              alt="my image"
              width={700}
              height={500}
              className="min-w-full  h-[250px] sm:h-[400px] object-contain"
              priority={true}
              placeholder="blur"
            />
            <Image
              src={infra2}
              alt="my image"
              width={700}
              height={500}
              className="min-w-full  h-[250px] sm:h-[400px] object-contain"
              priority={true}
              placeholder="blur"
            />
            <Image
              src={infra3}
              alt="my image"
              width={700}
              height={500}
              className="min-w-full  h-[250px] sm:h-[400px] object-contain"
              priority={true}
              placeholder="blur"
            />
            <Image
              src={infra4}
              alt="my image"
              width={700}
              height={500}
              className="min-w-full  h-[250px] sm:h-[400px] object-contain"
              priority={true}
              placeholder="blur"
            />
            <Image
              src={infra5}
              alt="my image"
              width={700}
              height={500}
              className="min-w-full  h-[250px] sm:h-[400px] object-contain"
              priority={true}
              placeholder="blur"
            />
            <Image
              src={infra6}
              alt="my image"
              width={700}
              height={500}
              className="min-w-full  h-[250px] sm:h-[400px] object-contain"
              priority={true}
              placeholder="blur"
            />
            <Image
              src={infra7}
              alt="my image"
              width={700}
              height={500}
              className="min-w-full  h-[250px] sm:h-[400px] object-contain"
              priority={true}
              placeholder="blur"
            />
            <Image
              src={infra8}
              alt="my image"
              width={700}
              height={500}
              className="min-w-full  h-[250px] sm:h-[400px] object-contain"
              priority={true}
              placeholder="blur"
            />
            <Image
              src={knowledgeCentre1}
              alt="my image"
              width={700}
              height={500}
              className="min-w-full  h-[250px] sm:h-[400px] object-contain"
              priority={true}
              placeholder="blur"
            />
            <Image
              src={knowledgeCentre2}
              alt="my image"
              width={700}
              height={500}
              className="min-w-full  h-[250px] sm:h-[400px] object-contain"
              priority={true}
              placeholder="blur"
            />
            <Image
              src={scienceLab1}
              alt="my image"
              width={700}
              height={500}
              className="min-w-full  h-[250px] sm:h-[400px] object-contain"
              priority={true}
              placeholder="blur"
            />
            <Image
              src={scienceLab2}
              alt="my image"
              width={700}
              height={500}
              className="min-w-full  h-[250px] sm:h-[400px] object-contain"
              priority={true}
              placeholder="blur"
            />
            <Image
              src={scienceLab3}
              alt="my image"
              width={700}
              height={500}
              className="min-w-full  h-[250px] sm:h-[400px] object-contain"
              priority={true}
              placeholder="blur"
            />
            <Image
              src={scienceLab4}
              alt="my image"
              width={700}
              height={500}
              className="min-w-full  h-[250px] sm:h-[400px] object-contain"
              priority={true}
              placeholder="blur"
            />
            <Image
              src={scienceLab5}
              alt="my image"
              width={700}
              height={500}
              className="min-w-full  h-[250px] sm:h-[400px] object-contain"
              priority={true}
              placeholder="blur"
            />
            <Image
              src={scienceLab6}
              alt="my image"
              width={700}
              height={500}
              className="min-w-full  h-[250px] sm:h-[400px] object-contain"
              priority={true}
              placeholder="blur"
            />
            <Image
              src={sports1}
              alt="my image"
              width={700}
              height={500}
              className="min-w-full  h-[250px] sm:h-[400px] object-contain"
              priority={true}
              placeholder="blur"
            />
            <Image
              src={sports2}
              alt="my image"
              width={700}
              height={500}
              className="min-w-full  h-[250px] sm:h-[400px] object-contain"
              priority={true}
              placeholder="blur"
            />
            <Image
              src={sports3}
              alt="my image"
              width={700}
              height={500}
              className="min-w-full  h-[250px] sm:h-[400px] object-contain"
              priority={true}
              placeholder="blur"
            />
            <Image
              src={transport1}
              alt="my image"
              width={700}
              height={500}
              className="min-w-full  h-[250px] sm:h-[400px] object-contain"
              priority={true}
              placeholder="blur"
            />
            <Image
              src={transport2}
              alt="my image"
              width={700}
              height={500}
              className="min-w-full  h-[250px] sm:h-[400px] object-contain"
              priority={true}
              placeholder="blur"
            />
            <Image
              src={transport3}
              alt="my image"
              width={700}
              height={500}
              className="min-w-full  h-[250px] sm:h-[400px] object-contain"
              priority={true}
              placeholder="blur"
            />
          </div>
          <div
            id="carousel-nav-container"
            className={`absolute inset-0  flex justify-between  `}
          >
            <div
              className="px-2 flex justify-center items-center cursor-pointer"
              onClick={handlePrev}
            >
              <button className="  ">
                <IoIosArrowBack size={34} className="text-white " />
              </button>
            </div>

            <div
              className="px-2 flex justify-center items-center cursor-pointer"
              onClick={handleNext}
            >
              <button className="  ">
                <IoIosArrowForward size={34} className="text-white " />
              </button>
            </div>
          </div>
        </div>
        <div className="w-full  flex justify-between items-center ">
          {/* //{--------------Images Numbers-------------- */}
          <p className=" no-wrap font-sans text-sm p-2 text-gray-100  ">
            Image {currentSlideIndex + 1} of {totalSlidesNum}
          </p>
        </div>
      </div>
    </>
  );
}
