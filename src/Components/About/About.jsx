import React from 'react';
import { useEffect } from 'react';
import Iphone from './Iphone.png';
import AOS from 'aos';

const About = () => {

    useEffect(() => {
        AOS.init({  
          duration: 1500, 
          once: true, 
        });
      }, []);

  return (
    <div className="mt-10 sm:mt-20">
      <div className="flex flex-col sm:flex-row  items-center mx-4 sm:mx-14 md:mx-16 lg:mx-24 mb-4 sm:mb-8">
        {/* Image Section */}
        <div data-aos="fade-right" className="sm:flex-shrink-0 sm:mr-8 mb-6">
          <img src={Iphone} alt="iPhone" className="w-full sm:max-w-sm lg:max-w-md" />
        </div>
        {/* Text Section */}
        <div className="flex flex-col justify-center" data-aos="fade-left">
          <h1 className="text-bold text-2xl sm:text-3xl mb-4">
            Welcome to Mobile Hub - Leading Seller in Refurbished Smartphones & Second Hand Smartphones
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            Mobile Hub, known as a refurbished smartphone expert and leader in the industry for the last 7 years, focuses on delivering quality products at the most affordable prices along with continued customer support services. We ensure the best quality products passed through 55 strict quality checks. Our aim is to contribute to a greener environment and reduce e-waste. Join our community and get the most reliable and affordable products ever.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
