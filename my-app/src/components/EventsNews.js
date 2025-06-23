"use client";

import Image from "next/image";
import Link from "next/link";

export default function EventsNewsPage() {
    return (
        <section className="events-news bg-white home-event-news-section hover-scroll-set py-16">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left Events Slider Section */}
                    <div className="w-full lg:w-2/3 animate-slideInLeft">
                        <div className="events-box">
                            <div className="mb-6 text-center">
                                <Link href="/events">
                                    <h5 className="text-sm font-semibold text-gray-700">
                                        CONFERENCE &amp; EVENT
                                    </h5>
                                </Link>
                                <h2 className="text-2xl font-bold">PAST AND RECENT EVENTS</h2>
                            </div>

                            {/* Slider: Can be replaced with Swiper or Slick */}
                            <div className="flex overflow-x-auto space-x-4">
                                {/* Event Card 1 */}
                                <div className="relative group w-80 shrink-0 bg-white shadow-md rounded-lg overflow-hidden">
                                    <figure className="relative w-full h-115 overflow-hidden">
                                        {/* Label */}
                                        <span className="block bg-gray-200 text-xs px-2 py-1 font-medium uppercase text-black z-10 relative">
                                            Recent
                                        </span>

                                        {/* Image */}
                                        <Image
                                            src="/Auto_component_show.jpg"
                                            alt="Auto Expo"
                                            width={320}
                                            height={200}
                                            className="w-full h-88 object-cover"
                                        />
                                    </figure>

                                    {/* Slide-up Overlay Block */}
                                    <div className="absolute left-0 right-0 -bottom-37 translate-y-0 group-hover:translate-y-[-100%] transition-transform duration-700 ease-in-out z-20">
                                        {/* Always-visible content (below image initially) */}
                                        <div className="bg-blue-900 opacity-80 text-black px-4 pt-9 pb-3">
                                            <span className="text-sm text-white block">    January 18 – 21, 2025 at Yashobhoomi  </span>
                                            <h2 className="truncate max-w-[230px] text-lg font-semibold text-white">
                                                The Auto Expo components Show 2025
                                            </h2>

                                        </div>

                                        {/* Blue overlay content (slides over image) */}
                                        <div className="bg-blue-900 text-white px-4 pb-4 h-40 pt-2 opacity-0 group-hover:opacity-80 transition-opacity duration-700 ease-in-out">
                                            <p className="text-md leading-relaxed">

                                                Embark on a journey into the future of mobility with Uno Minda at the Bharat Mobility Global Expo 2025 at Yashobhoomi, Dwarka, New Delhi!
                                                .
                                            </p>
                                            <a href="/about/auto-expo-2025" className='flex items-center' tabindex="0">Read More <Image src="/b-right-arrow.svg" className="ml-2 mt-1 w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1.5" width={10}
                                                height={10} alt="arrow" /></a>
                                        </div>
                                    </div>

                                </div>

                                <div className="group relative w-80 shrink-0 bg-white shadow-md rounded-lg overflow-hidden">
                                    {/* Hover Trigger Label */}
                                    <div className="bg-gray-200 text-xs px-2 py-1 font-medium uppercase text-black z-10 relative hover:bg-gray-300 transition-colors duration-300">
                                        Earlier
                                    </div>

                                    {/* Image Section */}
                                    <figure className="relative w-full h-115 overflow-hidden">
                                        <Image
                                            src="/Josh-Talk-2.jpg"
                                            alt="Auto Expo"
                                            width={320}
                                            height={200}
                                            className="w-full h-88 object-cover"
                                        />

                                        {/* Play Icon with Ripple Animation */}
                                        <div className="ripple-play-icon z-10 flex justify-center items-center absolute top-1/2 left-1/2 rounded-full bg-white cursor-pointer">
                                            <Image
                                                src="/play-video-icon.svg"
                                                alt="Play"
                                                width={28}
                                                height={28}
                                            />
                                        </div>

                                    </figure>

                                    {/* Slide-up Overlay Block */}
                                    <div className="absolute left-0 right-0 -bottom-37 translate-y-0 group-hover:translate-y-[-100%] transition-transform duration-700 ease-in-out z-20">
                                        {/* Always-visible content (below image initially) */}
                                        <div className="bg-blue-900 opacity-80 text-white px-4 pt-8 pb-3">
                                            <span className="text-sm text-white block">8th July 2024</span>
                                            <h2 className="text-lg text-whitefont-semibold mt-1">Josh Talks</h2>
                                        </div>

                                        {/* Blue overlay content (slides over image) */}
                                        <div className="bg-blue-900 text-white px-4 pb-4 h-40 pt-2 opacity-0 group-hover:opacity-80 transition-opacity duration-700 ease-in-out">
                                            <p className="text-md leading-relaxed">
                                                Josh Talks podcast featuring our CMD, Mr. Nirmal Kumar Minda. In this insightful
                                                interview, Mr. Minda discusses his inspiring journey as an industrialist.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* Right News Section */}
                    <div className="w-full lg:w-1/3 animate-slideInRight">
                        <div className="news-box">
                            <div className="mb-6 text-center">
                                <h5 className="text-sm font-semibold text-gray-700">
                                    Latest News
                                </h5>
                                <h2 className="text-2xl font-bold">NEWS &amp; UPDATES</h2>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                {/* News 1 - Text */}
                                <Link href="#" className="col-span-1">
                                    <div className="bg-gray-100 p-4 hover:bg-gray-200 transition-all h-full">
                                        <span className="text-xs text-gray-500">
                                            24th Jan 2025
                                        </span>
                                        <h2 className="text-sm font-semibold mt-1">
                                            Auto Expo 2025 - Dialogues
                                        </h2>
                                        <p className="text-md text-gray-600 mt-1">
                                            Mr. Minda talks about the Tier-1 major’s future
                                            technological readiness for the Indian market.
                                        </p>
                                    </div>
                                </Link>

                                {/* News 1 - Image */}
                                <Link href="#" className="col-span-1">
                                    <Image
                                        src="/1.jpg"
                                        alt="update image"
                                        width={200}
                                        height={100}
                                        className="w-full h-50 object-cover"
                                    />
                                </Link>

                                {/* News 2 - Image */}
                                <Link href="#" className="col-span-1">
                                    <Image
                                        src="/2.jpg"
                                        alt="update image"
                                        width={200}
                                        height={100}
                                        className="w-full h-50 object-cover"
                                    />
                                </Link>

                                {/* News 2 - Text */}
                                <Link href="#" className="col-span-1">
                                    <div className="bg-gray-100 p-4 hover:bg-gray-200 transition-all h-full">
                                        <span className="text-xs text-gray-500">
                                            9th March 2025
                                        </span>
                                        <h2 className="text-sm font-semibold mt-1">
                                            Uno Minda Pune Marathon
                                        </h2>
                                        <p className="text-md text-gray-600 mt-1">
                                            Uno Minda successfully organized a Marathon in Pune.
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
