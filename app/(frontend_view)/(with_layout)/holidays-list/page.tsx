/*** fonts ***/
import { Poppins } from "next/font/google";
const font = Poppins({ weight: "400", subsets: ["latin"] });
/*** components ***/
import { holidayCalendarDetails } from "@/lib/helpers/displayData";
import AnimatedDiv from "@/components/Animated/AnimatedDiv";
import { springAnimate70pxFromBelow10 } from "@/lib/helpers/variants";
import AnimatedTh from "@/components/Animated/AnimatedTh";
import AnimatedTd from "@/components/Animated/AnimatedTd";
import Bedcrumb from "@/components/Breadcrumbs/Bedcrum";
import HeadingP from "@/components/Headings/HeadingP";

export default function HLPageName() {
  return (
    <div className={`${font.className}  bg-[#FDFBF0] overflow-hidden`}>
      <Bedcrumb heading="Academics" pageName1="Holiday's list" />

      <section className={` py-[35px] sm:py-[50px] px-4 xl:px-[70px]   `}>
        <div className={` mx-auto   `}>
          <HeadingP
            first={holidayCalendarDetails.mainHeadingList[0]}
            second={holidayCalendarDetails.mainHeadingList[1]}
            firstTextClasses="!font-bold"
          />
          <div className="">
            <div className="flex flex-col">
              <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full  py-2 sm:px-6 lg:px-8">
                  <div className="overflow-hidden">
                    <table className="min-w-full lg:w-[800px] border border-neutral-200  text-sm font-light text-surface dark:border-white/10 dark:text-white">
                      <thead className="border-b text-gray-800 border-neutral-200  bg-gray-50 dark:border-white/10">
                        <tr>
                          <th
                            className="border-e   border-neutral-200  || font-sans text-gray-700 font-semibold 
                          text-xs sm:text-sm  px-[2px] text-center py-3 dark:border-white/10"
                          >
                            Sl.No
                          </th>
                          <th
                            className="border-e   border-neutral-200  || font-sans text-gray-700 font-semibold 
                           text-xs sm:text-sm   pl-2 text-center py-3 dark:border-white/10"
                          >
                            MONTH AND DATE
                          </th>
                          <th
                            className="border-e   border-neutral-200  || font-sans text-gray-700 font-semibold 
                          text-left text-xs sm:text-sm   pl-2 py-3 dark:border-white/10"
                          >
                            DAY
                          </th>
                          <th
                            className="border-e   border-neutral-200  || font-sans text-gray-700 font-semibold 
                          text-left text-xs sm:text-sm   pl-2 py-3 dark:border-white/10"
                          >
                            EVENT
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {holidayCalendarDetails.holidaysList.map(
                          (item: { [key: string]: any }, i: number) => (
                            <tr
                              key={i}
                              className={`border-b  ${
                                (i + 2) % 2 == 1 ? "bg-gray-50" : ""
                              } border-neutral-200 dark:border-white/10`}
                            >
                              <td
                                className={`whitespace-nowrap border-e border-neutral-200
                               text-xs sm:text-sm  px-[2px] py-2 ${font.className} font-sans font-normal
                                text-gray-800 dark:border-white/10 text-center`}
                              >
                                {i + 1}
                              </td>
                              <td
                                className={`whitespace-nowrap border-e border-neutral-200
                               text-xs sm:text-sm  pl-2 py-3 ${font.className} font-sans font-normal
                                text-gray-800 dark:border-white/10`}
                              >
                                {item.date}
                              </td>
                              <td
                                className={`whitespace-nowrap border-e border-neutral-200
                               text-xs sm:text-sm  pl-2 py-3 ${font.className} font-sans font-normal
                                text-gray-800 dark:border-white/10`}
                              >
                                {item.day}
                              </td>
                              <td
                                className={`whitespace-nowrap border-e border-neutral-200
                               text-xs sm:text-sm  pl-2 py-3 ${font.className} font-sans font-normal
                                text-gray-800 dark:border-white/10`}
                              >
                                {item.event}
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
