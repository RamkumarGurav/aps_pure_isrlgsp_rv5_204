/*** nextjs ***/
"use client";
/*** fonts ***/
import { Poppins } from "next/font/google";
import { useState } from "react";
const font = Poppins({ weight: "400", subsets: ["latin"], display: "swap" });
/*** components ***/
/*** packages ***/
/*****************************************************
      component
 ****************************************************/
export default function ImageMagnifier({
  url,
  children,
}: {
  url: string;
  children: React.ReactNode;
}) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [showMagnifier, setShowMagnifier] = useState(false);

  const handleMouseHover = (e: any) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setPosition({ x, y });
    setCursorPosition({ x: e.pageX - left, y: e.pageY - top });
  };

  return (
    <div
      className={`image-magnifier-container relative overflow-hidden ${
        showMagnifier ? "cursor-none" : ""
      }`}
      onMouseEnter={() => setShowMagnifier(true)}
      onMouseLeave={() => setShowMagnifier(false)}
      onMouseMove={handleMouseHover}
    >
      {children}
      <div
        style={{
          display: `${showMagnifier ? "flex" : "none"}`,
          position: "absolute",
          left: `${cursorPosition.x - 100}px`,
          top: `${cursorPosition.y - 100}px`,
          pointerEvents: "none",
        }}
      >
        <div
          className={`magnifier-image  || w-[200px] h-[200px] border-2 border-gray-100 shadow-xl `}
          style={{
            backgroundImage: `url(${url})`,
            backgroundPosition: `${position.x}% ${position.y}%`,
          }}
        />
      </div>
    </div>
  );
}
/*****************************************************
           other
*****************************************************/
