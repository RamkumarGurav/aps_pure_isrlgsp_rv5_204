"use client";

import { useRef, useState } from "react";
import ContactForm from "./ContactForm";

/*** fonts ***/
import { Inter } from "next/font/google";
const font = Inter({ weight: "400", subsets: ["latin"], display: "swap" });

/*****************************************************
           Component
*****************************************************/
export default function SideEnquire({
  admissionYear,
}: {
  admissionYear: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`  text-sm text-white bg-yellow-muted font-semibold relative z-[999]`}
    >
      <div
        className={` visible fixed bottom-0 left-0 right-0 w-full sm:hidden  `}
      >
        <div
          className="flex justify-center items-center gap-1 bg-[#e92226] text-white p-4 py-2 cursor-pointer"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <span
            className={` font-sans !font-[500] py-1 text-sm  text-white   ||  grid place-content-center  `}
          >
            Admissions Open {admissionYear}
          </span>
        </div>
      </div>

      <div
        className={`font-sans !font-[500] text-sm    h-[40px] px-4  text-white || hidden sm:flex justify-center items-center   
        || fixed  right-[-84px] top-[245px] transform rotate-[-90deg]
         bg-red-600 t  cursor-pointer  `}
        onClick={() => {
          setOpen(!open);
        }}
      >
        Admissions Open {admissionYear}
      </div>

      <div
        className={`fixed ${
          open ? "right-0 sm:right-[0px]" : "right-[-100vw] sm:right-[-300px]"
        } top-0 sm:top-[110px] w-[100vw] h-[100vh]  border border-gray-200 border-t-0   sm:h-auto sm:w-[300px] sm:flex transition-all ease-in-out duration-700 z-[999]  bg-white shadow`}
      >
        <div className="relative  w-full flex flex-col p-[25px]">
          <div className="gap-2 flex flex-col ">
            <div
              className="absolute top-0 right-0 bg-[#E92226] text-white w-[30px] h-[30px] flex items-center justify-center cursor-pointer"
              onClick={() => {
                setOpen(!open);
              }}
            >
              X
            </div>
            <h1 className="text-lg text-center text-gray-900 font-semibold">
              Enquire With Us
            </h1>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
