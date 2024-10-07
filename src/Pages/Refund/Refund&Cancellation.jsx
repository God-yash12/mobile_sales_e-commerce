import React from 'react';

const RefundCancellationPolicy = () => {
  return (
    <div className="container mx-auto p-4 md:p-6 lg:p-8 bg-white text-gray-700 mb-32 overflow-hidden">
      <div>
        <h1 className="text-center mt-5 text-2xl md:text-3xl underline mb-12 md:mb-20 font-bold tracking-wider">
          REFUND & CANCELLATION POLICY
        </h1>
      </div>
      <h2 className="text-xl md:text-2xl font-bold mb-4">Order Modification/Cancellation:</h2>
      <p className="mb-4">
        “MobileGoo” allows the customer to cancel the order within 06 hours of placing the order or dispatch of item, whichever is earlier. In any case, the order cannot be cancelled after shipment of the order. In case the item ordered is out of stock, the order modification option will be provided to you. Otherwise, the order amount will be refunded back.
      </p>

      <h2 className="text-lg md:text-xl font-semibold mb-4">Process:</h2>
      <ul className="list-disc ml-6 mb-4">
        <li className="mb-2">You can cancel the order within 06 hours of placing the order or dispatch of item, whichever is earlier.</li>
        <li className="mb-2">Order cannot be cancelled after shipment of the order.</li>
        <li className="mb-2">In case of order modification, you will receive an order modification intimation through email/WhatsApp.</li>
        <li className="mb-2">In case of cancellation, you will get the refund against your original method of payment.</li>
        <li className="mb-2">After successful cancellation, you will get the refund within 5-7 days.</li>
      </ul>

      <h2 className="text-lg md:text-xl font-semibold mb-4 text-center mt-16">Customer Service</h2>
      <p className="text-center mt-3">
        For any queries or complaints regarding the refund and cancellation policy, please contact us at <a href="mailto:support@mobilegoo.shop" className="text-blue-500">support@mobilegoo.shop</a>.
      </p>
    </div>
  );
};

export default RefundCancellationPolicy;
