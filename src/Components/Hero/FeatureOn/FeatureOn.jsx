import React from 'react';
import BBC from "../../../assets/FeatureOn/bbc.png";
import NewYorkTimes from "../../../assets/FeatureOn/newyorktimes.png";
import Kantipur from "../../../assets/FeatureOn/kantipur.png";
import Himalayan from "../../../assets/FeatureOn/himalayan.png";
import News24 from "../../../assets/FeatureOn/news24.png";
import { Link } from 'react-router-dom';
import Star from "../../../assets/star.png";
import { motion } from 'framer-motion';

const data = [
    {
        id: 1,
        image: BBC,
        link: "/news",
    },
    {
        id: 2,
        image: NewYorkTimes,
        link: "/news",
    },
    {
        id: 3,
        image: Kantipur,
        link: "/news",
    },
    {
        id: 4,
        image: News24,
        link: "/news",
    },
    {
        id: 5,
        image: Himalayan,
        link: "/news",
    },
]

const FeatureOn = () => {
  return (
    <div className="mb-20 px-4">
      <div className="container">
        <div className="flex justify-center items-center gap-3 mb-10">
          <img src={Star} alt="" className="w-8 h-8" />
          <h1 className="text-4xl sm:lg md:2xl text-center font-bold">Feature On</h1>
          <img src={Star} alt="" className="w-8 h-8" />
        </div>
        <div className="hidden lg:grid grid-cols-5 md:grid-cols-5 sm:grid-cols-1 gap-10 px-2">
          {data.map((news) => (
            <Link key={news.id} to={news.link}>
              <div className="flex flex-col justify-between items-center w-auto h-20 space-x-2 space-y-2">
                <img src={news.image} alt="" className="w-full h-full object-cover hover:scale-125 transition-all duration-500" />
              </div>
            </Link>
          ))}
        </div>
        {/* Slider for small and medium screens */}
        <div className="lg:hidden w-full overflow-hidden">
          <motion.div
            className="flex space-x-8"
            initial={{ x: "100%" }}
            animate={{ x: ["100%", "-280%"] }}
            transition={{
              repeat: Infinity,
              duration: 12,
              ease: "linear"
            }}
          >
            {data.map((news) => (
              <Link key={news.id} to={news.link}>
                <div className="flex-shrink-0 w-40 h-20">
                  <img src={news.image} alt="" className="w-full h-full object-cover hover:scale-125 transition-all duration-500" />
                </div>
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default FeatureOn;
