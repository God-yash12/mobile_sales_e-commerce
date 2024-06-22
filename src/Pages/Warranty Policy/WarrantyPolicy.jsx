import React from 'react';

const WarrantyPolicy = () => {
  return (
    <div className="container mx-auto p-4 md:p-6 lg:p-8 bg-white text-gray-700 mb-32 overflow-hidden">
      <div>
        <h1 className="text-center mt-5 text-2xl md:text-3xl underline mb-12 md:mb-20 font-bold tracking-wider">
          WARRANTY POLICY
        </h1>
      </div>
      <h2 className="text-xl md:text-2xl font-bold mb-4">Warranty Policy</h2>
      <p className="mb-4">
      <span className="text-gray-700 text-xl font-semibold">Duration: </span>
        Six months limited warranty from the date of invoice. However, for accessories (including charger, earphones, and battery) and Laptops, a three-month limited warranty will be provided from the date of invoice. A 7-day checking warranty will be provided in case of SPL Category Device.
      </p>
      <p className="mb-4">
       <span className="text-gray-700 text-xl font-semibold">
       Original: &nbsp;
       </span>
        invoice and IMEI/Serial No. of the device will be required to claim warranty service. Warranty will not be provided if the invoice/proof of purchase is altered in any way or is made illegible.
      </p>
      <ol className="list-decimal ml-6 mb-4">
        <li className="mb-2">In the event of repairs etc, this warranty will thereafter continue and remain in force only for the unexpired period of the warranty. The time taken for repair and in transit whether under the warranty or otherwise shall not be excluded from the warranty period.</li>
        <li className="mb-2">While carrying out repair etc., Mobilegoo may use parts or accessories that are new or refurbished or reconditioned.</li>
        <li className="mb-2">Warranty does not cover normal wear and tear (including, without limitation, wear and tear of camera lenses, batteries or any display defects).</li>
        <li className="mb-2">Warranty does not cover defects caused by the battery being short-circuited, the seals of the battery enclosure or the cells being broken or showing evidence of tampering, or the battery being used in equipment other than those for which it has been specified.</li>
        <li className="mb-2">
          Warranty will void and not be provided in the following conditions:
          <ol className="list-decimal ml-6 mt-2">
            <li className="mb-2">If the original invoice is not provided or invoice/proof of purchase is altered in any way or is made illegible. If it is found that the product is damaged because of using a duplicate/other than original charger.</li>
            <li className="mb-2">If the correct IMEI number is not provided or removed, defaced, or altered or not matching with the Mobilegoo database.</li>
            <li className="mb-2">If the product is subject to unauthorized opening, repair or modifications, waterlogging, misuse, improper use, food or liquid spilling, exposure to inadequate temperature, moisture, dust, etc.</li>
            <li className="mb-2">If defects are due to causes beyond control like lightning, abnormal voltage, acts of God or while in transit to the service center or to the purchaser’s residence.</li>
            <li className="mb-2">If the product was used with, or connected to, a product, accessories, software and/or service not manufactured, supplied, or authorized by Mobilegoo.</li>
            <li className="mb-2">If the product was used with, or connected with, incompatible charging accessories.</li>
            <li className="mb-2">If any issue e.g. camera dot or any other functional issue arises directly from software updates.</li>
          </ol>
        </li>
        <li className="mb-2">Customer must register his/her complaint through our helpline number i.e. +91 80072 00038 to avail warranty services and the images of the device must be shared wherever required.</li>
        <li className="mb-2">The company shall not be liable for delay in furnishing or failing to furnish service if such delay or failure is caused by an act of God, strike, governmental action, logistics delay, non-availability of spare parts or any other cause beyond Mobilegoo control.</li>
        <li className="mb-2">The customer will be invoiced for any part and/or workmanship/labour charges that are not covered under the warranty.</li>
        <li className="mb-2">All the rights are reserved with Mobilgoo and the warranty policy etc. is subject to change without prior notice.</li>
        <li className="mb-2">Under no circumstances, the company is liable for loss directly or indirectly, arising out of loss or damage to records, information or data. Customer is advised to take backup of data etc. before handing over the unit for repair. The company shall not provide backup service.</li>
      </ol>
      <h2 className="text-lg md:text-xl font-semibold mb-4">Maximum Liability</h2>
      <p className="mb-4">
        For refurbished mobile handsets – Reimbursement shall be applicable on invoice value of the refurbished customer gadget as per the following scale. In case, if the company is not able to provide the handset after repair or replacement due to any reasons, the following depreciated amount may be reimbursed.
      </p>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 mb-8">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">Age of Device</th>
              <th className="border border-gray-300 px-4 py-2">Reimbursement %</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Up to 30 days</td>
              <td className="border border-gray-300 px-4 py-2">100%</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">31 days to 90 days</td>
              <td className="border border-gray-300 px-4 py-2">75%</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">91 days to 120 days</td>
              <td className="border border-gray-300 px-4 py-2">60%</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">121 days till warranty period</td>
              <td className="border border-gray-300 px-4 py-2">50%</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h2 className="text-lg md:text-xl font-semibold mb-4 text-center mt-16">Customer Service</h2>
      <p className="text-center">
        For all customer service inquiries, please email us at <a href="mailto:support@mobilehub.shop" className="text-blue-500">support@mobilehub.shop</a>
      </p>
    </div>
  );
};

export default WarrantyPolicy;
