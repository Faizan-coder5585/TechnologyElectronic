import React from 'react'

const Technology = () => {
  return (
    <section className="technology-section py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-12">
          <h5 className="text-black">
            LEADER IN AUTOMOTIVE TECHNOLOGY
          </h5>
          <h2 className="text-3xl font-bold text-black mb-2">
            TECHNOLOGY AND INNOVATION
          </h2>
          <p className="text-gray-600">Strong Research and Development Capabilities</p>
        </div>

        {/* Technology Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Personalised",
              text:
                "Reimagining the automotive experience with customised exterior and interior lightings, immersive infotainment, ...",
              img: "/technology-1.jpg",
              link: "/technology/pace#personalised",
            },
            
            {
              title: "Autonomous",
              text:
                "Reimagining the automotive experience with customised exterior and interior lightings, immersive infotainment, ...",
              img: "/technology-1.jpg",
              link: "/technology/pace#personalised",
            },
            
            {
             title: "Connected",
              text:
                "Enabling safer and smarter mobility with network of advanced technologies and communication systems...",
              img: "/technology-3.jpg",
              link: "/technology/pace#connected",
            },
            
            {
             title: "Electrified",
              text:
                "Driving trends towards vehicle electrifications with our innovative charging solutions, advance motor...",
              img: "/technology-4.jpg",
              link: "/technology/pace#electrified",
            },
            
          ].map(({ title, text, img, link }, index) => (
            <div
              key={index}
              className="relative bg-white shadow-lg rounded-xl overflow-visible transform transition-all duration-300 hover:shadow-2xl group"
              data-aos="slide-up"
              data-aos-duration={`${500 + index * 200}`}
            >
              {/* Floating Image Positioned Top-Left */}
              <div className="absolute -top-6 left-6 z-20">
                <img src={img} alt={title} className=" w-40 h-40 object-contain" />
              </div>

              {/* Content with Overlay */}
              <div className="relative overflow-hidden z-10 py-5">
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-blue-800 translate-y-[-100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0 pointer-events-none"></div>

                {/* Text Content */}
                <div className="relative z-10 pl-50 ">
                  <h2 className="text-xl font-bold text-white mb-2">{title}</h2>
                  <p className="text-white -600 mb-4">{text}</p>
                  <a
                    href={link}
                    className="inline-flex items-center text-white font-semibold opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out"
                  >
                    Read More
                    <img
                      src="/b-right-arrow.svg"
                      alt="arrow"
                      className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5"
                    />
                  </a>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Technology





