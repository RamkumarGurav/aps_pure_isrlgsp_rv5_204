/*** nextjs ***/
import Image from "next/image";
/*** fonts ***/
import { Nunito } from "next/font/google";
const font = Nunito({ weight: "400", subsets: ["latin"] });
/*** images ***/
import knowledgeCenter1 from "@/public/knowledge-center/1.jpg";
/*** icons ***/
import { FaRegHandPointRight } from "react-icons/fa";
/*** components ***/
import { curriculumDetails } from "@/lib/helpers/displayData";
import { springAnimate70pxFromBelow10 } from "@/lib/helpers/variants";
import AnimatedDiv from "@/components/Animated/AnimatedDiv";
import Bedcrumb from "@/components/Breadcrumbs/Bedcrum";
import HeadingP from "@/components/Headings/HeadingP";
import HDivider from "@/components/Dividers/HDivider";

export default function CPageName() {
  return (
    <div className={`  bg-[#FDFBF0] overflow-hidden`}>
      <Bedcrumb heading="Academics" pageName1="Curriculum" />

      <section
        id="curriculumSection"
        className="py-[35px] sm:py-[50px] px-4 xl:px-[70px]  "
      >
        <div className="">
          <HeadingP
            first={curriculumDetails.curriculumData.mainHeading}
            boldness="!font-bold"
          />
          <div className="  pb-4">
            <div className=" lg:grid lg:grid-cols-2  p-0">
              <div className="left">
                {curriculumDetails.curriculumData.list1.map(
                  (item: string, i: number) => (
                    <AnimatedDiv
                      key={i}
                      initial={{ opacity: 0, x: "20vw" }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        type: "tween",
                      }}
                      viewport={{ once: true, amount: 0 }}
                      className=" flex gap-2 mb-1"
                    >
                      <span className="flex justify-center items-center pb-[1px]">
                        <FaRegHandPointRight className="text-red-800 text-[15px] " />
                      </span>
                      <span
                        className={`text-gray-800 font-sans leading-8 ${font.className}`}
                      >
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
                    className={`text-lg my-4 font-semibold  font-sans text-gray-900`}
                  >
                    {curriculumDetails.curriculumData.list2Heading}
                  </p>
                </AnimatedDiv>
                {curriculumDetails.curriculumData.list2.map(
                  (item: string, j: number) => (
                    <AnimatedDiv
                      key={j}
                      initial={{ opacity: 0, x: "20vw" }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: j * 0.1 + 1,
                        type: "tween",
                      }}
                      viewport={{ once: true, amount: 0 }}
                      className=" flex gap-2 mb-1"
                    >
                      <span className="flex justify-center items-center pb-[1px]">
                        <FaRegHandPointRight className="text-red-800 text-[15px] " />
                      </span>
                      <span
                        className={`text-gray-800 font-sans ${font.className} leading-8`}
                      >
                        {item}
                      </span>
                    </AnimatedDiv>
                  )
                )}
              </div>
              <div className="right flex  justify-center items-start pt-0  px-2">
                <div
                  className="p-4 
               "
                >
                  <AnimatedDiv
                    initial={{ opacity: 0, x: "20vw" }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 2, type: "spring" }}
                    viewport={{ once: true, amount: 0 }}
                    className="flex justify-stretch  p-0 pb-0 "
                  >
                    <div className="   ">
                      <Image
                        src={knowledgeCenter1}
                        alt="knowledgeCenter1 "
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
      <section id="" className={` px-4 xl:px-[70px]`}>
        <HDivider classes="!m-0" />
      </section>

      <section className={` py-[35px] sm:py-[50px] px-4 xl:px-[70px]   `}>
        <div className={`  p-8  mx-auto bg-[#FAF6E2] `}>
          <div className="grid lg:grid-cols-3  gap-4">
            {curriculumDetails.classSubjectsData.map(
              (item: { [key: string]: any }, i: number) => (
                <div key={i} className="box1">
                  <div className="mx-auto relative inline-block">
                    <HeadingP
                      containerClasses="inline-block !mb-0"
                      first={item.mainHeading}
                      baseColor="red-700"
                      fontSize="2xl"
                      boldness="!font-bold"
                      baseHeight="2px"
                      baseClasses="!w-[60px]"
                    />
                    {item.list1.map((sub: string, j: number) => (
                      <AnimatedDiv
                        key={j}
                        initial={{ opacity: 0, x: "20vw" }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: j * 0.1 + 1,
                          type: "tween",
                        }}
                        viewport={{ once: true, amount: 0 }}
                        className=" flex gap-2 mb-1"
                      >
                        <span className="flex justify-center items-start pt-2 pb-[1px]">
                          <FaRegHandPointRight className="text-red-800 text-[15px] " />
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

      <section className={` pb-[35px] sm:pb-[50px] px-4 xl:px-[70px] `}>
        <div className={`p-8  mx-auto bg-[#FAF6E2]`}>
          <div className="mx-auto ">
            <HeadingP
              first={curriculumDetails.assessmentData.mainHeading}
              fontSize="2xl"
              baseColor="red-700"
              baseHeight="2px"
              boldness="!font-bold"
            />
            <AnimatedDiv
              variants={springAnimate70pxFromBelow10}
              initial={"offscreen"}
              whileInView={"onscreen"}
              viewport={{ once: true, amount: 0 }}
              className=" flex gap-2 mb-3"
            >
              <span className={`text-gray-800 text-base font-sans leading-8`}>
                {curriculumDetails.assessmentData.mainTag}
              </span>
            </AnimatedDiv>
            {curriculumDetails.assessmentData.list1.map(
              (item: string, i: number) => (
                <AnimatedDiv
                  key={i}
                  initial={{ opacity: 0, x: "20vw" }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: i * 0.1 + 1,
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
          </div>
        </div>
      </section>
      <section className={` pb-[35px] sm:pb-[50px] px-4 xl:px-[70px] `}>
        <div className={` p-8 mx-auto bg-[#FAF6E2]`}>
          <div className="mx-auto ">
            <HeadingP
              fontSize="2xl"
              first={curriculumDetails.toolsOfAssessmentData.mainHeading}
              baseColor="red-700"
              baseHeight="2px"
              boldness="!font-bold"
            />

            {curriculumDetails.toolsOfAssessmentData.list1.map(
              (item: string, i: number) => (
                <AnimatedDiv
                  key={i}
                  initial={{ opacity: 0, x: "20vw" }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: i * 0.1 + 1,
                    type: "tween",
                  }}
                  viewport={{ once: true, amount: 0 }}
                  className=" flex gap-2 mb-1"
                >
                  <span className="flex justify-center items-start pt-2 pb-[1px]">
                    <FaRegHandPointRight className="text-red-800 text-[15px]  " />
                  </span>
                  <span className={`text-gray-800 font-sans leading-8`}>
                    {item}
                  </span>
                </AnimatedDiv>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
