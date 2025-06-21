"use client";

import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";

export default function CulturePage() {
    return (
        <>
            <Head>
                <title>Culture - Uno Minda</title>
                <meta
                    name="description"
                    content="Sustainability and ESG Framework - Uno Minda"
                />
            </Head>

            <section className="py-12 bg-white relative">
                <div className="container mx-auto px-4">
                    {/* Top Banner Image */}
                    <motion.div
                        className="mb-10 relative z-0"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <Image
                            src="/culture-banner.jpg"
                            alt="culture banner"
                            width={1200}
                            height={600}
                            className="w-full rounded-lg shadow-lg"
                        />
                    </motion.div>

                    {/* Overlapping Section */}
                    <motion.div
                        className="-mt-45 relative z-10 bg-white p-6 flex flex-wrap items-center w-180"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        {/* Image Column */}
                        <div className="w-full sm:w-2/5 md:w-1/3 p-2">
                            <Image
                                src="/culture-thumb.png"
                                alt="update image"
                                width={200}
                                height={200}
                                className="w-[180px] h-[180px] object-cover"
                            />

                        </div>

                        {/* Text Column */}
                        <div className="w-full sm:w-3/5 md:w-3/6 p-2">
                            <div>
                                <h5 className="text-md font-medium  mb-1 relative  text-black font-semibold before:content-[''] before:absolute before:w-[40px] before:h-[3px] before:bg-[rgb(var(--secondary-color))] before:left-0 before:top-[-15px]">
                                    Robust ESG Framework
                                </h5>
                                <h2 className="text-xl font-bold text-white mb-2">
                                    SUSTAINABILITY
                                </h2>
                                <p className="text-white-700 text-sm">
                                    Uno Minda believes in spreading smiles by nurturing inclusive
                                    growth. We endeavour to empower the communities we live and
                                    work within.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
