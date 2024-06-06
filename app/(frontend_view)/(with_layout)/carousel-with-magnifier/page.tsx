/*** nextjs ***/
import Image from "next/image";
import HomeHeroCarousel from "@/components/Carousels/HomeHeroCarousel";
import IMHHC from "@/components/Carousels/IMHHC";
import ImageMagnifier from "@/components/Carousels/ImageMagnifier";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: {
    default: "Appolo Public School",
    template: "%s | APS",
  },
  description: "Welcome to Appolo Public School",
};
/*** fonts ***/
import { Poppins } from "next/font/google";
import MsgBoxCbyC2 from "@/components/Layout/FrontendView/Stickers/MsgBoxCbyC2";
import MsgBox3 from "@/components/Layout/FrontendView/Stickers/MsgBoxCbyCFromAbove";
const font = Poppins({ weight: "400", subsets: ["latin"] });

/*** components ***/
/*** packages ***/
/*****************************************************
      Page
 ****************************************************/
export default function Page() {
  return (
    <div className="py-[50px] ">
      {/* <MsgBoxCbyC /> */}
      <br />
      <MsgBoxCbyC2 />
      {/* <ImageMagnifier url="/banner-img-1.jpg">
        <Image
          src={"/banner-img-1.jpg"}
          alt="banner"
          width={600}
          height={400}
          className="w-full h-[220px] sm:h-[420px] object-cover"
        />
      </ImageMagnifier> */}
      {/* <IMHHC /> */}
    </div>
  );
}
/*****************************************************
           other
*****************************************************/
