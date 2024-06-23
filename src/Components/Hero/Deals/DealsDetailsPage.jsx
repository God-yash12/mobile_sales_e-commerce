import React from 'react';
import { useParams } from 'react-router-dom';

const DealsDetailsPage = () => {
  const { id } = useParams();

  console.log('ID from params:', id);


  // Replace with your actual data fetching logic or import data
  // For now, using static data as an example
  const products = [
    {
      id: 1,
      name: 'Apple iPhone 15 Pro Max Refurbished',
      image: 'https://macsupportnepal.net/uploads/posts/jjuyugh1701243552.jpg',
      price: 114999,
      originalPrice: 176908,
      emi: 5576,
      discount: 35,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies justo nec maximus ultricies.',
    },
    {
      id: 2,
      name: 'Samsung Galaxy S22 Ultra',
      image: 'https://www.mytrendyphone.eu/images2/Samsung-Galaxy-S22-Ultra-5G-128GB-Phantom-Black-07581700243134-28022022-01-p.jpg',
      price: 99999,
      originalPrice: 119999,
      emi: 4999,
      discount: 17,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies justo nec maximus ultricies.',
    },
    // Add more products as needed
  ];

  // Find the product with matching id
  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>; // Handle case where product is not found
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img src={product.image} alt={product.name} className="w-full h-full object-cover rounded-md" />
      <h2 className="text-2xl font-bold mt-4">{product.name}</h2>
      <p className="text-gray-500 mt-2">₹ {product.price}</p>
      <p className="text-green-500 line-through">₹ {product.originalPrice}</p>
      <p className="mt-2">{product.description}</p>
    </div>
  );
};

export default DealsDetailsPage;
