/*** nextjs ***/
"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const messages = [
  { message: "HI, Welcome to our website" },
  { message: "Click on the Explore Button" },
  { message: "Feel free to ask questions" },
];

const characterAnimation = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.05,
      type: "spring",
      stiffness: 100,
    },
  },
};

export default function MsgBoxCbyC2() {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [displayedMessage, setDisplayedMessage] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const message = messages[currentMessageIndex].message;
    setDisplayedMessage(""); // Reset displayedMessage before starting the animation

    let index = 0;
    const interval = setInterval(() => {
      setDisplayedMessage((prev) => prev + message[index]);
      ++index;
      if (index === message.length) clearInterval(interval);
    }, 70);

    return () => clearInterval(interval);
  }, [currentMessageIndex]);

  return (
    <div className="overflow-hidden min-h-[50px] bg-yellow-400 text-black w-full flex justify-center items-center">
      <motion.p
        key={currentMessageIndex}
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={characterAnimation}
        className="inline-block"
      >
        {displayedMessage}
      </motion.p>
    </div>
  );
}
