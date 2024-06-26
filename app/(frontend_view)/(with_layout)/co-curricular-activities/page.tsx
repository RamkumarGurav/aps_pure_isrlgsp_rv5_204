/*** nextjs ***/
import Image from "next/image";
/*** fonts ***/
import { Poppins } from "next/font/google";
const font = Poppins({ weight: "400", subsets: ["latin"], display: "swap" });
/*** icons ***/
import { FaRegHandPointRight } from "react-icons/fa";
/*** images ***/
import knowledgeCenter2 from "@/public/knowledge-center/2.jpg";
/*** components ***/
import { cocurricularActivitiesDetails } from "@/lib/helpers/displayData";
import AnimatedDiv from "@/components/Animated/AnimatedDiv";
import {
  springAnimate70pxFromBelow10,
  tweenAnimateFromRight10,
} from "@/lib/helpers/variants";
import AnimatedText from "@/components/Animated/AnimatedText";
import Bedcrumb from "@/components/Breadcrumbs/Bedcrum";
import HeadingP from "@/components/Headings/HeadingP";
import HDivider from "@/components/Dividers/HDivider";

export default function CCAPageName() {
  return (
    <div className={`${font.className}  bg-[#FDFBF0] overflow-hidden`}>
      <Bedcrumb heading="Academics" pageName1="Co-Curricular Activities" />
      <section className="pt-[35px] sm:pt-[50px] px-4 xl:px-[86px]  ">
        <div className=" ">
          <HeadingP
            first={
              cocurricularActivitiesDetails.cocurricularActivitiesData
                .mainHeading
            }
            fontSize="3xl"
            boldness="!font-bold"
            containerClasses="mb-1"
          />
          <div className="  ">
            <div className=" lg:grid lg:grid-cols-2 ">
              <div className="left">
                <div>
                  <AnimatedText
                    variants={springAnimate70pxFromBelow10}
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    viewport={{ once: true, amount: 0 }}
                    className={`text-base font-semibold font-sans text-gray-900`}
                  >
                    {
                      cocurricularActivitiesDetails.cocurricularActivitiesData
                        .subHeading1
                    }
                  </AnimatedText>
                </div>
                {cocurricularActivitiesDetails.cocurricularActivitiesData.list1.map(
                  (item: string, i: number) => (
                    <AnimatedDiv
                      key={i}
                      initial={{ opacity: 0, x: "20vw" }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: i * 0.1,
                        duration: 1,
                        type: "tween",
                      }}
                      viewport={{ once: true, amount: 0 }}
                      className=" flex gap-2 mb-1"
                    >
                      <span className="flex justify-center items-start pt-2 pb-[1px]">
                        <FaRegHandPointRight className="text-red-800 text-[15px] " />
                      </span>
                      <span className={`text-gray-800 font-sans leading-8`}>
                        {item}
                      </span>
                    </AnimatedDiv>
                  )
                )}

                <AnimatedDiv
                  variants={springAnimate70pxFromBelow10}
                  initial={"offscreen"}
                  whileInView={"onscreen"}
                  viewport={{ once: true, amount: 0 }}
                >
                  <p
                    className={`text-base font-sans my-4 font-medium text-gray-700`}
                  >
                    {
                      cocurricularActivitiesDetails.cocurricularActivitiesData
                        .subHeading2
                    }
                  </p>
                </AnimatedDiv>
              </div>
              <div className="right flex  justify-center items-start pt-0  px-2">
                <div
                  className="p-4 pt-0 
               "
                >
                  <AnimatedDiv
                    variants={tweenAnimateFromRight10}
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    viewport={{ once: true, amount: 0 }}
                    className="flex justify-stretch  p-0 pb-0 "
                  >
                    <div className="   ">
                      <Image
                        src={knowledgeCenter2}
                        alt="knowledgeCenter2 "
                        className="w-full h-auto object-cover "
                        placeholder="blur"
                      />
                    </div>
                    <div className="bg-[#348BC1] inline-block w-[20px] mt-8 mb-4"></div>
                  </AnimatedDiv>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="" className={` sm:px-[35px] xl:px-[86px]`}>
        <HDivider />
      </section>

      <section className={` mb-[40px] px-4 xl:px-[86px]   `}>
        <div className={` p-8 mx-auto bg-[#FAF6E2]  `}>
          <HeadingP
            fontSize="2xl"
            first={
              cocurricularActivitiesDetails.listOfCocurricularActivitiesData
                .mainHeading
            }
            baseColor="red-700"
            baseHeight="2px"
            boldness="!font-bold"
            baseWidth="50px"
          />
          <div className="grid lg:grid-cols-3 p-4 gap-4">
            {cocurricularActivitiesDetails.listOfCocurricularActivitiesData.lists.map(
              (item: any, i: number) => (
                <div key={i} className="box1">
                  <div className="mx-auto ">
                    {item.map((sub: string, j: number) => (
                      <AnimatedDiv
                        initial={{ opacity: 0, x: "20vw" }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: i * 0.1,
                          duration: 1,
                          type: "tween",
                        }}
                        viewport={{ once: true, amount: 0 }}
                        key={j}
                        className=" flex gap-2 mb-1"
                      >
                        <span className="flex justify-center items-start pt-2 pb-[1px]">
                          <FaRegHandPointRight
                            size={15}
                            className="text-red-800 text-[15px] "
                          />
                        </span>
                        <span className={`text-gray-800 font-sans leading-8`}>
                          {sub}
                        </span>
                      </AnimatedDiv>
                    ))}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
