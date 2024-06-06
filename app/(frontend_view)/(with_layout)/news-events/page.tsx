/*** fonts ***/
import { Open_Sans } from "next/font/google";
const font = Open_Sans({ weight: "400", subsets: ["latin"], display: "swap" });
/*** components ***/
import { eventsDetails } from "@/lib/helpers/displayData";
import { springAnimate70pxFromBelow10 } from "@/lib/helpers/variants";
import AnimatedDiv from "@/components/Animated/AnimatedDiv";
import Bedcrumb from "@/components/Breadcrumbs/Bedcrum";
import HeadingP from "@/components/Headings/HeadingP";

export default function NEPageName() {
  return (
    <div className={`${font.className}  bg-[#FDFBF0] overflow-hidden`}>
      <Bedcrumb heading="News and Events" pageName1="News and Events" />

      <section className={` py-[35px] sm:py-[50px] px-4 xl:px-[86px]   `}>
        <div className={`  mx-auto   `}>
          <HeadingP
            first={eventsDetails.mainHeadingList[0]}
            second={eventsDetails.mainHeadingList[1]}
            boldness="!font-bold"
          />

          <div className="">
            <div className="flex flex-col">
              <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full  py-2 sm:px-6 lg:px-8">
                  <div className="overflow-hidden">
                    <table className="min-w-full lg:w-[800px] border border-neutral-200  text-sm font-light text-surface dark:border-white/10 dark:text-white">
                      <tbody>
                        {/* //{--------------TERM-I-------------- */}
                        <tr
                          className={`border-b bg-gray-50
                               border-neutral-200  table-`}
                        >
                          <td
                            colSpan={4}
                            className="pt-2 pb-4 px-4 font-sans font-semibold text-gray-700"
                          >
                            <p>TERM-I</p>
                          </td>
                        </tr>
                        <tr
                          className={`border-b  
                               border-neutral-200 `}
                        >
                          <td className="whitespace-nowrap border-e font-sans font-semibold text-gray-700 border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                            SL.NO.
                          </td>
                          <td className="whitespace-nowrap border-e font-sans font-semibold text-gray-700 border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                            DATE
                          </td>
                          <td className="whitespace-nowrap border-e font-sans font-semibold text-gray-700 border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                            DAY
                          </td>
                          <td className="whitespace-nowrap border-e font-sans font-semibold text-gray-700 border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                            EVENT
                          </td>
                        </tr>
                        {/* //{--------------MAY-------------- */}
                        <tr
                          className={`border-b   bg-gray-50
                               border-neutral-200 `}
                        >
                          <td
                            colSpan={4}
                            className="pt-2 pb-4 px-4 font-sans font-semibold text-gray-700"
                          >
                            <p>MAY</p>
                          </td>
                        </tr>
                        {eventsDetails.term1.may.events.map(
                          (item: { [key: string]: any }, i: number) => (
                            <tr
                              key={i}
                              className={`border-b  
                               border-neutral-200   ${
                                 (i + 2) % 2 == 1 ? "bg-gray-50" : ""
                               } `}
                            >
                              <td className="whitespace-nowrap border-e font-sans font-semibold text-gray-700 border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                                {item.slno}
                              </td>
                              <td className="uppercase whitespace-nowrap border-e font-sans font-semibold text-gray-700 border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                                {item.date}
                              </td>
                              <td className="uppercase whitespace-nowrap border-e font-sans font-semibold text-gray-700 border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                                {item.day}
                              </td>
                              <td className="whitespace-nowrap border-e font-sans font-semibold text-gray-700 min-w-[500px]  border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                                {item.eventsList.map((e: string, j: number) => (
                                  <p key={j} className="text-wrap ">
                                    {e}
                                  </p>
                                ))}
                              </td>
                            </tr>
                          )
                        )}
                        {/* //--------------------------------------------------} */}
                        {/* //{--------------JUNE-------------- */}
                        <tr
                          className={`border-b   
                               border-neutral-200 `}
                        >
                          <td
                            colSpan={4}
                            className="pt-2 pb-4 px-4 font-sans font-semibold text-gray-700"
                          >
                            <p>JUNE</p>
                          </td>
                        </tr>
                        {eventsDetails.term1.june.events.map(
                          (item: { [key: string]: any }, i: number) => (
                            <tr
                              key={i}
                              className={`border-b  
                               border-neutral-200   ${
                                 (i + 3) % 2 == 1 ? "bg-gray-50" : ""
                               } `}
                            >
                              <td className="whitespace-nowrap border-e font-sans font-semibold text-gray-700 border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                                {item.slno}
                              </td>
                              <td className="uppercase whitespace-nowrap border-e font-sans font-semibold text-gray-700 border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                                {item.date}
                              </td>
                              <td className="uppercase whitespace-nowrap border-e font-sans font-semibold text-gray-700 border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                                {item.day}
                              </td>
                              <td className="whitespace-nowrap border-e font-sans font-semibold text-gray-700 min-w-[500px]  border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                                {item.eventsList.map((e: string, j: number) => (
                                  <p key={j} className="text-wrap ">
                                    {e}
                                  </p>
                                ))}
                              </td>
                            </tr>
                          )
                        )}
                        {/* //--------------------------------------------------} */}
                        {/* //{--------------JULY-------------- */}
                        <tr
                          className={`border-b   
                               border-neutral-200 `}
                        >
                          <td
                            colSpan={4}
                            className="pt-2 pb-4 px-4 font-sans font-semibold text-gray-700"
                          >
                            <p>JULY</p>
                          </td>
                        </tr>
                        {eventsDetails.term1.july.events.map(
                          (item: { [key: string]: any }, i: number) => (
                            <tr
                              key={i}
                              className={`border-b  
                               border-neutral-200   ${
                                 (i + 3) % 2 == 1 ? "bg-gray-50" : ""
                               } `}
                            >
                              <td className="whitespace-nowrap border-e font-sans font-semibold text-gray-700 border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                                {item.slno}
                              </td>
                              <td className="uppercase whitespace-nowrap border-e font-sans font-semibold text-gray-700 border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                                {item.date}
                              </td>
                              <td className="uppercase whitespace-nowrap border-e font-sans font-semibold text-gray-700 border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                                {item.day}
                              </td>
                              <td className="whitespace-nowrap border-e font-sans font-semibold text-gray-700 min-w-[500px]  border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                                {item.eventsList.map((e: string, j: number) => (
                                  <p key={j} className="text-wrap ">
                                    {e}
                                  </p>
                                ))}
                              </td>
                            </tr>
                          )
                        )}
                        {/* //--------------------------------------------------} */}
                        {/* //{--------------AUGUST-------------- */}
                        <tr
                          className={`border-b   
                               border-neutral-200 `}
                        >
                          <td
                            colSpan={4}
                            className="pt-2 pb-4 px-4 font-sans font-semibold text-gray-700"
                          >
                            <p>AUGUST</p>
                          </td>
                        </tr>
                        {eventsDetails.term1.august.events.map(
                          (item: { [key: string]: any }, i: number) => (
                            <tr
                              key={i}
                              className={`border-b  
                               border-neutral-200   ${
                                 (i + 3) % 2 == 1 ? "bg-gray-50" : ""
                               } `}
                            >
                              <td className="whitespace-nowrap border-e font-sans font-semibold text-gray-700 border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                                {item.slno}
                              </td>
                              <td className="uppercase whitespace-nowrap border-e font-sans font-semibold text-gray-700 border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                                {item.date}
                              </td>
                              <td className="uppercase whitespace-nowrap border-e font-sans font-semibold text-gray-700 border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                                {item.day}
                              </td>
                              <td className="whitespace-nowrap border-e font-sans font-semibold text-gray-700 min-w-[500px]  border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                                {item.eventsList.map((e: string, j: number) => (
                                  <p key={j} className="text-wrap ">
                                    {e}
                                  </p>
                                ))}
                              </td>
                            </tr>
                          )
                        )}
                        {/* //--------------------------------------------------} */}
                        {/* //{--------------SEPTEMBER-------------- */}
                        <tr
                          className={`border-b   bg-gray-50
                               border-neutral-200 `}
                        >
                          <td
                            colSpan={4}
                            className="pt-2 pb-4 px-4 font-sans font-semibold text-gray-700"
                          >
                            <p>SEPTEMBER</p>
                          </td>
                        </tr>
                        {eventsDetails.term1.september.events.map(
                          (item: { [key: string]: any }, i: number) => (
                            <tr
                              key={i}
                              className={`border-b  
                               border-neutral-200   ${
                                 (i + 2) % 2 == 1 ? "bg-gray-50" : ""
                               } `}
                            >
                              <td className="whitespace-nowrap border-e font-sans font-semibold text-gray-700 border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                                {item.slno}
                              </td>
                              <td className="uppercase whitespace-nowrap border-e font-sans font-semibold text-gray-700 border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                                {item.date}
                              </td>
                              <td className="uppercase whitespace-nowrap border-e font-sans font-semibold text-gray-700 border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                                {item.day}
                              </td>
                              <td className="whitespace-nowrap border-e font-sans font-semibold text-gray-700 min-w-[500px]  border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                                {item.eventsList.map((e: string, j: number) => (
                                  <p key={j} className="text-wrap ">
                                    {e}
                                  </p>
                                ))}
                              </td>
                            </tr>
                          )
                        )}
                        {/* //--------------------------------------------------} */}
                        {/* //{--------------OCTOBER-------------- */}
                        <tr
                          className={`border-b   bg-gray-50
                               border-neutral-200 `}
                        >
                          <td
                            colSpan={4}
                            className="pt-2 pb-4 px-4 font-sans font-semibold text-gray-700"
                          >
                            <p>OCTOBER</p>
                          </td>
                        </tr>
                        {eventsDetails.term1.october.events.map(
                          (item: { [key: string]: any }, i: number) => (
                            <tr
                              key={i}
                              className={`border-b  
                               border-neutral-200   ${
                                 (i + 2) % 2 == 1 ? "bg-gray-50" : ""
                               } `}
                            >
                              <td className="whitespace-nowrap border-e font-sans font-semibold text-gray-700 border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                                {item.slno}
                              </td>
                              <td className="uppercase whitespace-nowrap border-e font-sans font-semibold text-gray-700 border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                                {item.date}
                              </td>
                              <td className="uppercase whitespace-nowrap border-e font-sans font-semibold text-gray-700 border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                                {item.day}
                              </td>
                              <td className="whitespace-nowrap border-e font-sans font-semibold text-gray-700 min-w-[500px]  border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                                {item.eventsList.map((e: string, j: number) => (
                                  <p key={j} className="text-wrap ">
                                    {e}
                                  </p>
                                ))}
                              </td>
                            </tr>
                          )
                        )}
                        {/* //--------------------------------------------------} */}
                        <tr
                          className={`border-b 
                               border-neutral-200  table-`}
                        >
                          <td
                            colSpan={4}
                            className="pt-2 pb-4 px-4 font-sans font-semibold text-gray-700"
                          >
                            <p>TERM-II</p>
                          </td>
                        </tr>
                        {/* //{---------------TERM2-------------- */}
                        <tr
                          className={`border-b  bg-gray-50
                               border-neutral-200 `}
                        >
                          <td className="whitespace-nowrap border-e font-sans font-semibold text-gray-700 border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                            SL.NO.
                          </td>
                          <td className="whitespace-nowrap border-e font-sans font-semibold text-gray-700 border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                            DATE
                          </td>
                          <td className="whitespace-nowrap border-e font-sans font-semibold text-gray-700 border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                            DAY
                          </td>
                          <td className="whitespace-nowrap border-e font-sans font-semibold text-gray-700 border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                            EVENT
                          </td>
                        </tr>
                        {/* //{--------------OCTOBER-------------- */}
                        <tr
                          className={`border-b   
                               border-neutral-200 `}
                        >
                          <td
                            colSpan={4}
                            className="pt-2 pb-4 px-4 font-sans font-semibold text-gray-700"
                          >
                            <p>MAY</p>
                          </td>
                        </tr>
                        {eventsDetails.term2.october.events.map(
                          (item: { [key: string]: any }, i: number) => (
                            <tr
                              key={i}
                              className={`border-b  
                               border-neutral-200   ${
                                 (i + 3) % 2 == 1 ? "bg-gray-50" : ""
                               } `}
                            >
                              <td className="whitespace-nowrap border-e font-sans font-semibold text-gray-700 border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                                {item.slno}
                              </td>
                              <td className="uppercase whitespace-nowrap border-e font-sans font-semibold text-gray-700 border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                                {item.date}
                              </td>
                              <td className="uppercase whitespace-nowrap border-e font-sans font-semibold text-gray-700 border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                                {item.day}
                              </td>
                              <td className="whitespace-nowrap border-e font-sans font-semibold text-gray-700 min-w-[500px]  border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                                {item.eventsList.map((e: string, j: number) => (
                                  <p key={j} className="text-wrap ">
                                    {e}
                                  </p>
                                ))}
                              </td>
                            </tr>
                          )
                        )}
                        {/* //--------------------------------------------------} */}
                        {/* //{--------------NOVEMBER-------------- */}
                        <tr
                          className={`border-b   bg-gray-50
                               border-neutral-200 `}
                        >
                          <td
                            colSpan={4}
                            className="pt-2 pb-4 px-4 font-sans font-semibold text-gray-700"
                          >
                            <p>NOVEMBER</p>
                          </td>
                        </tr>
                        {eventsDetails.term2.november.events.map(
                          (item: { [key: string]: any }, i: number) => (
                            <tr
                              key={i}
                              className={`border-b  
                               border-neutral-200   ${
                                 (i + 2) % 2 == 1 ? "bg-gray-50" : ""
                               } `}
                            >
                              <td className="whitespace-nowrap border-e font-sans font-semibold text-gray-700 border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                                {item.slno}
                              </td>
                              <td className="uppercase whitespace-nowrap border-e font-sans font-semibold text-gray-700 border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                                {item.date}
                              </td>
                              <td className="uppercase whitespace-nowrap border-e font-sans font-semibold text-gray-700 border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                                {item.day}
                              </td>
                              <td className="whitespace-nowrap border-e font-sans font-semibold text-gray-700 min-w-[500px]  border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                                {item.eventsList.map((e: string, j: number) => (
                                  <p key={j} className="text-wrap ">
                                    {e}
                                  </p>
                                ))}
                              </td>
                            </tr>
                          )
                        )}
                        {/* //--------------------------------------------------} */}
                        {/* //{--------------DECEMBER-------------- */}
                        <tr
                          className={`border-b   
                               border-neutral-200 `}
                        >
                          <td
                            colSpan={4}
                            className="pt-2 pb-4 px-4 font-sans font-semibold text-gray-700"
                          >
                            <p>DECEMBER</p>
                          </td>
                        </tr>
                        {eventsDetails.term2.december.events.map(
                          (item: { [key: string]: any }, i: number) => (
                            <tr
                              key={i}
                              className={`border-b  
                               border-neutral-200   ${
                                 (i + 3) % 2 == 1 ? "bg-gray-50" : ""
                               } `}
                            >
                              <td className="whitespace-nowrap border-e font-sans font-semibold text-gray-700 border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                                {item.slno}
                              </td>
                              <td className="uppercase whitespace-nowrap border-e font-sans font-semibold text-gray-700 border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                                {item.date}
                              </td>
                              <td className="uppercase whitespace-nowrap border-e font-sans font-semibold text-gray-700 border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                                {item.day}
                              </td>
                              <td className="whitespace-nowrap border-e font-sans font-semibold text-gray-700 min-w-[500px]  border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                                {item.eventsList.map((e: string, j: number) => (
                                  <p key={j} className="text-wrap ">
                                    {e}
                                  </p>
                                ))}
                              </td>
                            </tr>
                          )
                        )}
                        {/* //--------------------------------------------------} */}
                        {/* //{--------------JANUARY-------------- */}
                        <tr
                          className={`border-b   
                               border-neutral-200 `}
                        >
                          <td
                            colSpan={4}
                            className="pt-2 pb-4 px-4 font-sans font-semibold text-gray-700"
                          >
                            <p>JANUARY</p>
                          </td>
                        </tr>
                        {eventsDetails.term2.january.events.map(
                          (item: { [key: string]: any }, i: number) => (
                            <tr
                              key={i}
                              className={`border-b  
                               border-neutral-200   ${
                                 (i + 3) % 2 == 1 ? "bg-gray-50" : ""
                               } `}
                            >
                              <td className="whitespace-nowrap border-e font-sans font-semibold text-gray-700 border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                                {item.slno}
                              </td>
                              <td className="uppercase whitespace-nowrap border-e font-sans font-semibold text-gray-700 border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                                {item.date}
                              </td>
                              <td className="uppercase whitespace-nowrap border-e font-sans font-semibold text-gray-700 border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                                {item.day}
                              </td>
                              <td className="whitespace-nowrap border-e font-sans font-semibold text-gray-700 min-w-[500px]  border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                                {item.eventsList.map((e: string, j: number) => (
                                  <p key={j} className="text-wrap ">
                                    {e}
                                  </p>
                                ))}
                              </td>
                            </tr>
                          )
                        )}
                        <tr
                          className={`border-b   bg-gray-50
                               border-neutral-200 `}
                        >
                          <td
                            colSpan={2}
                            className="whitespace-nowrap border-e font-sans font-semibold text-gray-700 border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4"
                          >
                            <p className="text-wrap ">
                              {String(
                                eventsDetails.term2.january.specialEvents[0]
                                  .oneToTwo
                              )}
                            </p>
                          </td>
                          <td
                            colSpan={2}
                            className="whitespace-nowrap border-e font-sans font-semibold text-gray-700 border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4"
                          >
                            <p className="text-wrap ">
                              {String(
                                eventsDetails.term2.january.specialEvents[0]
                                  .threToFour
                              )}
                            </p>
                          </td>
                        </tr>
                        {/* //--------------------------------------------------} */}
                        {/* //{-------------FEBRUARY--------------- */}
                        <tr
                          className={`border-b   
                               border-neutral-200 `}
                        >
                          <td
                            colSpan={4}
                            className="pt-2 pb-4 px-4 font-sans font-semibold text-gray-700"
                          >
                            <p>FEBRUARY</p>
                          </td>
                        </tr>
                        {eventsDetails.term2.february.events.map(
                          (item: { [key: string]: any }, i: number) => (
                            <tr
                              key={i}
                              className={`border-b  
                               border-neutral-200   ${
                                 (i + 3) % 2 == 1 ? "bg-gray-50" : ""
                               } `}
                            >
                              <td className="whitespace-nowrap border-e font-sans font-semibold text-gray-700 border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                                {item.slno}
                              </td>
                              <td className="uppercase whitespace-nowrap border-e font-sans font-semibold text-gray-700 border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                                {item.date}
                              </td>
                              <td className="uppercase whitespace-nowrap border-e font-sans font-semibold text-gray-700 border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                                {item.day}
                              </td>
                              <td className="whitespace-nowrap border-e font-sans font-semibold text-gray-700 min-w-[500px]  border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                                {item.eventsList.map((e: string, j: number) => (
                                  <p key={j} className="text-wrap ">
                                    {e}
                                  </p>
                                ))}
                              </td>
                            </tr>
                          )
                        )}
                        {/* //--------------------------------------------------} */}
                        {/* //{-------------MARCH--------------- */}
                        <tr
                          className={`border-b   bg-gray-50
                               border-neutral-200 `}
                        >
                          <td
                            colSpan={4}
                            className="pt-2 pb-4 px-4 font-sans font-semibold text-gray-700"
                          >
                            <p>MARCH</p>
                          </td>
                        </tr>
                        {eventsDetails.term2.march.events.map(
                          (item: { [key: string]: any }, i: number) => (
                            <tr
                              key={i}
                              className={`border-b  
                               border-neutral-200   ${
                                 (i + 2) % 2 == 1 ? "bg-gray-50" : ""
                               } `}
                            >
                              <td className="whitespace-nowrap border-e font-sans font-semibold text-gray-700 border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                                {item.slno}
                              </td>
                              <td className="uppercase whitespace-nowrap border-e font-sans font-semibold text-gray-700 border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                                {item.date}
                              </td>
                              <td className="uppercase whitespace-nowrap border-e font-sans font-semibold text-gray-700 border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                                {item.day}
                              </td>
                              <td className="whitespace-nowrap border-e font-sans font-semibold text-gray-700 min-w-[500px]  border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                                {item.eventsList.map((e: string, j: number) => (
                                  <p key={j} className="text-wrap ">
                                    {e}
                                  </p>
                                ))}
                              </td>
                            </tr>
                          )
                        )}
                        {/* //--------------------------------------------------} */}
                        {/* //{-------------APRIL--------------- */}
                        <tr
                          className={`border-b bg-gray-50  
                               border-neutral-200 `}
                        >
                          <td
                            colSpan={4}
                            className="pt-2 pb-4 px-4 font-sans font-semibold text-gray-700"
                          >
                            <p>APRIL</p>
                          </td>
                        </tr>
                        {eventsDetails.term2.april.events.map(
                          (item: { [key: string]: any }, i: number) => (
                            <tr
                              key={i}
                              className={`border-b  
                               border-neutral-200   ${
                                 (i + 2) % 2 == 1 ? "bg-gray-50" : ""
                               } `}
                            >
                              <td className="whitespace-nowrap border-e font-sans font-semibold text-gray-700 border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                                {item.slno}
                              </td>
                              <td className="uppercase whitespace-nowrap border-e font-sans font-semibold text-gray-700 border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                                {item.date}
                              </td>
                              <td className="uppercase whitespace-nowrap border-e font-sans font-semibold text-gray-700 border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                                {item.day}
                              </td>
                              <td className="whitespace-nowrap border-e font-sans font-semibold text-gray-700 min-w-[500px]  border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                                {item.eventsList.map((e: string, j: number) => (
                                  <p key={j} className="text-wrap ">
                                    {e}
                                  </p>
                                ))}
                              </td>
                            </tr>
                          )
                        )}
                        {/* //--------------------------------------------------} */}{" "}
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
