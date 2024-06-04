"use client";
import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { StaticImageData } from "next/image";
import { defaultBlurDataUrl } from "@/lib/helpers/displayData";
// Import your images here
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

const images: StaticImageData[] = [
  infra1,
  infra2,
  infra3,
  infra4,
  infra5,
  infra6,
  infra7,
  infra8,
  knowledgeCentre1,
  knowledgeCentre2,
  scienceLab1,
  scienceLab2,
  scienceLab3,
  scienceLab4,
  scienceLab5,
  scienceLab6,
  sports1,
  sports2,
  sports3,
  transport1,
  transport2,
  transport3,
];

const Carousel = ({
  autoPlay = false,
  interval = 3000,
  currentIndex,
}: {
  autoPlay?: boolean;
  interval?: number;
  currentIndex: number;
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(currentIndex || 0);
  const totalSlidesNum = images.length;

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
      <div className="overflow-hidden relative max-w-[600px] max-h-[450px] bg-white border-solid border-4 border-gray-100 shadow-2xl rounded-lg">
        <motion.div
          key={currentSlideIndex}
          variants={variants}
          initial="exit"
          animate="enter"
          exit="exit"
        >
          <Image
            src={images[currentSlideIndex]}
            className="w-auto h-auto"
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
};

export default Carousel;
