"use client";

import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { AnimatePresence, motion } from "framer-motion";
import { footerContactUs, footerQuickLinks } from "@/lib/helpers/displayData";
import { Roboto } from "next/font/google";
const font = Roboto({ weight: "400", subsets: ["latin"], display: "swap" });

const FooterTop = () => {
  return (
    <div
      className={`bg-[#1A2742]  text-white px-4 xl:px-[86px] py-[50px] ${font.className} font-sans`}
    >
      <div className=" px-4 mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-10">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 100 }} // Initial position, animate from bottom
              exit={{ opacity: 0, y: 50 }} // Animation when component exits
              transition={{ duration: 1 }} // Animation duration
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
            >
              <h4 className=" mb-4 text-xl font-medium font-sans tracking-wide text-center md:text-start">
                Quick Links
              </h4>
              <ul className="footer_nav2 list-unstyled  ||  flex flex-col items-center md:items-start gap-y-3">
                {footerQuickLinks.slice(0, 4).map((item, i) => (
                  <li key={i} className=" flex items-center justify-start">
                    <FaAngleRight className="text-red-700/70" />
                    <Link
                      href={`${item.link}`}
                      title="Website Design"
                      className="footerQuickLink text-gray-400  font-sans hover:text-red-600"
                    >
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 100 }} // Initial position, animate from bottom
              exit={{ opacity: 0, y: 50 }} // Animation when component exits
              transition={{ duration: 1, delay: 0.5 }} // Animation duration
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
            >
              <h4 className=" mb-4 text-xl font-semibold tracking-wide">
                &nbsp;
              </h4>
              <ul className="footer_nav2 list-unstyled  ||  flex flex-col items-center md:items-start gap-y-3">
                {footerQuickLinks.slice(4).map((item, i) => (
                  <li key={i} className=" flex items-center justify-start">
                    <FaAngleRight className="text-red-700/70" />
                    <Link
                      href={`${item.link}`}
                      title="Website Design"
                      className="footerQuickLink text-gray-400  font-sans  hover:text-red-600"
                    >
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 100 }} // Initial position, animate from bottom
              exit={{ opacity: 0, y: 50 }} // Animation when component exits
              transition={{ duration: 1 }} // Animation duration
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
            >
              <h4 className=" mb-4 text-xl font-medium font-sans tracking-wide text-center md:text-start">
                Contact Us
              </h4>
              <ul className="footer_nav2 list-unstyled space-y-2 flex flex-col items-center md:items-start">
                <li className=" mb-4 flex  ">
                  <div className="pt-[5px] ">
                    {" "}
                    <IoLocationSharp
                      size={15}
                      className="text-red-600 mr-[1px]"
                    />
                  </div>

                  <div className={`footerQuickLink text-gray-400   font-sans`}>
                    {footerContactUs.address}
                  </div>
                </li>
                <li className=" mb-4 flex  ">
                  <div className="pt-[5px] ">
                    {" "}
                    <FaPhone size={12} className="text-red-600 mr-[1px]" />
                  </div>

                  <div
                    title="Website Design"
                    className="footerQuickLink text-gray-400  "
                  >
                    {footerContactUs.phoneNumbers.map(
                      (item: string, i: number) => (
                        <div className="font-sans" key={i}>
                          +91{item}
                        </div>
                      )
                    )}
                  </div>
                </li>
                <li className=" mb-4 flex  ">
                  <div className="pt-[5px] ">
                    {" "}
                    <MdEmail size={15} className="text-red-600 mr-[1px]" />
                  </div>

                  <div
                    title="Website Design"
                    className="footerQuickLink font-sans text-gray-400  "
                  >
                    {footerContactUs.email}
                  </div>
                </li>
              </ul>
            </motion.div>
          </AnimatePresence>
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 100 }} // Initial position, animate from bottom
              exit={{ opacity: 0, y: 50 }} // Animation when component exits
              transition={{ duration: 1, delay: 0.5 }} // Animation duration
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
            >
              <div className="w-full h-full bg-white">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.7324382422685!2d77.55048051482149!3d12.92491069088659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb6ab8f59d27ee566!2sAppolo%20Public%20School!5e0!3m2!1sen!2sin!4v1639141357781!5m2!1sen!2sin"
                  width="100%"
                  height="200"
                  loading="lazy"
                ></iframe>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default FooterTop;
