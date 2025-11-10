import React from "react";

function SectionGrid({ data, head }) {
  // Set grid columns responsively based on item count
  const colsClass =
    data.length >= 3
      ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      : "grid-cols-1 md:grid-cols-2";

  return (
    <div className="px-4 sm:px-8 lg:px-20 py-8 text-teal-900">
      {/* Section heading */}
      <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl mb-8 text-center">{head ? head : ""}</h1>
      <div className={`grid ${colsClass} gap-6 lg:p-10`}>
        {data.map((dat, idx) => (
          <div key={idx} className="aspect-square bg-white px-3 py-5 sm:px-6 rounded-2xl shadow-md flex flex-col items-center">
            <img
              src={dat.image}
              alt={dat.text || "Section item"}
              className="w-full h-full sm:h-56 lg:h-full lg:w-full object-cover rounded-2xl mb-4 "
            />
            <h3 className="font-bold text-lg sm:text-xl lg:text-2xl py-2 text-center">{dat.text}</h3>
            <p className="font-light text-center">{dat.subtext}</p>
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default SectionGrid;
