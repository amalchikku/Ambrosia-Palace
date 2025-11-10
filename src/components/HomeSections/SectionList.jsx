import React from "react";
import Food from "../../assets/list img.jpg";

function SectionList({ data }) {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-20 mt-20 md:mt-40 text-teal-900">
      <h1 className="font-bold text-3xl sm:text-4xl mb-10 text-center md:text-left">
        Hotel Menu
      </h1>
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
        {/* Text block */}
        <div className="flex flex-col py-10 space-y-6 flex-1">
          {data.map((item, index) => (
            <div key={index}>
              <h3 className="font-bold text-xl sm:text-2xl">{item.text}</h3>
              <p className="font-light">{item.title}</p>
            </div>
          ))}
        </div>
        {/* Image */}
        <img
          src={Food}
          alt="Food Menu"
          className="rounded-2xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-cover"
        />
      </div>
    </div>
  );
}

export default SectionList;
