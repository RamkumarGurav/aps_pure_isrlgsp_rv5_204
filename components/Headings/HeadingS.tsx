/*** fonts ***/
import { Lato } from "next/font/google";
const font = Lato({ weight: "400", subsets: ["latin"] });

/*** c ***/
import {
  springAnimateFromBelow00,
  springAnimateFromBelow10,
} from "@/lib/helpers/variants";
import AnimatedDiv from "../Animated/AnimatedDiv";

/*****************************************************
      component
 ****************************************************/
export default function HeadingS({
  first,
  second,
  animate = true,
}: {
  first: string;
  second?: string;
  animate?: boolean;
}) {
  return (
    <div className=" mb-6">
      {animate ? (
        <>
          <AnimatedDiv
            className={`text-2xl md:text-4xl text-start !font-bold text-gray-900 mb-4  ||  ${font.className}`}
            variants={springAnimateFromBelow10}
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true, amount: 0 }}
          >
            {first} &nbsp;
            {second && <span className="text-secondary-red1">{second}</span>}
          </AnimatedDiv>
          <AnimatedDiv
            variants={springAnimateFromBelow00}
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true, amount: 0 }}
            className="w-[100px] border-b-[3px] border-red-500 mb-3"
          >
            <span></span>
          </AnimatedDiv>
        </>
      ) : (
        <>
          <div
            className={`text-2xl md:text-4xl text-start !font-bold text-gray-900 mb-4  ||  ${font.className}`}
          >
            {first} &nbsp;
            {second && <span className="text-secondary-red1">{second}</span>}
          </div>
          <div className="w-[100px] border-b-[3px] border-red-700 mb-3">
            <span></span>
          </div>
        </>
      )}
    </div>
  );
}
/*****************************************************
           other
*****************************************************/
