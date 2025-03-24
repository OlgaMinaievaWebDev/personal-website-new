import { useState, useEffect } from "react";
import Button from "../ui/Button";
function Hero() {
    const [isVisible, setIsVisible] = useState(false);

    // Show the scroll-to-top button when the user scrolls down
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 300) {
          setIsVisible(true); // Show button after scrolling down 300px
        } else {
          setIsVisible(false); // Hide button when near the top
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    // Function to scroll to the top of the page
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // Smooth scrolling effect
      });
    };
  return (
    <section
      id="hero"
      className="flex flex-col justify-center items-start w-full p-8 md:p-16 lg:p-24 space-y-8 min-h-screen bg-gradient-to-r from-[#FF6F00] to-[#FF9100] text-white"
    >
      <h1 className="text-4xl md:text-5xl font-semibold leading-tight tracking-wide">
        Olga Minaieva
      </h1>
      <h3 className="text-lg md:text-xl font-light text-gray-200">
        A Front-End Developer based in Toronto, CA
      </h3>
      <a href="mailto:minaeva9@gmail.com?subject=Hello%20Olga&body=I%20would%20like%20to%20connect%20with%20you...">
        <Button>Get in Touch</Button>
      </a>
      {/* Scroll to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-[#FF6F00] text-white p-4 rounded-full shadow-lg hover:bg-[#FF9100] transition"
        >
          ↑
        </button>
      )}
    </section>
  );
}
export default Hero