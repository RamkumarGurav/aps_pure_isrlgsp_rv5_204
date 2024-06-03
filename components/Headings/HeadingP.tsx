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
export default function HeadingP({
  first,
  second,
  secondTextColor = "red-500",
  animate = true,
  baseWidth = "100px",
  fontSize = "4xl",
  boldness = "font-bold",
  textColor = "text-gray-900",
  baseHeight = "3px",
  baseColor = "red-500",
  gap = "mb-4",
  mb = "mb-4",
  containerClasses = "",
  firstTextClasses = "",
  secondTextClasses = "",
  baseClasses = "",
}: {
  first: string;
  second?: string;
  secondTextColor?: string;
  animate?: boolean;
  baseWidth?: string;
  baseColor?: string;
  fontSize?: string;
  textColor?: string;
  boldness?: string;
  baseHeight?: string;
  gap?: string;
  mb?: string;
  containerClasses?: string;
  firstTextClasses?: string;
  secondTextClasses?: string;
  baseClasses?: string;
}) {
  return (
    <div className={`${mb} ${containerClasses}`}>
      {animate ? (
        <>
          <AnimatedDiv
            className={`text-2xl md:text-${fontSize} text-start ${boldness} ${textColor} ${gap}  ||  ${font.className}
              || ${firstTextClasses}`}
            variants={springAnimateFromBelow10}
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true, amount: 0 }}
          >
            {first}&nbsp;
            {second && (
              <span className={`text-${secondTextColor}  ${secondTextClasses}`}>
                {second}
              </span>
            )}
          </AnimatedDiv>
          <AnimatedDiv
            variants={springAnimateFromBelow00}
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true, amount: 0 }}
            className={`w-[${baseWidth}] border-b-[${baseHeight}] border-${baseColor} mb-3  || ${baseClasses}`}
          >
            <span></span>
          </AnimatedDiv>
        </>
      ) : (
        <>
          <div
            className={`text-2xl md:text-4xl text-start !font-bold text-gray-900 mb-4  ||  ${font.className}`}
          >
            {first}&nbsp;
            {second && <span className="text-secondary-red1">{second}</span>}
          </div>
          <div
            className={`w-[${baseWidth}] border-b-[${baseHeight}] border-red-500 mb-3`}
          >
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
