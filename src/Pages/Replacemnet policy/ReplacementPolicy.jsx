import React from 'react';

const ReplacementPolicy = () => {
  return (
    <div className="container mx-auto p-4 md:p-6 lg:p-8 bg-white text-gray-700 mb-32 overflow-hidden">
      <div>
        <h1 className="text-center mt-5 text-2xl md:text-3xl underline mb-12 md:mb-20 font-bold tracking-wider">
          REPLACEMENT POLICY
        </h1>
      </div>
      <h2 className="text-xl md:text-2xl font-bold mb-4">Replacement Policy</h2>
      <p className="mb-4">
        Duration: 07 days from the date of delivery. Free replacement is applicable only in the following conditions:
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li className="mb-2">Item received is physically damaged at the time of receipt of package;</li>
        <li className="mb-2">Item received has missing parts or accessories;</li>
        <li className="mb-2">Item received is different from the item(s) ordered;</li>
        <li className="mb-2">Item received is defective/not working properly.</li>
      </ul>

      <p className="mb-4">
        In order to claim replacement for conditions mentioned above, sufficient evidence shall be produced by customer including Unboxing Video, Photo of the item etc.
      </p>

      <p className="mb-4">
        In case the same item is not available in stock for free replacement, it will be replaced with another product variant of the same or higher price. If no such stock is available, a refund will be initiated.
      </p>

      <h2 className="text-lg md:text-xl font-semibold mb-4">Process to Claim Replacement:</h2>
      <ul className="list-disc ml-6 mb-4">
        <li className="mb-2">Contact us at +91 80072 00038 and send details, screenshot, and video etc. as required to <a href="mailto:support@mobilegoo.shop" className="text-blue-500">support@mobilegoo.shop</a>.</li>
        <li className="mb-2">If your order is eligible for replacement, we will arrange reverse pickup from your location.</li>
        <li className="mb-2">The free replacement order will be shipped through standard shipping once the original order is returned.</li>
      </ul>

      <h2 className="text-lg md:text-xl font-semibold text-center mt-10">Contact Us</h2>
      <p className="text-center mt-3">
        For any queries or complaints regarding the replacement policy, please contact us at <a href="mailto:support@mobilegoo.shop" className="text-blue-500">support@mobilegoo.shop</a>.
      </p>
    </div>
  );
};

export default ReplacementPolicy;
