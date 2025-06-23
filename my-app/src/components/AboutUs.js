"use client";
import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <section className="relative w-full bg-white py-12 px-4 md:px-16">
<<<<<<< HEAD
  <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-4 items-center">
    {/* Left - Image Section */}
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full flex justify-center"
    >
      {/* Image container with relative positioning */}
      <div className="relative sm:w-[400px] sm:h-[300px] md:w-[500px] md:h-[500px] w-[300px] h-[250px]">
        <img
          src="/h-about.jpg"
          alt="About Us"
          className="w-full h-full object-cover"
        />

        {/* Experience Box */}
        <div
          className="absolute top-1/2 -right-20 -translate-y-1/2 w-40 md:w-[216px] sm:w-[160px] bg-blue-900 text-white px-5 py-4 pr-20 shadow-xl z-10"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          <h3 className="text-lg md:text-lg sm:text-md font-semibold leading-snug">
            More Than <span className="text-lg md:text-6xl sm:text-2xl font-bold block">67</span>
            Years of Experience
          </h3>
          <div className="absolute top-[25px] left-[120px] righ-20 border-white  h-[130px] w-[30px] border-r-2  border-t-2 border-b-2 sm:top-[15%] md:top-[14%] sm:right-3 md:right-6 sm:h-[70%] md:h-[75%] md:w-[45px] sm:w-[30px] md:border-r-4 sm:border-r-2  md:border-t-4  sm:border-t-2 md:border-b-4 sm:border-b-2 border-white pointer-events-none"></div>
        </div>
      </div>
    </motion.div>

    {/* Right - Text Section */}
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="max-w-xl ml-20"
    >
      <div>
        <p className="relative text-black font-semibold before:content-[''] before:absolute before:w-[40px] before:h-[3px] before:bg-[rgb(var(--secondary-color))] before:left-0 before:top-[-15px]">
          About us
        </p>
      </div>

      <h2 className="text-2xl text-black md:text-3xl lg:text-4xl font-bold leading-snug mb-4">
        LEADING GLOBAL AUTO COMPONENTS AND SYSTEMS MANUFACTURER
      </h2>

      <p className="text-gray-600 text-base leading-relaxed mb-6">
       Uno Minda Limited (formerly Minda Industries Limited) is a leading global manufacturer of proprietary automotive solutions and systems supplying to OEMs as Tier-1. We have made important contribution to the automotive industry supply chain for more than six decades with our innovative products. Incepted in 1958, We are one of the leading manufacturers of automotive switching systems, automotive lighting systems, automotive acoustics systems, automotive seating systems and alloy wheels....
      </p>

      <a
        href="/about"
        className="inline-flex items-center font-semibold text-blue-400 group"
      >
        Read More
        <img
          src="/b-right-arrow.svg"
          alt="arrow"
          className="ml-2 mt-1 w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1.5"
        />
      </a>
    </motion.div>
  </div>
</section>

=======
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left - Image Section */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative w-full"
        >
          <img
            src="/h-about.jpg"
            alt="About Us"
            className="w-100"
          />


          {/* Experience Box - Floating on Right Side */}
          <div
            className="absolute top-1/2 -translate-y-1/2 -right-1 sm:right-30 md:right-8 lg:right-[15px] w-[216px] bg-blue-900 text-white px-5 py-4 pr-20 shadow-xl z-10"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            {/* Heading */}
            <h3 className="text-lg font-semibold leading-snug">
              More Than <span className="text-6xl font-bold block">67</span>
              Years of Experience
            </h3>

            {/* Decorative Border Box - Right Side */}
            <div className="absolute top-[14%] right-6 h-[75%] w-[45px] border-r-4 border-t-4 border-b-4 border-white pointer-events-none"></div>
          </div>

        </motion.div>

        {/* Right - Text Content */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Title with left border */}
          <div className="">
            <p className="relative  text-black font-semibold before:content-[''] before:absolute before:w-[40px] before:h-[3px] before:bg-[rgb(var(--secondary-color))] before:left-0 before:top-[-15px]">
              About us
            </p>

          </div>

          {/* Heading */}
          <h2 className="text-2xl text-black md:text-3xl lg:text-4xl font-bold leading-snug mb-4">
            LEADING GLOBAL AUTO COMPONENTS AND SYSTEMS MANUFACTURER
          </h2>

          {/* Paragraph */}
          <p className="text-gray-600 text-base leading-relaxed mb-6">
            Uno Minda Limited (formerly Minda Industries Limited) is a leading global manufacturer of
            proprietary automotive solutions and systems supplying to OEMs as Tier-1. We have made
            important contributions to the automotive industry supply chain for more than six decades
            with our innovative products. Incepted in 1958, we are one of the leading manufacturers of
            automotive switching systems, automotive lighting systems, automotive acoustics systems,
            automotive seating systems, and alloy wheels.
          </p>

          {/* Read More Button */}
          <a
            href="/about"
            className="inline-flex items-center font-semibold text-blue-400 group"
          >
            Read More
            <img
              src="/b-right-arrow.svg"
              alt="arrow"
              className="ml-2 mt-1 w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1.5"
            />
          </a>

        </motion.div>
      </div>
    </section>
>>>>>>> 3db30824cdfc86b422f37f697745eb25fd9a68c2
  );
}
