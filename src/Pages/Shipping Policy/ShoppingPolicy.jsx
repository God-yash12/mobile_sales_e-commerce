import React from 'react';

const ShippingPolicy = () => {
  return (
    <div className="container mx-auto p-4 md:p-6 lg:p-8 bg-white text-gray-700 mb-32 overflow-hidden">
      <div>
        <h1 className="text-center mt-5 text-2xl md:text-3xl underline mb-12 md:mb-20 font-bold tracking-wider">
          SHIPPING POLICY
        </h1>
      </div>
      <h2 className="text-xl md:text-2xl font-bold mb-4">Shipping Policy</h2>
      <p className="mb-4">
        “MobileGoo” offers free shipping on all its products. Delivery period varies from 2-5 working days in normal circumstances depending upon the location of delivery.
      </p>
      <h2 className="text-lg md:text-xl font-semibold mb-4">Key Points to Consider at the Time of Receipt of Order</h2>
      <ol className="list-decimal ml-6 mb-4">
        <li className="mb-2">Ensure outer packaging has not been tampered, repacked, seal broken or damaged.</li>
        <li className="mb-2">Record a complete video while opening the package.</li>
        <li className="mb-2">Take photos of the phone and accessories received from all sides.</li>
        <li className="mb-2">Ensure IMEI as per invoice is matching with IMEI of the product received.</li>
      </ol>
      <h2 className="text-lg md:text-xl font-semibold mb-4 text-center mt-16">Customer Service</h2>
      <p className="text-center">
        For any queries/complaints, please contact us at <a href="mailto:support@mobilegoo.shop" className="text-blue-500">support@mobilegoo.shop</a>
      </p>
    </div>
  );
};

export default ShippingPolicy;
