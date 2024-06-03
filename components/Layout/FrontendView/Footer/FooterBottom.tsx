import Link from "next/link";
/*** fonts ***/
import { Lato } from "next/font/google";
const font = Lato({ weight: "400", subsets: ["latin"] });

let currentYear = new Date().getFullYear();

const FooterBottom = () => {
  return (
    <div className="bg-[#15222E] py-3 px-4 xl:px-[70px] w-full ">
      <div className=" mx-auto  text-center ||  flex flex-col gap-2  w-full lg:flex-row justify-between items-center">
        <p className="text-sm text-gray-300 font-sans   sm:whitespace-nowrap">
          © Copyright {currentYear}{" "}
          <span className="text-red-600">Appolo Public School</span>. All Rights
          Reserved.
        </p>

        <p className="text-sm text-gray-300 font-sans  leading-8  max-w-[300px]">
          <Link href="https://www.marswebsolution.com/">
            {" "}
            Design By : Mars Web Solutions
          </Link>
        </p>
      </div>
    </div>
  );
};

export default FooterBottom;
