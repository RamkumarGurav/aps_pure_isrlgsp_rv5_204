/*** nextjs ***/
"use client";

/*** fonts ***/
import { Poppins } from "next/font/google";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  springAnimate30pxFromAbove10,
  springAnimate70pxFromAbove10,
  tweenAnimateFromLeft10,
} from "@/lib/helpers/variants";
const font = Poppins({ weight: "400", subsets: ["latin"], display: "swap" });

/*** components ***/
/*** packages ***/
/*****************************************************
      component
 ****************************************************/

const messages = [
  { message: "HI, Welcome to our website" },
  { message: "Click on the Explore Button" },
  { message: "Feel free to ask questions" },
];

const characterAnimation = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.1,
    },
  }),
};

export default function MsgBoxCbyCFromAbove() {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const currentMessage = messages[currentMessageIndex].message;

  return (
    <div
      className={`overflow-hidden  || min-h-[50px]  bg-yellow-400 text-black w-full  ||  flex justify-center items-center`}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentMessageIndex}
          initial="offscreen"
          animate="onscreen"
          exit="offscreen"
          variants={springAnimate30pxFromAbove10}
          className="inline-block"
        >
          {currentMessage.split("").map((char, index) => (
            <motion.span
              key={index}
              custom={index}
              variants={characterAnimation}
              initial="hidden"
              animate="visible"
            >
              {char}
            </motion.span>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/*****************************************************
           other
*****************************************************/
