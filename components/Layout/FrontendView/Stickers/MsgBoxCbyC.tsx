/*** nextjs ***/
"use client";

/*** fonts ***/
import { Poppins } from "next/font/google";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
    },
  }),
};

export default function MsgBoxCbyC() {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const currentMessage = messages[currentMessageIndex].message;

  return (
    <div
      className={`p-4 bg-yellow-400 text-black w-full  ||  flex justify-center items-center`}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentMessageIndex}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={{}}
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
