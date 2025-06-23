import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/banner-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Hero Content */}
      <div className="relative z-20 h-full flex items-center px-10">
        {/* Decorative Line Box */}
        <div className="absolute top-[20%] left-25 h-[65%] w-[90px] border-l-4 border-t-4 border-b-4 border-white pointer-events-none"></div>

        {/* Content Wrapper with margin to separate from border */}
        <div className="ml-[100px] w-full max-w-2xl text-white animate__animated animate__fadeInUp">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Driving The New <br></br>Future of Mobility
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Leading Global Manufacturer of automotive components and systems supplying to OEMs.
          </p>
          <a
            href="/about"
            className="group relative inline-flex items-center gap-2 px-4 py-2 font-semibold overflow-hidden bg-blue-400 text-white transition-colors duration-300"
          >
            {/* Background overlay animating from top to bottom */}
            <span className="absolute inset-0 bg-blue-800 -translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0" />

            {/* Text */}
            <span className="relative z-10 text-black group-hover:text-black transition-colors duration-300">
              Read More
            </span>

            {/* Icon */}
            <img
              src="/arrow-right.png"
              alt="arrow"
              className="max-w-full w-auto"
            />
          </a>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
