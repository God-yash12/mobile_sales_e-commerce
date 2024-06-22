import React, { useState } from "react";
import FaqData from "./FaqData";
import { RiArrowDropDownLine } from "react-icons/ri";

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswers = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container mt-20 mb-20">
      {FaqData.map((data, index) => (
        <div key={data.id} className="mb-4">
          <h1
            className="flex justify-between text-xl text-gray-700 mb-2 cursor-pointer "
            onClick={() => toggleAnswers(index)}
          >
            {data.question1}
            <RiArrowDropDownLine
              className={`text-3xl text-gray-600 transition-all duration-300 ${
                activeIndex === index ? "rotate-180" : ""
              }`}
            />
          </h1>
          <div
            className={`overflow-hidden transition-all duration-500 ${
              activeIndex === index ? "max-h-screen" : "max-h-0"
            }`}
          >
            <p
              className={` transition-opacity  duration-300 ${
                activeIndex === index ? "opacity-100" : "opacity-0"
              }`}
            >
              {data.answer1}
            </p>
         
          </div>
          
        </div>
        
      ))}
    </div>
  );
};

export default FAQs;
