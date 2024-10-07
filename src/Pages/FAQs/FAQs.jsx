import React, { useState } from "react";
import FaqData from "./FaqData";
import { RiArrowDropDownLine } from "react-icons/ri";

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswers = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const sortedFaqData = [...FaqData].sort((a, b) => a.id - b.id);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-center text-3xl mt-8 mb-14 font-bold">FAQs</h1>
      {sortedFaqData.map((data, index) => (
        <div key={data.id} className="mb-4">
          <h1
            className="flex justify-between items-center text-xl text-gray-700 mb-2 cursor-pointer"
            onClick={() => toggleAnswers(index)}
          >
            {data.question1}
            <RiArrowDropDownLine
              className={`text-3xl text-gray-600 transition-transform duration-300 ${
                activeIndex === index ? "rotate-180" : ""
              }`}
            />
          </h1>
          <div
            className={`overflow-hidden transition-all duration-500 ${
              activeIndex === index ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <p className="transition-opacity duration-300">
              {data.answer1}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQs;
