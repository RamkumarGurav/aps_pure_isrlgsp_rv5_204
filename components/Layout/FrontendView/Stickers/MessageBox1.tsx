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
  { message: "HI ,Welcome to our website" },
  { message: "Click on Explore Button" },
  { message: "Feel free to ask questions" },
];
export default function MessageBox1() {
  const [currentMessage, setCurrentMessage] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const index = Math.floor(Math.random() * messages.length);
      setCurrentMessage(messages[index].message);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return <div className={`p-4 bg-yellow-400 text-black w-full`}></div>;
}
/*****************************************************
           other
*****************************************************/
