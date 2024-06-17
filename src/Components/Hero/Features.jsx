import React from 'react';
import Feature1 from '../../assets/Hero/feature1.png';
import Feature2 from '../../assets/Hero/feature2.png';
import Feature3 from '../../assets/Hero/feature3.png';
import Feature4 from '../../assets/Hero/feature4.png';
import Feature5 from '../../assets/Hero/feature5.png';
import Feature6 from '../../assets/Hero/Feature6.png';

const data = [
    {
        id: 1,
        image: Feature1,
        text: "7 Days Replacement",
    },
    {
        id: 2,
        image: Feature2,
        text: "Upto 12 Months warranty",
    },
    {
        id: 3,
        image: Feature3,
        text: "EMI Available",
    },
    {
        id: 4,
        image: Feature6,
        text: "55+ Quality Checks",
    },
    {
        id: 5,
        image: Feature5,
        text: "Fast & Free Delivery",
    },
    {
        id: 6,
        image: Feature4,
        text: "Quick Response",
    },
]

const Features = () => {
  return (
    <div className="mx-3 my-10">
      <div data-aos="zoom-in" className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 px-5">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={item.image} alt={item.text} className="w-[150px] h-[150px] object-contain " />
            <p className="text-center">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Features;
