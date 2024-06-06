/*** nextjs ***/
"use client";

/*** fonts ***/
import { Poppins } from "next/font/google";
import { useEffect, useState } from "react";
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

export default function MessageBox2() {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage(messages[messageIndex].message);
      setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [messageIndex]);

  return (
    <div
      className={`p-4 bg-yellow-400 text-black w-full  transition-all duration-300 ease-in-out text-center`}
    >
      {currentMessage}
    </div>
  );
}

/*****************************************************
           other
*****************************************************/
