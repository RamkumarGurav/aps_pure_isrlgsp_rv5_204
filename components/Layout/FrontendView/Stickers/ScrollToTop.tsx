"use client"; // Ensures the component is treated as a client-side component
import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

export default function ScrollToTop() {
  // State to manage the visibility of the scroll-to-top button
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    // Calculate the viewport height
    const vh = window.innerHeight;

    // Function to handle scroll events
    const handleScroll = () => {
      // Show the button if the scroll position is more than twice the viewport height, hide it otherwise
      if (window.scrollY > 2 * vh) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the scroll event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  // Function to smoothly scroll to the top of the page
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Conditionally render the button if showBtn is true */}
      {showBtn && (
        <button
          onClick={handleScrollToTop} // Set the onClick handler to scroll to top
          className="fixed flex justify-center items-center bottom-9 lg:bottom-4 right-4 z-[99999] cursor-pointer bg-red-500 rounded-full p-2"
        >
          {/* Icon for the button */}
          <IoIosArrowUp className="text-[20px] text-white" />
        </button>
      )}
    </>
  );
}
