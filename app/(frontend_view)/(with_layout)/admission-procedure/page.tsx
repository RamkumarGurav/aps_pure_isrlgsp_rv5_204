/*** fonts ***/
import { Poppins } from "next/font/google";
const font = Poppins({ weight: "400", subsets: ["latin"] });
/*** icons ***/
import { FaRegHandPointRight } from "react-icons/fa";
/*** components ***/
import { springAnimate70pxFromBelow10 } from "@/lib/helpers/variants";
import AnimatedDiv from "@/components/Animated/AnimatedDiv";
import { docsRequired } from "@/lib/helpers/displayData";
import AnimatedButton from "@/components/Animated/AnimatedButton";
import Bedcrumb from "@/components/Breadcrumbs/Bedcrum";
import AdForm from "./AdForm";
import HeadingP from "@/components/Headings/HeadingP";
import HDivider from "@/components/Dividers/HDivider";
/*****************************************************
           page
*****************************************************/
export default function APPageName() {
  return (
    <>
      <Bedcrumb heading="About Us" pageName1="Admission Procedure" />

      <section
        id="admissionProcedureSection"
        className={`overflow-hidden bg-[#FDFBF0] py-[35px] sm:py-[50px] px-4 xl:px-[70px] ${font.className}`}
      >
        <div className={`  mx-auto `}>
          <HeadingP
            first="Admission"
            second=" Procedure"
            containerClasses="flex flex-col items-center"
            firstTextClasses="!font-bold"
          />

          <div className="grid lg:grid-cols-4 gap-4 font-sans mt-10 ">
            <AnimatedDiv
              className="admitCard admitCardParent"
              // variants={springAnimate100perFromBelow10}
              initial={{ opacity: 0, y: "200px" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, type: "tween" }}
              viewport={{ once: true, amount: 0 }}
            >
              <div
                className="flex justify-center items-center bg-transparent relative  mb-4  || 
              after:content[''] after:absolute after:top-[50%]  after:right-[-30px] after:w-0 after:lg:w-[30px] after:border-b-[0.5px]"
              >
                <div
                  className="relative rounded-full  w-[105px] h-[105px] 
                  bg-[#FDFBF0]  z-[99] "
                >
                  <div
                    className="admitCardBgImageContainer1 absolute bottom-0
                   w-[105px] h-[105px] z-[2] left-0 rounded-full bg-contain bg-no-repeat bg-center"
                  ></div>
                  <div
                    className="admitCardBgImageContainer2 absolute bottom-0
                   w-[105px] h-[0px]  left-0  rounded-full bg-contain bg-no-repeat bg-center"
                  ></div>
                  <div
                    className="admissionProcStep1 border-2 text-center flex justify-center items-center 
            border-blue-500 w-[40px] h-[40px] absolute top-[-10px]
        
            right-[-20px] rounded-full  text-blue-800 text-base font-semibold font-sans"
                  >
                    01
                  </div>
                  <div
                    className="shadowContainer absolute w-[80px] h-[77px] top-[50%] left-[50%] translate-x-[-50%]
              translate-y-[-50%] bg-transparent rounded-full z-[1] shadow-admissionCard-icon"
                  ></div>

                  <div
                    className="apIcon1 absolute w-[50px] h-[50px] top-[50%] left-[50%] translate-x-[-50%]
              translate-y-[-50%] z-[10] bg-red-400/0 bg-cover bg-center bg-no-repeat"
                  ></div>
                </div>
              </div>
              <p
                className={`text-center text-[18px] text-gray-600 font-semibold`}
              >
                Enquiry
              </p>
              <p className={`text-center text-gray-700 `}>
                Submit the online enquiry form or visit the school office. The
                office staff will get back to you.
              </p>
            </AnimatedDiv>
            <AnimatedDiv
              className="admitCard admitCardParent"
              initial={{ opacity: 0, y: "200px" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, type: "tween", delay: 0.2 }}
              viewport={{ once: true, amount: 0 }}
            >
              <div
                className="flex justify-center items-center bg-transparent relative  mb-4 || 
              after:content[''] after:absolute after:top-[50%]  after:right-[-30px] after:w-0 after:lg:w-[30px] after:border-b-[0.5px]"
              >
                <div
                  className="relative rounded-full  w-[105px] h-[105px] 
                  bg-[#FDFBF0]  z-[99] "
                >
                  <div
                    className="admitCardBgImageContainer1 absolute bottom-0
                   w-[105px] h-[105px] z-[2] left-0 rounded-full bg-contain bg-no-repeat bg-center"
                  ></div>
                  <div
                    className="admitCardBgImageContainer2 absolute bottom-0
                   w-[105px] h-[0px]  left-0  rounded-full bg-contain bg-no-repeat bg-center"
                  ></div>
                  <div
                    className="admissionProcStep1 border-2 text-center flex justify-center items-center 
            border-blue-500 w-[40px] h-[40px] absolute top-[-10px]
        
            right-[-20px] rounded-full  text-blue-800 text-base font-semibold font-sans"
                  >
                    02
                  </div>
                  <div
                    className="shadowContainer absolute w-[80px] h-[77px] top-[50%] left-[50%] translate-x-[-50%]
              translate-y-[-50%] bg-transparent rounded-full z-[1] shadow-admissionCard-icon"
                  ></div>
                  <div
                    className="apIcon2 absolute w-[50px] h-[50px] top-[50%] left-[50%] translate-x-[-50%]
              translate-y-[-50%] z-[10] bg-red-400/0 bg-cover bg-center bg-no-repeat"
                  ></div>
                </div>
              </div>
              <p
                className={`text-center text-gray-600 text-[18px] font-semibold`}
              >
                Registration
              </p>
              <p className={`text-center text-gray-700 `}>
                Parents are requested to fill the registration form provided in
                the office.
              </p>
            </AnimatedDiv>
            <AnimatedDiv
              className="admitCard admitCardParent"
              initial={{ opacity: 0, y: "200px" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, type: "tween", delay: 0.4 }}
              viewport={{ once: true, amount: 0 }}
            >
              <div
                className="flex justify-center items-center bg-transparent relative  mb-4 || 
              after:content[''] after:absolute after:top-[50%]  after:right-[-30px] after:w-0 after:lg:w-[30px] after:border-b-[0.5px]"
              >
                <div
                  className="relative rounded-full  w-[105px] h-[105px] 
                  bg-[#FDFBF0]  z-[99] "
                >
                  <div
                    className="admitCardBgImageContainer1 absolute bottom-0
                   w-[105px] h-[105px] z-[2] left-0 rounded-full bg-contain bg-no-repeat bg-center"
                  ></div>
                  <div
                    className="admitCardBgImageContainer2 absolute bottom-0
                   w-[105px] h-[0px]  left-0  rounded-full bg-contain bg-no-repeat bg-center"
                  ></div>
                  <div
                    className="admissionProcStep1 border-2 text-center flex justify-center items-center 
            border-blue-500 w-[40px] h-[40px] absolute top-[-10px]
        
            right-[-20px] rounded-full  text-blue-800 text-base font-semibold font-sans"
                  >
                    03
                  </div>
                  <div
                    className="shadowContainer absolute w-[80px] h-[77px] top-[50%] left-[50%] translate-x-[-50%]
              translate-y-[-50%] bg-transparent rounded-full z-[1] shadow-admissionCard-icon"
                  ></div>
                  <div
                    className="apIcon3 absolute w-[50px] h-[50px] top-[50%] left-[50%] translate-x-[-50%]
              translate-y-[-50%] z-[10] bg-red-400/0 bg-cover bg-center bg-no-repeat"
                  ></div>
                </div>
              </div>
              <p
                className={`text-center text-gray-600 text-[18px] font-semibold`}
              >
                Written Test
              </p>
              <p className={`text-center text-gray-700 `}>
                A written test will be conducted for the students seeking
                admission for grade 1 and above. Eligible student will be given
                seat and informed.
              </p>
            </AnimatedDiv>
            <AnimatedDiv
              className="admitCard admitCardParent"
              initial={{ opacity: 0, y: "200px" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, type: "tween", delay: 0.6 }}
              viewport={{ once: true, amount: 0 }}
            >
              <div className="flex justify-center items-center bg-transparent relative  mb-4">
                <div
                  className="relative rounded-full  w-[105px] h-[105px] 
                  bg-[#FDFBF0]  z-[99] "
                >
                  <div
                    className="admitCardBgImageContainer1 absolute bottom-0
                   w-[105px] h-[105px] z-[2] left-0 rounded-full bg-contain bg-no-repeat bg-center"
                  ></div>
                  <div
                    className="admitCardBgImageContainer2 absolute bottom-0
                   w-[105px] h-[0px]  left-0  rounded-full bg-contain bg-no-repeat bg-center"
                  ></div>
                  <div
                    className="admissionProcStep1 border-2 text-center flex justify-center items-center 
            border-blue-500 w-[40px] h-[40px] absolute top-[-10px]
        
            right-[-20px] rounded-full  text-blue-800 text-base font-semibold font-sans"
                  >
                    04
                  </div>
                  <div
                    className="shadowContainer absolute w-[80px] h-[77px] top-[50%] left-[50%] translate-x-[-50%]
              translate-y-[-50%] bg-transparent rounded-full z-[1] shadow-admissionCard-icon"
                  ></div>
                  <div
                    className="apIcon4 absolute w-[50px] h-[50px] top-[50%] left-[50%] translate-x-[-50%]
              translate-y-[-50%] z-[10] bg-red-400/0 bg-cover bg-center bg-no-repeat"
                  ></div>
                </div>
              </div>
              <p
                className={`text-center text-gray-600 text-[18px] font-semibold`}
              >
                Admission
              </p>
              <p className={`text-center text-gray-700 `}>
                A meeting with the Principal will be scheduled at the time of
                admission. The filled application form along with the required
                documents are to be submitted within 7 days.
              </p>
            </AnimatedDiv>
          </div>
          <HDivider />
          <div className={`grid lg:grid-cols-2`}>
            <div className="left ">
              <HeadingP
                first="Documents Required for Admission:"
                baseColor="red-700"
                fontSize="text-3xl"
                boldness="!font-bold"
                baseWidth="50px"
                baseHeight="2px"
                firstTextClasses="leading-8"
              />

              {docsRequired.map((item, i: number) => (
                <AnimatedDiv
                  key={i}
                  className=" flex gap-2 mb-3"
                  initial={{ opacity: 0, x: "20vw" }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: i * 0.3,
                    duration: 1,
                    type: "tween",
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <span>
                    <FaRegHandPointRight className="text-red-800 text-[15px] mt-1" />
                  </span>
                  <span className={`text-gray-800  font-sans leading-6`}>
                    {item}
                  </span>
                </AnimatedDiv>
              ))}
            </div>

            <div className="right mt-4 lg:mt-0">
              <HeadingP
                first="Enquire Here"
                baseColor="red-700"
                fontSize="text-3xl"
                boldness="!font-bold"
                baseWidth="50px"
                baseHeight="2px"
                firstTextClasses="leading-8"
              />

              <div>
                <AdForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
