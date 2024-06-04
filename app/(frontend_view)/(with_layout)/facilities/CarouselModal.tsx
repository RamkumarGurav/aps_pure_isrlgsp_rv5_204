"use client";

import Backdrop from "@/components/GalleryDetails/Backdrop";
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
const animateDropIn = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.2,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      type: "tween",
      duration: 0.2,
    },
  },
};

export default function CarouselModal({
  children,
  handleClose,
  modalOpen,
  text,
}: {
  children: React.ReactNode;
  handleClose: () => void;
  modalOpen: boolean;
  text?: string;
}) {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        initial={"offscreen"}
        animate={"onscreen"}
        exit={"exit"}
        variants={animateDropIn}
        className="z-[9999]  relative   m-4  min-w-[200px] min-h-[200px]  rounded-md  flex flex-col items-center "
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute left-[100px] top-[100px] z-[-1] text-white">
          Loading...
        </div>

        <IoMdClose
          size={30}
          onClick={handleClose}
          className="text-gray-100 font-bold rounded-full absolute bottom-[-35px] right-1 cursor-pointer z-[99999]"
        />
        {children}
      </motion.div>
    </Backdrop>
  );
}
