/*** images ***/
import { Poppins } from "next/font/google";
const font = Poppins({ weight: "400", subsets: ["latin"] });
/*** components ***/
import AnimatedDiv from "@/components/Animated/AnimatedDiv";
import AnimatedTitle from "@/components/Animated/AnimatedDiv";
import {
  springAnimate70pxFromBelow10,
  tweenAnimateFromLeft10,
} from "@/lib/helpers/variants";
import AnimatedTd from "@/components/Animated/AnimatedTd";
import AnimatedTh from "@/components/Animated/AnimatedTh";
import Bedcrumb from "@/components/Breadcrumbs/Bedcrum";
import { schoolTimingsDetails } from "@/lib/helpers/displayData";
import HeadingP from "@/components/Headings/HeadingP";

export default function STPageName() {
  return (
    <div className={`${font.className}  bg-[#FDFBF0] overflow-hidden`}>
      <Bedcrumb heading="Academics" pageName1="School Timings" />

      <section
        className={` py-[35px] sm:py-[50px] sm:px-[35px] xl:px-[70px]   `}
      >
        <div className={`overflow-hidden  ||  p-4 mx-auto   `}>
          <HeadingP first="School" second="Timings" boldness="!font-bold" />
          <div className="grid md:grid-cols-2 gap-8 mt-2 px-4">
            <div className="leftBox">
              <AnimatedDiv
                variants={tweenAnimateFromLeft10}
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{ once: true, amount: 0 }}
              >
                <h2
                  className={`text-lg md:text-[27px] text-start !font-semibold  leading-8  text-gray-800 mb-3  || ${font.className} 
                 `}
                >
                  {schoolTimingsDetails.mondayToFridayTimingsData.mainHeading}
                </h2>
                <div className="w-[50px] border-b-[2px] border-red-700 mb-2">
                  <span></span>
                </div>
              </AnimatedDiv>

              <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                      <table className="min-w-full border border-neutral-200 text-center text-sm font-light text-surface dark:border-white/10 dark:text-white">
                        <thead className="border-b text-gray-700 font-sans border-neutral-200  bg-gray-50 dark:border-white/10">
                          <tr>
                            <th
                              scope="col"
                              className="font-sans font-medium || border-e  border-neutral-200 px-6 py-4 dark:border-white/10"
                            >
                              TIMINGS
                            </th>
                            <th
                              scope="col"
                              className="font-sans font-medium  || border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                            >
                              PERIOD
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {schoolTimingsDetails.mondayToFridayTimingsData.list1.map(
                            (item: { [key: string]: any }, i: number) => (
                              <tr
                                key={i}
                                className={`border-b  ${
                                  (i + 2) % 2 == 1 ? "bg-gray-50" : ""
                                } border-neutral-200 dark:border-white/10`}
                              >
                                <td
                                  className="whitespace-nowrap border-e border-neutral-200 px-6 py-4  || 
                                font-sans text-gray-700 font-normal ||  dark:border-white/10"
                                >
                                  {item.timing}
                                </td>
                                <td
                                  className="whitespace-nowrap border-e border-neutral-200 px-6 py-4   
                                 ||  font-sans text-gray-700 font-normal || dark:border-white/10"
                                >
                                  {item.period}
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
            <div className="rightBox">
              <AnimatedDiv
                variants={tweenAnimateFromLeft10}
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{ once: true, amount: 0 }}
              >
                <h2
                  className={`text-lg md:text-[27px] text-start !font-semibold  leading-8  text-gray-800 mb-3  || ${font.className} 
                 `}
                >
                  {schoolTimingsDetails.saturdayTimingsData.mainHeading}
                </h2>
                <div className="w-[50px] border-b-[2px] border-red-700 mb-2">
                  <span></span>
                </div>
              </AnimatedDiv>

              <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                      <table className="min-w-full border border-neutral-200 text-center text-sm font-light text-surface dark:border-white/10 dark:text-white">
                        <thead className="border-b text-gray-700 font-sans border-neutral-200  bg-gray-50 dark:border-white/10">
                          <tr>
                            <th
                              scope="col"
                              className="font-sans font-medium || border-e  border-neutral-200 px-6 py-4 dark:border-white/10"
                            >
                              TIMINGS
                            </th>
                            <th
                              scope="col"
                              className="font-sans font-medium  || border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                            >
                              PERIOD
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {schoolTimingsDetails.saturdayTimingsData.list1.map(
                            (item: { [key: string]: any }, i: number) => (
                              <tr
                                key={i}
                                className={`border-b  ${
                                  (i + 2) % 2 == 1 ? "bg-gray-50" : ""
                                } border-neutral-200 dark:border-white/10`}
                              >
                                <td
                                  className="whitespace-nowrap border-e border-neutral-200 px-6 py-4  || 
                                font-sans text-gray-700 font-normal ||  dark:border-white/10"
                                >
                                  {item.timing}
                                </td>
                                <td
                                  className="whitespace-nowrap border-e border-neutral-200 px-6 py-4   
                                 ||  font-sans text-gray-700 font-normal || dark:border-white/10"
                                >
                                  {item.period}
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
        </div>
      </section>
    </div>
  );
}
