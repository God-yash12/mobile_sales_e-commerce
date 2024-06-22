import React from 'react';
import { FaHeart, FaEye } from 'react-icons/fa';

const DemandsCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 relative overflow-hidden group" style={{ height: '450px' }}>
      <div className="relative h-64 md:h-48 lg:h-64">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover rounded-md transition-transform duration-300 group-hover:scale-110" />
        <div className="absolute top-0 right-0 flex flex-col space-y-2 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="text-white p-2 rounded-full bg-gray-800 bg-opacity-75 hover:bg-gray-600 transition-colors duration-300">
            <FaHeart />
          </button>
          <button className="text-white p-2 rounded-full bg-gray-800 bg-opacity-75 hover:bg-gray-600 transition-colors duration-300">
            <FaEye />
          </button>
        </div>
      </div>
      <div className="mt-4 text-center md:text-left">
        <h3 className="text-lg font-bold">{product.name}</h3>
        <div className="flex justify-center md:justify-start">
          <p className="text-gray-500 mr-4">₹ {product.price}</p>
          <p className="text-green-500 line-through">₹ {product.originalPrice}</p>
        </div>
        <p className="mt-2 text-black-500">
          EMI starting from <span className="text-green-500">₹{product.emi}</span>/month
        </p>
        <p className="mt-2 text-blue-500">{product.discount}% less vs. market</p>
      </div>
    </div>
  );
};

export default DemandsCard;
