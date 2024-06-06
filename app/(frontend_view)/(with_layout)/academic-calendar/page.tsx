/*** fonts ***/
import { Open_Sans } from "next/font/google";
const font = Open_Sans({ weight: "400", subsets: ["latin"], display: "swap" });
/*** icons ***/
import { FaRegHandPointRight } from "react-icons/fa";
/*** components ***/
import { academicCalendarDetails } from "@/lib/helpers/displayData";
import { springAnimate70pxFromBelow10 } from "@/lib/helpers/variants";
import Bedcrumb from "@/components/Breadcrumbs/Bedcrum";
import AnimatedDiv from "@/components/Animated/AnimatedDiv";
import AnimatedTd from "@/components/Animated/AnimatedTd";
import AnimatedTh from "@/components/Animated/AnimatedTh";
import HeadingP from "@/components/Headings/HeadingP";

export default function PageName() {
  return (
    <div className={`${font.className}  bg-[#FDFBF0] overflow-hidden`}>
      <Bedcrumb heading="Academics" pageName1="Academic Calender" />

      <section className={` py-[35px] sm:py-[50px] px-4 xl:px-[86px]   `}>
        <div className={` p-4 mx-auto   `}>
          <HeadingP
            first={academicCalendarDetails.mainHeadingList[0]}
            second={academicCalendarDetails.mainHeadingList[1]}
            firstTextClasses="!font-bold"
          />
          <div className="">
            <div className="flex flex-col">
              <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block w-full py-2 sm:px-6 lg:px-8">
                  <div className="overflow-hidden">
                    <table className="w-full lg:w-[800px] border border-neutral-200  text-sm font-light text-surface dark:border-white/10 dark:text-white">
                      <thead className="border-b text-gray-800 border-neutral-200  bg-gray-50 dark:border-white/10">
                        <tr>
                          <th
                            className="border-e   border-neutral-200  || font-sans text-gray-700 font-semibold 
                          text-left text-xs sm:text-sm  pl-2 dark:border-white/10"
                          >
                            Sl.No
                          </th>
                          <th className="border-e border-neutral-200  || font-sans text-gray-700 font-semibold text-left text-xs sm:text-sm pl-2 py-3  dark:border-white/10">
                            MONTH
                          </th>
                          <th className="border-e border-neutral-200  || font-sans text-gray-700 font-semibold text-left text-xs sm:text-sm pl-2 py-3    dark:border-white/10">
                            EVENTS
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {academicCalendarDetails.monthsList.map(
                          (item: { [key: string]: any }, i: number) => (
                            <tr
                              key={i}
                              className={`border-b  ${
                                (i + 2) % 2 == 1 ? "bg-gray-50" : ""
                              } border-neutral-200 dark:border-white/10`}
                            >
                              <td
                                className="whitespace-nowrap border-e border-neutral-200
                               text-xs sm:text-base pl-2 font-sans font-normal text-gray-800 dark:border-white/10"
                              >
                                {i + 1}
                              </td>
                              <td
                                className="whitespace-nowrap border-e border-neutral-200 text-xs sm:text-base
                              
                              font-sans font-normal pl-2 text-gray-800 dark:border-white/10"
                              >
                                {item.month}
                              </td>
                              <td className="whitespace-nowrap border-e border-neutral-200 text-xs sm:text-base pl-2 py-2 dark:border-white/10">
                                {item.eventsList.map(
                                  (event: string, j: number) => (
                                    <div key={j} className=" flex gap-1 mb-1">
                                      <span className="flex justify-center items-center ">
                                        <FaRegHandPointRight className="text-red-800  " />
                                      </span>
                                      <span
                                        className={`text-gray-500 text-wrap   font-sans font-normal   leading-8`}
                                      >
                                        {event}
                                      </span>
                                    </div>
                                  )
                                )}
                              </td>
                            </tr>
                          )
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
