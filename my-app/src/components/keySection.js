'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const counters = [
  { img: '/key-graph.svg', prefix: 'Rs', value: 169, suffix: 'Bn', title: 'Group Turnover', caption: '(FY 23-24)' },
  { img: 'key-people.svg', value: 32000, suffix: '+', title: 'Employees Strength' },
  { img: '/key-gear.svg', value: 74, title: 'Plants Globally' },
  { img: '/diversified-graph.svg', value: 26, title: 'Diversified Product Lines' },
];

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      delay,
    },
  }),
};

const KeySection = () => {
  return (
    <section className="py-16 bg-blue-900 key-section mt-50">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-8 mb-12">
          {/* Text */}
          <motion.div
            className="lg:w-1/3 w-full order-2 lg:order-none"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.1}
          >
            <div className="text-center lg:text-left  pb-4">
              <h5 className="text-md font-medium text-white mb-1 relative  text-black font-semibold before:content-[''] before:absolute before:w-[40px] before:h-[3px] before:bg-[rgb(var(--secondary-color))] before:left-0 before:top-[-15px]">Diversity and inclusion fosters innovation</h5>
              <h2 className="text-3xl font-bold mb-3 text-white">OUR CULTURE</h2>
              <p className="text-white">
                A Great Place to Work-Certified organisation building and sustaining high trust and high
                performance culture of our company
              </p>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="lg:w-2/3 w-full order-1 lg:order-none"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.2}
          >
            <Image
              src="/key-banner.jpg"
              alt="banner"
              width={1200}
              height={600}
              className="w-full h-auto object-cover relative bottom-50 overlow-hidden"
            />
          </motion.div>
        </div>

        {/* Counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6" id="counter-section">
          {counters.map((item, index) => (
            <motion.div
              key={index}
              className="text-center"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.3 + index * 0.2}
            >
              <Image src={item.img} alt="icon" width={50} height={50} className="mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-1 text-white">
                {item.prefix && `${item.prefix} `}
                <span>{item.value}</span>
                {item.suffix && ` ${item.suffix}`}
              </h3>
              <h4 className="text-md font-semibold text-white">{item.title}</h4>
              {item.caption && <p className="text-sm text-white mt-1">{item.caption}</p>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeySection;
