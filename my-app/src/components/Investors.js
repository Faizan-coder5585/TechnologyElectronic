"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Investors = () => {
    return (
      <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4 items-center gap-y-10">
          {/* Title */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full md:w-1/3 px-4"
          >
            <div>
            <h5 className="relative text-black font-semibold before:absolute before:top-[-15px] before:left-0 before:w-[40px] before:h-[3px] before:bg-[rgb(var(--secondary-color))] before:content-[' ']">
  LEADER IN AUTOMOTIVE TECHNOLOGY
</h5>

              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                INVESTORS
              </h2>
              <p className="text-gray-600">
                Delivering Long Term Sustainable growth with consistent
                industry outperformance and good corporate governance.
              </p>
            </div>
          </motion.div>

          {/* Annual Reports */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-full md:w-1/3 px-4"
          >
            <div className="group relative text-center p-6 transition overflow-hidden">
              <div className="absolute inset-0 w-0 group-hover:w-full  bg-blue-500 z-0"></div>
              <div className="relative z-10">
                <Image
                  src="/graph.png"
                  alt="Graph Icon"
                  width={50}
                  height={50}
                  className="mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Annual Reports
                </h3>
                <a
                  href="/investor/annual-reports"
                  className="inline-flex items-center text-blue-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  Read More
                  <Image
                    src="/b-right-arrow.svg"
                    alt="arrow"
                    width={16}
                    height={16}
                    className="ml-2"
                  />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Investor Image */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="w-full md:w-1/3 px-4"
          >
            <div className="overflow-hidden">
              <Image
                src="/investor-1.jpg"
                alt="Investor"
                width={400}
                height={300}
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          {/* Quarterly Results */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="w-full md:w-1/3 px-4"
          >
            <div className="group relative text-center p-6 transition overflow-hidden">
              <div className="absolute inset-0 w-0 group-hover:w-full  bg-blue-500 z-0"></div>
              <div className="relative z-10">
                <Image
                  src="/report.png"
                  alt="Report Icon"
                  width={50}
                  height={50}
                  className="mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Quarterly Results
                </h3>
                <a
                  href="/investor/notice-of-board-meetings"
               className="inline-flex items-center text-blue-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  Read More
                  <Image
                    src="/b-right-arrow.svg"
                    alt="arrow"
                    width={16}
                    height={16}
                    className="ml-2"
                  />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Investor Image 2 */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="w-full md:w-1/3 px-4"
          >
            <div className="overflow-hidden">
              <Image
                src="/investor-2.jpg"
                alt="Investor"
                width={400}
                height={300}
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          {/* Investor Presentations */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="w-full md:w-1/3 px-4"
          >
            <div className="group relative text-center p-6 transition overflow-hidden">
              <div className="absolute inset-0 w-0 group-hover:w-full  bg-blue-400 z-0"></div>
              <div className="relative z-10">
                <Image
                  src="/investore.png"
                  alt="Investor Icon"
                  width={50}
                  height={50}
                  className="mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Investor Presentations
                </h3>
                <a
                  href="/investor/investor-presentations"
                  className="inline-flex items-center text-blue-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  Read More
                  <Image
                    src="/b-right-arrow.svg"
                    alt="arrow"
                    width={16}
                    height={16}
                    className="ml-2"
                  />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    );
};

export default Investors;
