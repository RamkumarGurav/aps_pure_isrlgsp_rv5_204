"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Nunito } from "next/font/google";
const font = Nunito({ weight: "400", subsets: ["latin"], display: "swap" });

export default function MovingMessage({
  message,
  classes,
}: {
  message: string;
  classes: string;
}) {
  return (
    <div
      style={{ overflow: "hidden", whiteSpace: "nowrap", width: "100%" }}
      className={`overflow-hidden w-full px-4 xl:px-[86px]  ||  flex  items-center  ||  h-[35.5px]  ${classes}`}
    >
      <div
        style={{ overflow: "hidden", whiteSpace: "nowrap", width: "100%" }}
        className="overflow-hidden w-full  relative"
      >
        <motion.div
          className=" mx-auto"
          initial={{ x: "100vw", opacity: 1 }}
          animate={{ x: "-200px", opacity: 1 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          style={{ display: "inline-block" }}
        >
          <span className={`font-normal font-sans ${font.className} `}>
            {" "}
            {message}
          </span>
        </motion.div>
      </div>
    </div>
  );
}
