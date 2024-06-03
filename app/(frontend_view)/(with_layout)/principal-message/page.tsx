/*** nextjs ***/
import Image from "next/image";
/*** fonts ***/
import { Open_Sans } from "next/font/google";
const font = Open_Sans({ weight: "400", subsets: ["latin"] });
/*** images ***/
import sreelakshmi from "@/public/sreelakshmi.jpg";
/*** components ***/
import { springAnimate70pxFromBelow10 } from "@/lib/helpers/variants";
import AnimatedDiv from "@/components/Animated/AnimatedDiv";
import AnimatedTitle from "@/components/Animated/AnimatedDiv";
import AnimatedText from "@/components/Animated/AnimatedText";
import Bedcrumb from "@/components/Breadcrumbs/Bedcrum";
import HeadingP from "@/components/Headings/HeadingP";

export default function PMPageName() {
  return (
    <div className="bg-[#FDFBF0] overflow-hidden">
      <Bedcrumb heading="Messages" pageName1="Principal's Message" />
      <section
        id="principalMsg"
        className="py-[35px] sm:py-[50px]  xl:px-[70px]  "
      >
        <div className="">
          <HeadingP
            first="Principal's Message"
            second="Message"
            containerClasses="px-4"
            boldness="!font-bold"
          />
          <div className="principalMsgContainer bg-[#FAF6E2] p-4">
            <div className=" lg:grid lg:grid-cols-2 p-4 pb-0">
              <div className="left">
                <AnimatedTitle
                  initial={{ opacity: 0, x: "-20vw" }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, type: "tween" }}
                  viewport={{ once: true, amount: 0 }}
                  className={`text-[#007BFF] text-lg sm:text-xl lg:text-2xl  font-semibold font-sans mb-3 `}
                >
                  Ms. Sreelakshmi S.
                </AnimatedTitle>
                <AnimatedTitle
                  initial={{ opacity: 0, x: "-20vw" }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, type: "tween" }}
                  viewport={{ once: true, amount: 0 }}
                  className={`text-[#e6272d] text-base font-semibold font-sans mb-2`}
                >
                  Principal, M.A., B.Ed.
                </AnimatedTitle>
                <AnimatedText
                  initial={{ opacity: 0, x: "-20vw" }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, type: "tween" }}
                  viewport={{ once: true, amount: 0 }}
                  className="leading-8  font-sans text-[#333]"
                >
                  &ldquo;Better than a thousand days of diligent study is one
                  day with a great teacher.&rdquo;
                </AnimatedText>
                <AnimatedText
                  initial={{ opacity: 0, x: "-20vw" }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, type: "tween" }}
                  viewport={{ once: true, amount: 0 }}
                  className={`  mt-3 leading-8  font-sans text-[#333]`}
                >
                  {" "}
                  At Appolo, we believe that education cannot be limited merely
                  to textbooks and classrooms. It is our core belief that right
                  education is the one which builds one’s character, conduct and
                  culture. Guided by this very belief, Appolo was built with a
                  strong intention of moulding the young minds. We believe in an
                  all-round development of our students. Thus, our teachers
                  strive day in and day out to cater and understand the unique
                  needs of each of our students to bring out the best in their
                  interest.
                </AnimatedText>
              </div>
              <div className="right flex  justify-center items-start pt-0  px-2">
                <div
                  className="
               "
                >
                  <AnimatedDiv
                    initial={{ opacity: 0, x: "20vw" }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, type: "tween" }}
                    viewport={{ once: true, amount: 0 }}
                    className="flex justify-stretch   pb-0 "
                  >
                    <div className="   ">
                      <Image
                        src={sreelakshmi}
                        alt="sreelakshmi "
                        className="w-full h-auto object-cover "
                        placeholder="blur"
                      />
                    </div>
                    <div className="bg-[#348BC1] inline-block w-[20px] mt-8 mb-4"></div>
                  </AnimatedDiv>
                </div>
              </div>
            </div>
            <AnimatedText
              initial={{ opacity: 0, x: "-20vw" }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, type: "tween" }}
              viewport={{ once: true, amount: 0 }}
              className={`  mt-3 leading-8  font-sans text-[#333] px-4`}
            >
              {" "}
              We strongly believe in continual evolvement of teaching-learning
              methodologies to equip our students with competencies and skills
              that prepare them for their entry into the challenging world
              beyond school.
            </AnimatedText>
            <AnimatedText
              initial={{ opacity: 0, x: "-20vw" }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, type: "tween" }}
              viewport={{ once: true, amount: 0 }}
              className={`  mt-3 leading-8  font-sans text-[#333] px-4`}
            >
              {" "}
              In light of the utmost and superior outcome of our students, we
              ensure to provide an empowering child-centric environment for
              them. We are here to make our students lifelong learners and
              social influencers who can lead the community towards progress and
              positivity to make the world a better place to live in.
            </AnimatedText>
          </div>
        </div>
      </section>
    </div>
  );
}
