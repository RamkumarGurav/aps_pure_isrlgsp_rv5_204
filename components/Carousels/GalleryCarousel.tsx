"use client";
import Image from "next/image";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { defaultBlurDataUrl } from "@/lib/helpers/displayData";
export default function GalleryCarousel({
  children,
  slides,
  autoPlay = false,
  interval = 3000,
  currentIndex,
}: {
  children: React.ReactNode;
  slides: any;
  autoPlay?: boolean;
  interval?: number;
  currentIndex: number;
}) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(currentIndex || 0);
  const totalSlidesNum = slides.length;

  const handleNext = useCallback(() => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex === totalSlidesNum - 1 ? 0 : prevIndex + 1
    );
  }, [totalSlidesNum]);

  const handlePrev = useCallback(() => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex === 0 ? totalSlidesNum - 1 : prevIndex - 1
    );
  }, [totalSlidesNum]);

  useEffect(() => {
    if (!autoPlay) return;

    const intervalId = setInterval(() => handleNext(), interval);

    return () => clearInterval(intervalId);
  }, [autoPlay, interval, handleNext]);

  const variants = {
    enter: { opacity: 1, transition: { duration: 1 } },
    exit: { opacity: 0, transition: { duration: 1 } },
  };

  return (
    <>
      <div className="overflow-hidden relative max-w-[500px] bg-white border-solid border-4 border-gray-100 shadow-2xl rounded-lg">
        <motion.div
          key={currentSlideIndex}
          variants={variants}
          initial="exit"
          animate="enter"
          exit="exit"
        >
          <Image
            src={slides[currentSlideIndex].imageUrl}
            className=" w-auto max-h-[300px] sm:max-h-[500px] object-contain"
            alt="Image"
            width={700}
            height={500}
            placeholder="blur"
            blurDataURL={defaultBlurDataUrl}
            priority={true}
          />
        </motion.div>

        <div className="absolute inset-0 flex justify-between">
          <div
            className="px-2 flex justify-center items-center cursor-pointer"
            onClick={handlePrev}
          >
            <button className="">
              <GrFormPrevious size={44} className="text-white" />
            </button>
          </div>
          <div
            className="px-2 flex justify-center items-center cursor-pointer"
            onClick={handleNext}
          >
            <button className="">
              <MdNavigateNext size={44} className="text-white" />
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[-35px] left-0">
        <p className="no-wrap font-sans text-xs p-2 text-gray-100">
          Image {currentSlideIndex + 1} of {totalSlidesNum}
        </p>
      </div>
    </>
  );
}
