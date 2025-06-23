"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";

const categories = [
  "4 Wheeler",
  "2 Wheeler ICE",
  "2 Wheeler EV",
  "Commercial Vehicle",
  "Off Road",
];

const allProducts = [
  { id: 1, name: "Alloy Wheel Cover", category: "4 Wheeler", image: "/alloy-wheel.jpg" },
  { id: 2, name: "Engine Oil Filter", category: "2 Wheeler ICE", image: "/alloy-wheel.jpg" },
  { id: 3, name: "Battery Pack", category: "2 Wheeler EV", image: "/alloy-wheel.jpg" },
  { id: 4, name: "Truck Indicator Light", category: "Commercial Vehicle", image: "/alloy-wheel-cover.jpg" },
  { id: 5, name: "Tractor Headlamp", category: "Off Road", image: "/alloy-wheel.jpg" },
  { id: 6, name: "Bumper Guard", category: "4 Wheeler", image: "/alloy-wheel.jpg" },
  { id: 7, name: "Rearview Mirror", category: "4 Wheeler", image: "/alloy-wheel.jpg" },
  { id: 8, name: "Disc Brake", category: "2 Wheeler ICE", image: "/alloy-wheel.jpg" },
  { id: 9, name: "Side Indicator", category: "2 Wheeler EV", image: "/alloy-wheel.jpg" },
  { id: 10, name: "Heavy Duty Bumper", category: "Commercial Vehicle", image: "/alloy-wheel.jpg" },
  { id: 11, name: "Hydraulic Cylinder", category: "Off Road", image: "/alloy-wheel.jpg" },
  { id: 12, name: "Roof Rail", category: "4 Wheeler", image: "/alloy-wheel.jpg" },
  { id: 13, name: "Oil Cap", category: "2 Wheeler ICE", image: "/alloy-wheel.jpg" },
  { id: 14, name: "Electric Motor", category: "2 Wheeler EV", image: "/alloy-wheel.jpg" },
  { id: 15, name: "EV Dashboard", category: "2 Wheeler EV", image: "/alloy-wheel.jpg" },
  { id: 16, name: "Alloy Wheel Cover", category: "4 Wheeler", image: "/alloy-wheel.jpg" },
  { id: 17, name: "Alloy Wheel Cover", category: "4 Wheeler", image: "/alloy-wheel.jpg" },
  { id: 18, name: "Alloy Wheel Cover", category: "4 Wheeler", image: "/alloy-wheel.jpg" },
  { id: 19, name: "Alloy Wheel Cover", category: "4 Wheeler", image: "/alloy-wheel.jpg" },
  { id: 20, name: "Alloy Wheel Cover", category: "4 Wheeler", image: "/alloy-wheel.jpg" },

];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const AdvanceTechnical = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false);

  const filteredProducts = allProducts.filter(
    (product) => product.category === selectedCategory
  );

  useEffect(() => {
    // delay so refs are available before Swiper initializes
    const timer = setTimeout(() => setSwiperReady(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-16 relative z-0 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-10"
        >
          <h5 className="text-lg font-medium text-gray-600">
            Assurance of Quality and World Class Standards
          </h5>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
            DIVERSIFIED PRODUCT PORTFOLIO
          </h2>
          <p className="text-gray-500 mt-2">Catering to all vehicle segments</p>
        </motion.div>

        {/* Category Tabs */}
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="flex flex-wrap justify-center gap-4 text-center mb-8"
        >
          {categories.map((category) => (
            <li
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded cursor-pointer transition-all duration-300 text-sm md:text-base ${selectedCategory === category
                ? "bg-blue-100 text-blue-700 border-b-2 border-blue-700 font-semibold"
                : "text-gray-600 hover:bg-blue-50"
                }`}
            >
              {category}
            </li>
          ))}
        </motion.ul>

        {/* Swiper Navigation Buttons */}
        <div className="absolute top-[60%] left-20 z-10">
          <button
            ref={prevRef}
            className="w-[30px] h-[30px] bg-no-repeat bg-center border border-blue-400 text-blue-400 rounded-full flex items-center justify-center"
            aria-label="Previous"
          >
            <ChevronLeft size={16} />
          </button>
        </div>

        <div className="absolute top-[60%] right-20 z-10">
          <button
            ref={nextRef}
            className="w-[30px] h-[30px] bg-no-repeat bg-center border border-blue-400 text-blue-400 rounded-full flex items-center justify-center"
            aria-label="Next"
          >
            <ChevronRight size={16} />
          </button>
        </div>


        {/* Product Slider */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="relative"
        >
          {filteredProducts.length > 0 && swiperReady ? (
            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              observer={true}
              observeParents={true}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 4 },
              }}
              className="pb-12"
            >
              {filteredProducts.map((product) => (
                <SwiperSlide key={product.id}>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="bg-white border rounded-lg p-4 shadow-sm hover:shadow-md transition h-full flex flex-col items-center"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-24 h-24 object-contain mb-4"
                    />
                    <h3 className="text-lg font-bold text-gray-800 text-center">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-500 text-center">
                      Category: {product.category}
                    </p>
                  </motion.div>


                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <p className="text-center text-gray-500">No products found.</p>
          )}
        </motion.div>
        <div className="mt-10 flex justify-center">
          <button className="px-6 py-2 text-blue-600 border border-blue-600 rounded hover:bg-blue-600 hover:text-white transition duration-300">
            View More Products
          </button>
          {/* Load More / View More Button */}
        </div>
      </div>
    </section>
  );
};

export default AdvanceTechnical;
