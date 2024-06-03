/*** nextjs ***/
import Image from "next/image";
/*** fonts ***/
import { Nunito } from "next/font/google";
const font = Nunito({ weight: "400", subsets: ["latin"] });
/*** images ***/
import komalImg from "@/public/komal.jpg";
import nabeelaImg from "@/public/nabeela.jpg";
import fatimaImg from "@/public/fathima.jpg";
/*** components ***/
import AnimatedDiv from "@/components/Animated/AnimatedDiv";
import { springAnimate70pxFromBelow10 } from "@/lib/helpers/variants";
import Bedcrumb from "@/components/Breadcrumbs/Bedcrum";
import HeadingP from "@/components/Headings/HeadingP";

export default function TMPageName() {
  return (
    <div className={` ${font.className} bg-[#FDFBF0] overflow-hidden`}>
      <Bedcrumb heading="Messages" pageName1=" Trustee's Message" />

      <section
        id="trusteesMsg"
        className="py-[35px] sm:py-[50px] px-4 xl:px-[70px]  "
      >
        <div className=" ">
          <HeadingP
            first="Trustee's Message"
            second="Message"
            containerClasses="px-4"
            boldness="!font-bold"
          />
          <AnimatedDiv
            initial={{ opacity: 0, x: "-50vw" }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, type: "spring" }}
            viewport={{ once: true, amount: 0 }}
            className="trusteesMsgContainer p-4 mb-10 bg-[#FAF6E2] pb-4"
          >
            <div className=" grid md:grid-cols-4 p-4 pb-0">
              <div className="left md:col-span-3">
                <h3
                  className={`text-[#007BFF] text-lg sm:text-xl lg:text-2xl  font-semibold font-sans mb-1 `}
                >
                  Ms. Komal Gurudev
                </h3>
                <h4
                  className={`text-[#e6272d] text-[20px] font-semibold font-sans mb-2`}
                >
                  Trustee
                </h4>
                <p
                  className={`text-[#333] mb-1 font-sans font-normal ${font.className}`}
                >
                  &ldquo;APPOLO invests in shaping the younger generation to
                  promote the passion of knowledge and skills. We thrive towards
                  continuous learning process while also keeping in mind the
                  school’s moto which is Character, Conduct and Culture.&rdquo;
                </p>
              </div>
              <div className="right w-full mx-auto  flex  justify-center items-center pt-0  px-2">
                <div
                  className="p-4 mx-auto
               "
                >
                  <div className="flex justify-stretch  py-0 pb-0 ">
                    <div className="   ">
                      <Image
                        src={komalImg}
                        alt="komalImg "
                        className="lg:w-[141px] w-[250px] h-auto lg:h-[177px] object-cover "
                        placeholder="blur"
                      />
                    </div>
                    <div className="bg-[#348BC1] inline-block w-[20px] mt-8 mb-4"></div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedDiv>
          <AnimatedDiv
            initial={{ opacity: 0, x: "50vw" }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, type: "spring" }}
            viewport={{ once: true, amount: 0 }}
            className="trusteesMsgContainer p-4 mb-10 bg-[#FAF6E2] pb-4"
          >
            <div className=" grid md:grid-cols-4 p-4 pb-0">
              <div className="left md:col-span-3">
                <h3
                  className={`text-[#007BFF] text-lg sm:text-xl lg:text-2xl  font-semibold font-sans mb-1 `}
                >
                  Ms. Nabeela Nagoor Meera
                </h3>
                <h4
                  className={`text-[#e6272d] text-[20px] font-semibold font-sans mb-2`}
                >
                  Trustee
                </h4>
                <p
                  className={`text-[#333] mb-1 font-sans font-normal ${font.className}`}
                >
                  &ldquo;Appolo moulds the children to face any challenges put
                  forth to them and helps them rise above the rest in this
                  competitive world.&rdquo;
                </p>
              </div>
              <div className="right w-full mx-auto  flex  justify-center items-center pt-0  px-2">
                <div
                  className="p-4 mx-auto
               "
                >
                  <div className="flex justify-stretch  py-0 pb-0 ">
                    <div className="   ">
                      <Image
                        src={nabeelaImg}
                        alt="nabeelaImg "
                        className="lg:w-[141px] w-[250px] h-auto lg:h-[177px] object-cover "
                        placeholder="blur"
                      />
                    </div>
                    <div className="bg-[#348BC1] inline-block w-[20px] mt-8 mb-4"></div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedDiv>
          <AnimatedDiv
            initial={{ opacity: 0, x: "-50vw" }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, type: "spring" }}
            viewport={{ once: true, amount: 0 }}
            className="trusteesMsgContainer p-4 mb-10 bg-[#FAF6E2] pb-4"
          >
            <div className=" grid md:grid-cols-4 p-4 pb-0">
              <div className="left md:col-span-3">
                <h3
                  className={`text-[#007BFF] text-lg sm:text-xl lg:text-2xl  font-semibold font-sans mb-1 `}
                >
                  Ms. Natchi Fathima
                </h3>
                <h4
                  className={`text-[#e6272d] text-[20px] font-semibold font-sans mb-2`}
                >
                  Trustee
                </h4>
                <p
                  className={`text-[#333] mb-1 font-sans font-normal ${font.className}`}
                >
                  &ldquo;We believe education is a tool which helps us in
                  identifying our career goal and to lead a more civilized
                  life..&rdquo;
                </p>
              </div>
              <div className="right w-full mx-auto  flex  justify-center items-center pt-0  px-2">
                <div
                  className="p-4 mx-auto
               "
                >
                  <div className="flex justify-stretch  py-0 pb-0 ">
                    <div className="   ">
                      <Image
                        src={fatimaImg}
                        alt="sreelakshmi "
                        className="lg:w-[141px] w-[250px] h-auto lg:h-[177px] object-cover "
                        placeholder="blur"
                      />
                    </div>
                    <div className="bg-[#348BC1] inline-block w-[20px] mt-8 mb-4"></div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedDiv>
        </div>
      </section>
    </div>
  );
}
