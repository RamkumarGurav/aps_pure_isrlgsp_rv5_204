"use client";
import Image from "next/image";
import Logo from "@/public/logo.jpg";
import { useEffect, useRef, useState } from "react";
import { GrFormClose } from "react-icons/gr";
import { FaBars } from "react-icons/fa";
import NavLinks from "./NavLinks";
import Link from "next/link";

/*** fonts ***/
import { Open_Sans } from "next/font/google";
const font = Open_Sans({ weight: "400", subsets: ["latin"], display: "swap" });
/*** packages ***/
import { useQuery } from "@tanstack/react-query";
/*** cmts ***/
import HeaderTop from "./HeaderTop";
import DropDown from "./DropDown";
/*** util functions ***/
async function fetchData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/years`);

  return await res.json();
}
/*****************************************************
           component
*****************************************************/
export default function Navbar({
  yearsData,
  navLinksData,
  contactUs,
}: {
  yearsData: any;
  navLinksData: any;
  contactUs: { [key: string]: any };
}) {
  const [open, setOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const mainNavBarRef = useRef<HTMLDivElement>(null);
  const [navLinkName, setNavLinkName] = useState("");
  const { data, isLoading } = useQuery({
    queryKey: [`years`],
    queryFn: async () => fetchData(),
    initialData: yearsData,
    staleTime: 0,
    refetchOnWindowFocus: true, // Invalidate cache on window focus
  });
  const handleOpen = () => {
    setOpen(!open);
  };

  const handleNavLinkName = (name: string) => {
    setNavLinkName((prevName) => (prevName === name ? "" : name));
  };

  useEffect(() => {
    if (!open) {
      setNavLinkName("");
    }
  }, [open]);

  useEffect(() => {
    if (!mainNavBarRef.current) {
      return;
    }

    const observer = new IntersectionObserver(
      ([event]) => setIsSticky(event.intersectionRatio < 1),
      { threshold: [1], rootMargin: "-1px 0px 0px 0px" }
    );
    observer.observe(mainNavBarRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <HeaderTop contactUs={contactUs} />

      <div
        className={`min-w-[100%] bg-yellow-muted sticky top-[-2px] left-0 right-0 ${
          isSticky
            ? "h-[70.77px] lg:h-[84px] shadow-b"
            : "h-[74.88px] lg:h-[100px]"
        }   
         
        flex items-center text-gray-900 font-serif w-full  h-full px-4 xl:px-[86px] ${
          font.className
        }  
         z-[998]
        `}
        ref={mainNavBarRef}
      >
        <div
          className={`wrapperToMakeZindexWork w-full h-full  bg-yellow-muted   pb-1  
         z-[997]`}
        >
          <div className=" h-full  flex items-center  justify-between    ">
            <Link href="/" className="py-[8px]">
              <Image
                src={Logo}
                alt="logo"
                width={200}
                height={200}
                className={`w-auto object-cover   ${
                  isSticky
                    ? " h-[56px] sm:h-[68px] lg:h-[65px]"
                    : " h-[46px] sm:h-[74px] lg:h-[70px] xl:h-[80px]"
                } transition-all duration-300 ease-in-out`}
                // placeholder="blur"
                priority
              />
            </Link>
            <NavLinks
              navLinks={navLinksData}
              yearsData={data}
              isSticky={isSticky}
            />
            <div className=" w-[50px]  flex items-center justify-center   lg:hidden">
              {!open ? (
                <FaBars
                  size={25}
                  onClick={handleOpen}
                  className="visible lg:hidden cursor-pointer   "
                />
              ) : (
                <GrFormClose
                  size={30}
                  onClick={handleOpen}
                  className="visible lg:hidden cursor-pointer font-bolder  "
                />
              )}
            </div>
          </div>
        </div>

        <DropDown
          open={open}
          navLinkName={navLinkName}
          handleNavLinkName={handleNavLinkName}
          navLinks={navLinksData}
          yearsData={data}
        />
      </div>
    </>
  );
}
