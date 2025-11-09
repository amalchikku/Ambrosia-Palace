import React from "react";

function HeroBanner({ show, heading, title, heroimages }) {
  return (
    <div className="px-4 sm:px-8 lg:px-20 py-8 md:py-12 text-teal-900 flex flex-col items-center">
      {/* Heading */}
      <h1 className="font-bold text-2xl sm:text-3xl lg:text-5xl mb-2 text-center leading-relaxed">
        {heading ? heading : ""}
      </h1>
      {/* Title */}
      <p className="leading-normal font-light text-base sm:text-lg mb-4 text-center">
        {title ? title : ""}
      </p>
      {/* Call-to-action button */}
      <div className="py-4">
        {show && (
          <button className="bg-teal-900 hover:bg-black text-white font-bold py-2 px-6 border border-black rounded transition">
            Click Me !
          </button>
        )}
      </div>
      {/* Hero image */}
      <img
        src={heroimages}
        alt=""
        className="rounded-2xl h-48 sm:h-80 lg:h-38rem w-full max-w-3xl object-cover mt-3 shadow-md"
      />
    </div>
  );
}

export default HeroBanner;
